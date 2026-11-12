# Loon 去广告插件合集

集中维护适用于不同 App 的 Loon 去广告插件。各插件按 App 独立安装，统一在本仓库更新。

## 插件目录

| 图标 | App | 插件 | 状态 | 使用说明 |
| --- | --- | --- | --- | --- |
| <img src="icons/zhibo8.jpg" width="32" height="32" alt="直播吧图标"> | 直播吧 | [Zhibo8_remove_ads.plugin](https://raw.githubusercontent.com/CodeApe-Xiaoyin/loon-plugins/main/plugins/kelee/Zhibo8_remove_ads.plugin) | v0.2.0 合并版 · 可莉🅥、落痕 | [直播吧说明](docs/zhibo8.md) |

本仓库维护直播吧插件，并归档可莉插件中心的 275 个明文插件配置。

[查看全部上游插件快照](plugins/kelee/README.md) · [快照说明与来源](vendor/kelee/README.md) · [静态检查标记](vendor/kelee/REVIEW.md)

[插件更新记录](CHANGELOG.md) 按日期记录各插件版本、针对的问题、具体改动和验证结果。每次更新同时修改插件的 `#!date`。

上游快照的安装链接固定到 `kelee-snapshot-2026-11-10` 标签，已发现的静态脚本与资源从本仓库读取。直播吧合并版使用 `main` 分支地址，由可莉规则与落痕广告配置脚本组成。详细安全审阅和设备验证仍待逐项完成，资源缺失项已在目录标记。

## 安装和更新

在上方目录选择需要的插件，将插件的 Raw 地址添加到 Loon 的插件管理中并启用。脚本地址已写入插件配置。

需要启用脚本和 MitM，并安装、信任 Loon 的 MitM 证书。具体版本要求和匹配域名见各插件说明。

后续更新提交到 `main` 分支。在 Loon 中更新远程插件，并刷新对应的远程脚本缓存以获取更新。

直播吧的安装地址如下。

```text
https://raw.githubusercontent.com/CodeApe-Xiaoyin/loon-plugins/main/plugins/kelee/Zhibo8_remove_ads.plugin
```

## 仓库结构

```text
plugins/          各 App 的 Loon 插件配置
scripts/          插件引用的响应处理脚本
icons/            各 App 的插件图标
docs/             各插件的说明与版本记录
vendor/kelee/     上游原件、依赖、来源清单与许可文本
```

新增插件使用 `plugins/<app>.plugin`、`scripts/<app>.js` 和 `docs/<app>.md`，并在首页目录添加条目。

## 问题反馈

通过仓库 Issues 提供 App 名称和版本、Loon 版本、广告位置及出现步骤。HAR 和截图中的 Cookie、令牌、用户标识等个人数据需先移除。

## 参考

- [Loon 插件文档](https://nsloon.app/docs/Plugin/)
