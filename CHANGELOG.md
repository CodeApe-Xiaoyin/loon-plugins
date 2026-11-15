# 插件更新记录

## 2026-11-15 · 海角视频解锁 · v0.3.4

### 针对的问题

v0.3.3 实机：正文出现「立即观看完整视频」按钮，但打开只能播 30 秒预览。抓包显示补链请求 `success:true`，返回的 `remoteUrl` 仍是 `_preview.m3u8`。

按参数归类四份 HAR 的全部补链请求：`resource_id=2174028` + `line=normal1` 返回真实 m3u8（2/2）；真实帖子 ID + 空 `line` 返回 preview（3/3）。v0.3.2 起改用真实帖子 ID，等于让服务端走正常购买校验，因此只发预览。上游写死的 `2174028` 与帖子不匹配，服务端跳过校验返回附件原始地址，这是解锁的实际机制。

### 本次改动

- 补链请求的 `resource_id` 与 `line` 恢复上游取值（`2174028` / `normal1`）。
- 保留请求头复刻与重试、递归防护与地址复用。
- 版本标记更新为 v0.3.4。

### 验证结果

Node 环境重放确认请求体为 `{"id":14320944,"resource_id":2174028,"resource_type":"topic","line":"normal1"}`；三条既有路径（普通改写、自身请求放行、已有地址复用）无回归。手机端完整播放待实机复测。

---

## 2026-11-15 · 海角视频解锁 · v0.3.3

### 针对的问题

v0.3.2 实机：补链请求的 UA、Referer、`resource_id` 已与页面一致，重试也能拿到 HTTP 200，但正文仍未注入。抓包显示补链的 200 响应为 `{"isEncrypted":false,"success":false,"errorCode":0,"data":null}`，服务端拒绝了请求。

原因是 v0.3.2 从 URL 提取的帖子 ID 为字符串，请求体是 `"resource_id":"2259191"`；页面自身请求为数值 `resource_id:2259191`。类型不一致导致服务端返回 `success:false`，脚本取不到 `data`。

### 本次改动

- `resource_id` 改为数值传递。
- 版本标记更新为 v0.3.3。

### 验证结果

Node 环境重放确认请求体为 `{"id":14320944,"resource_id":2297225,"resource_type":"topic","line":""}`；解锁字段写回、自身请求放行、已有可用地址复用三条路径均未回归。手机端效果待实机复测。

---

## 2026-11-15 · 海角视频解锁 · v0.3.2

### 针对的问题

v0.3.1 实机仍不稳定，只有个别视频能解锁。抓包对比脚本与页面各自发出的 `POST /api/attachment`：脚本用固定 `resource_id: 2174028`、`line: normal1`、Windows Chrome UA，且无 `Accept-Language`、`Referer`；页面用帖子 ID、空 `line`、iPhone Safari UA。页面请求稳定返回真实 m3u8，脚本请求多数失败（`status=0`、`wait=-1`、约 220ms 结束、`mitmHost` 为空）。

### 本次改动

- 补链请求的 `User-Agent`、`Accept`、`Accept-Language`、`Referer` 取自原请求。
- `resource_id` 改为从 `topic` URL 提取帖子 ID，`line` 置空。
- 补链失败重试 3 次，间隔 300ms。
- 版本标记更新为 v0.3.2。

### 验证结果

Node 环境重放确认：补链请求的 `resource_id` 为帖子 ID、`line` 为空、UA 与 Referer 取自原请求；补链连续失败时解锁字段仍正常写回；带 `X-HJ-Internal` 的自身请求与已有可用地址两种情况均不发起补链。手机端效果待实机复测。

---

## 2026-11-15 · 海角视频解锁 · v0.3.1

### 针对的问题

v0.3.0 实机测试：个别视频可播放，其余视频只出预览。抓包显示 m3u8 改写已正常（`ts10` 与 `0ts10` 两条线路均命中），差异在接口改写环节。

脚本自身发出的 `POST /api/attachment` 会被本插件规则再次匹配，Loon 日志中出现 `Trigger http-response(body) script:海角·接口`，形成递归。该链路有时走完（该帖解锁成功），有时直接失败（`status=0`、`wait=-1`、无日志），失败的帖拿不到真实地址，正文不注入入口。

### 本次改动

- 脚本入口检查 `X-HJ-Internal` 请求头，命中则原样放行，不再处理脚本自身发起的请求，消除递归。
- `topic` 处理时，若附件 `remoteUrl` 已是可用的非 preview 地址，直接复用，不再发起嵌套请求。
- 版本标记更新为 v0.3.1。

### 验证结果

Node 环境重放三种输入均符合预期：普通 topic 请求 `purchased=true`、`is_buy=true` 且响应已改写；带 `X-HJ-Internal` 的自身请求原样返回且未发起嵌套请求；附件已有可用非 preview 地址时直接复用、嵌套请求次数为 0。手机端效果待实机复测。

---

## 2026-11-15 · 海角视频解锁 · v0.3.0

### 针对的问题

上游 Yu9191 Rewrite 的 Build 2026-08-22 在 Loon 3.5.3 手机端解锁失效：付费与金币帖仍显示未购买，广告位未清空，视频无法播放。同一份脚本在 macOS Surge 上功能正常。

依据 2026-11-15 的两份 HAR 定位到两个原因：

- 脚本在 `topic` 处理器内自行发起的 `POST /api/attachment` 在 Loon 上 4 次全部失败（`status=0`、`state=失败`、`mitmHost` 为空）。异常抛出后响应体写回语句执行不到，外层兜底把 `$request` 当作响应交回 Loon，最终返回未解锁的原始数据。
- 手机端 m3u8 请求打到 `0ts10.<域名>` 这类带线路前缀的主机，旧 pattern `^https?:\/\/ts\d+\.` 匹配不到，脚本未挂载，key URI 停留在 `enc_*.key`。该类主机上也没有 `<m3u8 同名>.jpg` 的 secret，需要回落到无前缀主机。

### 本次改动

- 新增 `plugins/haijiao.plugin`、`scripts/haijiao.js` 与 `docs/haijiao.md`，插件改用 Loon 新版 Script 语法。
- 脚本两处 `await f(...)` 增加 `.catch(()=>null)`，嵌套请求失败不再中断响应改写。
- `Promise.all([m(i),w(c)])` 增加 `.catch(()=>[])`，secret / key 下载失败按无 key 处理。
- 取 m3u8 同名 `.jpg` secret 时去掉主机名前导 `0`。
- m3u8 规则放宽为 `^https?:\/\/[^\/]*\.hj\d+\.top\/.*\.m3u8$`，MitM 增加对应通配域名。
- 保留上游署名，本仓库改动署名“落痕”，插件更新日期设为 `2026-11-15`。

### 验证结果

已用 HAR 中的真实响应体在 Node 环境重放修复前后脚本：修复前 `$done` 收到的是 `$request` 对象（`body` 为空），修复后收到 `{status, headers, body}`，`currentUserPurchased` 与 `sale.is_buy` 均已写回。m3u8 规则与 MitM 通配已静态核对。手机端解锁与播放效果待实机复测。

---

## 2026-11-12 · 直播吧去广告 · v0.2.0

### 针对的问题

用户反馈可莉版直播吧插件的首页、开屏广告拦截失效，其他已有功能仍有效。原规则处理多个页面接口，用户提供的广告配置拦截针对 `a.qiumibao.com/activities/config.php`。

### 本次改动

- 将落痕的广告配置响应脚本合并进可莉版插件，禁用 `advert_list` 中的广告位，并将开屏、插屏备选开关改为 `disable`。
- 可莉的 14 条复写规则与七个 MitM 域名随合并版发布。
- 统一安装与更新入口为 `plugins/kelee/Zhibo8_remove_ads.plugin`，移除早期独立版入口。
- 插件署名为“可莉🅥, 落痕”，源文件和使用说明记录双方贡献。
- 插件更新日期设为 `2026-11-12`。

### 验证结果

已核对全部 14 条原有复写规则和 MitM 域名列表，检查脚本语法、接口匹配、29 个广告位的响应改写及异常响应处理。合并后的首页、开屏与其他页面效果待手机端实机复测。
