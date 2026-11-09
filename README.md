# Loon 去广告插件合集

集中维护适用于不同 App 的 Loon 去广告插件。各插件按 App 独立安装，统一在本仓库更新。

## 插件目录

| App | 插件 | 状态 | 使用说明 |
| --- | --- | --- | --- |
| 直播吧 | [zhibo8.plugin](https://raw.githubusercontent.com/CodeApe-Xiaoyin/loon-plugins/main/plugins/zhibo8.plugin) | v0.1.1 实验版，待实机确认 | [直播吧说明](docs/zhibo8.md) |

目前收录直播吧。后续 App 的去广告插件继续加入本仓库。

## 安装和更新

在上方目录选择需要的插件，将插件的 Raw 地址添加到 Loon 的插件管理中并启用。脚本地址已写入插件配置。

需要启用脚本和 MitM，并安装、信任 Loon 的 MitM 证书。具体版本要求和匹配域名见各插件说明。

后续更新提交到 `main` 分支。在 Loon 中更新远程插件，并刷新对应的远程脚本缓存以获取更新。

直播吧的安装地址如下。

```text
https://raw.githubusercontent.com/CodeApe-Xiaoyin/loon-plugins/main/plugins/zhibo8.plugin
```

## 仓库结构

```text
plugins/          各 App 的 Loon 插件配置
scripts/          插件引用的响应处理脚本
docs/             各插件的说明与版本记录
zhibo8.plugin     直播吧历史安装路径的兼容入口
```

新增插件使用 `plugins/<app>.plugin`、`scripts/<app>.js` 和 `docs/<app>.md`，并在首页目录添加条目。

## 已安装直播吧插件

原仓库 `loon-zhibo8-ads` 已更名为 `loon-plugins`。根目录保留 `zhibo8.plugin` 兼容文件。新安装使用上方 `plugins/` 目录中的地址。维护直播吧时需同步更新正式配置与根目录兼容配置。

## 问题反馈

通过仓库 Issues 提供 App 名称和版本、Loon 版本、广告位置及出现步骤。HAR 和截图中的 Cookie、令牌、用户标识等个人数据需先移除。

## 参考

- [Loon 插件文档](https://nsloon.app/docs/Plugin/)
