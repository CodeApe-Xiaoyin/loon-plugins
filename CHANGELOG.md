# 插件更新记录

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
