# 直播吧去广告 · Loon 插件

实验版本 **v0.1.1**，依据 2026-11-09 的两份直播吧 HAR 编写。尚待 iOS 上的 Loon 实机确认去广告效果。

## 安装

在 Loon 的插件管理中添加以下远程地址并启用插件。

```text
https://raw.githubusercontent.com/CodeApe-Xiaoyin/loon-plugins/main/plugins/zhibo8.plugin
```

使用 Loon 3.5.1 (983) 或以上版本。确保脚本和 MitM 已启用，且 Loon 的 MitM 证书已安装并受信任。插件声明的解密域名为 `a.qiumibao.com`。

插件使用固定远程脚本地址。

```text
https://raw.githubusercontent.com/CodeApe-Xiaoyin/loon-plugins/main/scripts/zhibo8.js
```

## 工作方式

插件匹配 `a.qiumibao.com/activities/config.php` 的响应。

- 将 `advert_list` 中各广告位的 `enable` 设为 `false`。
- 将 `advert_config.splash_bk`、`advert_config.inter_bk` 设为 `"disable"`。
- 遇到无效 JSON 或结构不匹配时，沿用原响应。

抓包中 `advert_list` 包含 29 个广告位，涉及开屏、首页、插屏、评论、新闻与视频等位置。`"disable"` 的客户端处理方式和广告位关闭效果仍待实机确认。客户端已有广告缓存、SDK 默认配置或后续接口变化可能影响结果。

## 更新

后续提交到 `main` 分支时，上述两个远程地址保持固定。在 Loon 中更新远程插件，并刷新对应的远程脚本缓存以获取最新代码。更新后重新启动直播吧，观察开屏、首页、新闻内页和视频等位置的表现。

反馈问题时，可通过仓库 Issues 提供直播吧版本、Loon 版本、广告位置与出现步骤。如需提供 HAR，请先移除 Cookie、令牌和用户标识。

## 版本记录

### v0.1.1 · 2026-11-09

- 迁入统一的 Loon 去广告插件合集，调整远程脚本地址。
- 新安装入口为 `plugins/zhibo8.plugin`，根目录保留兼容入口。

### v0.1.0 · 2026-11-09

- 首次发布广告配置响应改写。
- 使用 GitHub Raw 地址提供插件与脚本更新。

## 参考

- [Loon 插件文档](https://nsloon.app/docs/Plugin/)
- [Loon 脚本绑定](https://github.com/loon0x00/loonmanual/blob/master/_autodocs/script-bindings.md)
