# 海角视频解锁（修复版）

当前版本为 **v0.3.1**，基于上游 Yu9191 Rewrite 的 Build 2026-08-22 修复。上游插件在 Loon 上解锁失效，原因与修复过程见下文。

## 安装

在 Loon 的插件管理中添加以下远程地址并启用插件。

```text
https://raw.githubusercontent.com/CodeApe-Xiaoyin/loon-plugins/main/plugins/haijiao.plugin
```

使用 Loon 3.5.1 (998) 或以上版本。确保脚本和 MitM 已启用，且 Loon 的 MitM 证书已安装并受信任。插件声明的解密域名可在插件末尾查看。

插件使用固定远程脚本地址。

```text
https://raw.githubusercontent.com/CodeApe-Xiaoyin/loon-plugins/main/scripts/haijiao.js
```

需要登录海角账号。插件不解密登录，只依赖站点自己携带的 `x-user-token` 请求头。

## 工作方式

接口响应经过三层 base64 解码后改写，再按原编码写回。

- `banner/banner_list`：将广告列表替换为空载荷。
- `topic/{id}`：把 `currentUserPurchased` 置为真，`sale.is_buy` 置为真、`buy_index` 置为 9999，并在正文注入完整视频入口。
- `attachment`：`remoteUrl` 为空或指向 preview 时，重新取一次附件地址。
- `*.hj*.top` 下的 m3u8：把加密 key 还原后内联为 `data:` URI，播放器不再需要请求 `enc_*.key`。

## v0.3.0 针对的问题

依据 2026-11-15 的两份 HAR：macOS Surge 侧功能正常，Loon 3.5.3 手机侧解锁失效。

### 问题一：嵌套请求失败导致整条改写中断

脚本在 `topic` 处理器里会自行发一次 `POST /api/attachment`。Loon 上该请求 4 次全部失败（HAR 中 `status=0`、`state=失败`、`mitmHost` 为空），异常抛出后 `o.body` 的写回语句执行不到，外层兜底又把 `$request` 当成响应交回 Loon，最终返回未解锁的原始数据。

HAR 侧对应：`topic` 响应 `modifiedResponse=true`，但载荷中 `currentUserPurchased=false`、`sale.buy_index=-1`、正文无注入。

### 问题二：m3u8 线路主机带前导数字

手机端播放器请求的是 `0ts10.<域名>` 这类带线路前缀的主机，旧 pattern `^https?://ts\d+\.` 匹配不到，脚本未挂载，key URI 停留在 `enc_*.key`。该类主机上也没有 `<m3u8 同名>.jpg` 的 secret 文件，需要回落到无前缀主机。

## v0.3.0 改动

- 两处 `await f(...)` 增加 `.catch(()=>null)`，嵌套请求失败不再中断响应改写。
- `Promise.all([m(i),w(c)])` 增加 `.catch(()=>[])`，secret / key 下载失败按无 key 处理。
- 取 m3u8 同名 `.jpg` secret 时去掉主机名前导 `0`。
- 插件改用 Loon 新版 Script 语法，m3u8 规则放宽为 `^https?://[^/]*\.hj\d+\.top/.*\.m3u8$`。

## v0.3.1 针对的问题

手机端实测：同一个插件下，个别视频可以播放，其余视频只出预览。抓包显示 m3u8 改写已正常（`ts10` 与 `0ts10` 两条线路都命中），差异出在接口改写环节。

脚本自身发出的 `POST /api/attachment` 会被本插件规则再次匹配。Loon 的日志里可以看到 `Trigger http-response(body) script:海角·接口`，说明嵌套请求触发了同一个脚本。这条递归链路有时能走完（该帖解锁成功），有时直接失败（`status=0`、`wait=-1`、无日志），失败的帖就拿不到真实地址，正文不注入入口。

### v0.3.1 改动

- 入口处检查 `X-HJ-Internal` 请求头，命中则原样放行，不再处理脚本自身发起的请求，消除递归。
- `topic` 处理时，若附件 `remoteUrl` 已是可用的非 preview 地址，直接复用，不再发起嵌套请求。

## 验证结果

已用 HAR 中的真实响应体在 Node 环境重放修复前后脚本：修复前 `$done` 收到的是 `$request` 对象（`body` 为空），修复后收到 `{status, headers, body}`，且 `currentUserPurchased`、`sale.is_buy` 均已写回。m3u8 规则与 MitM 通配已静态核对。

手机端解锁与播放效果待实机复测。

## 已知限制

- 站点若更换数据编码方式（当前仅三层 base64），脚本需同步调整。
- `attachment` 补链依赖脚本自身发起的请求；该请求被网络环境阻断时，正文不会注入完整视频入口，但解锁字段仍会写回。
- 上游脚本内写死了 `resource_id: 2174028`，当前服务端不校验该字段；若日后开始校验需同步修改。
