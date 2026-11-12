# 直播吧去广告 · 可莉与落痕合并版

当前版本为 **v0.2.0**，由可莉的直播吧去广告规则与落痕的广告配置拦截脚本合并。落痕脚本依据 2026-11-09 的两份直播吧 HAR 编写，合并后的实际去广告效果待设备确认。

## 安装

在 Loon 的插件管理中添加以下远程地址并启用插件。

```text
https://raw.githubusercontent.com/CodeApe-Xiaoyin/loon-plugins/main/plugins/kelee/Zhibo8_remove_ads.plugin
```

使用 Loon 3.5.1 (998) 或以上版本。确保脚本和 MitM 已启用，且 Loon 的 MitM 证书已安装并受信任。插件声明了可莉规则使用的七个解密域名，具体列表可在插件末尾查看。

已安装早期独立版或可莉原版的用户，请移除对应旧条目，再添加上述合并版，启用一个直播吧插件。原独立入口 `plugins/zhibo8.plugin` 已移除。

插件使用固定远程脚本地址。

```text
https://raw.githubusercontent.com/CodeApe-Xiaoyin/loon-plugins/main/scripts/zhibo8.js
```

## 工作方式

可莉规则处理信息流、横幅、弹窗、皮肤、挂件、热门搜索及页面精简。落痕补充处理 `a.qiumibao.com/activities/config.php` 的响应。

- 将 `advert_list` 中各广告位的 `enable` 设为 `false`。
- 将 `advert_config.splash_bk`、`advert_config.inter_bk` 设为 `"disable"`。
- 遇到无效 JSON 或结构不匹配时，沿用原响应。

抓包中 `advert_list` 包含 29 个广告位，涉及开屏、首页、插屏、评论、新闻与视频等位置。`"disable"` 的客户端处理方式和广告位关闭效果仍待实机确认。客户端已有广告缓存、SDK 默认配置或后续接口变化可能影响结果。

## 更新

后续提交到 `main` 分支时，上述两个远程地址保持固定。在 Loon 中更新远程插件，并刷新对应的远程脚本缓存以获取最新代码。更新后重新启动直播吧，观察开屏、首页、新闻内页和视频等位置的表现。

反馈问题时，可通过仓库 Issues 提供直播吧版本、Loon 版本、广告位置与出现步骤。如需提供 HAR，请先移除 Cookie、令牌和用户标识。

## 版本记录

### v0.2.0 · 2026-11-12

- 针对用户反馈的可莉版首页、开屏拦截失效，补充处理 `activities/config.php` 广告配置。
- 合并可莉直播吧规则与落痕广告配置脚本，统一为一个插件入口。
- 可莉原有 14 条复写规则随合并版发布。
- 插件作者栏署名为“可莉🅥, 落痕”，脚本与修改记录中注明落痕贡献。
- 更新后需要在手机上复测开屏、首页、新闻内页与其他原有功能。

### v0.1.2 · 2026-11-09

- 使用 `#!icon` 引用仓库中的直播吧官方 App Store 图标。
- 移除根目录旧版兼容文件，统一使用 `plugins/zhibo8.plugin`。

### v0.1.1 · 2026-11-09

- 迁入统一的 Loon 去广告插件合集，调整远程脚本地址。
- 新安装入口调整为 `plugins/zhibo8.plugin`。

### v0.1.0 · 2026-11-09

- 首次发布广告配置响应改写。
- 使用 GitHub Raw 地址提供插件与脚本更新。

## 参考

- 可莉规则来源与署名记录见[原插件](https://kelee.one/Tool/Loon/Lpx/Zhibo8_remove_ads.lpx)及[作者仓库](https://github.com/luestr/ProxyResource)。
- 可莉上游许可为 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)，许可原件随仓库归档。合并版的新增脚本与修改部分采用相同许可，署名落痕。
- [Loon 插件文档](https://nsloon.app/docs/Plugin/)
- [Loon 脚本绑定](https://github.com/loon0x00/loonmanual/blob/master/_autodocs/script-bindings.md)
