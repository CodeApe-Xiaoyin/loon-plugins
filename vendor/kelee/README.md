# 可莉资源快照

2026-11-10 从作者插件中心目录获取全部 275 个插件配置。作者站点在本次下载时提供的配置全部为明文。

本快照下载了 400 个资源文件，另外 4 个上游资源返回 404。272 个配置的已发现静态依赖完整，3 个存在缺失项。共有 73 个配置引用 JavaScript。

[打开插件目录](../../plugins/kelee/README.md) · [静态检查标记](REVIEW.md) · [SHA-256 与来源清单](manifest.json)

## 文件和更新方式

- `originals/` 保存下载时的原始插件字节。
- `resources/` 保存安装副本使用的静态资源，已发现的下一层静态资源地址也改为本仓库快照地址。
- `original-resources/` 保存经过地址替换的资源所对应的上游原件。其余资源与上游字节一致。
- `catalog.upstream.json` 保存原站目录和作者署名信息。
- `manifest.json` 记录原地址、SHA-256、镜像路径、下载状态、改动说明和缺失依赖。
- `licenses/` 保存可获取的依赖仓库许可文本。

安装副本位于 `plugins/kelee/`，使用 `kelee-snapshot-2026-11-10` 标签固定资源版本。目录页的安装链接也使用同一个标签。后续新增快照使用新标签，用户通过新版本链接更新。

## 资源缺失

| 上游资源 | 受影响配置 | 下载结果 |
| --- | --- | --- |
| `https://raw.githubusercontent.com/luestr/IconResource/main/App_icon/120px/EasyBike.png` | 哈罗去广告 | HTTP Error 404: Not Found |
| `https://kelee.one/Resource/JavaScript/EasyBike/mobileconfig-gateway.js` | 哈罗去广告 | HTTP Error 404: Not Found |
| `https://kelee.one/Resource/JavaScript/CommonScript/replace-body.js` | 腾讯视频去广告 | HTTP Error 404: Not Found |
| `https://kelee.one/Resource/Script/WexinMiniPrograms/chayanyuese/cyys1.jpg` | 微信小程序去广告 | HTTP Error 404: Not Found |

缺失资源在安装副本中同样改指向本仓库预期路径，目录页标记为待修复。

## 审阅范围

本次执行文件下载、依赖地址替换和静态特征提取。JavaScript 的网络 API、持久化存储、动态执行、压缩代码等检查结果记录在审阅清单。明文脚本仍可能读取匹配请求中的 Cookie、请求头或响应体，详细数据流和运行时行为需要逐项审阅。

原站目录注明 HTTPDNS 拦截器与广告平台拦截器是去广告插件的依赖，相关说明保留在目录原件中。

## 作者、来源和许可

插件原有 `#!author`、`#!homepage` 等署名字段已保留。安装副本增加了来源和采集时间注释，并将静态依赖地址替换为本仓库的固定标签。资源内容的地址替换由 `manifest.json` 中的 `modification` 字段注明。

可莉主仓库声明采用 CC BY-NC-SA 4.0，完整许可文本保存在 `LICENSE.upstream`。依赖中还包含采用 MIT、Apache-2.0、GPL-3.0、AGPL-3.0 等许可的第三方项目，具体文本见 `licenses/`，来源及许可记录见 `licenses.json`。原作者署名和文件内的第三方版权声明随快照保留。

[作者主仓库](https://github.com/luestr/ProxyResource) · [作者插件中心](https://hub.kelee.one) · [原仓库说明](UPSTREAM_README.md)
