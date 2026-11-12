# 仓库维护约定

本仓库 `CodeApe-Xiaoyin/loon-plugins` 是 Loon 插件的统一维护仓库。当前维护的复刻插件位于 `plugins/kelee/`。

## 每次更新插件

- 将插件的 `#!date` 更新为本次修改当天的 Asia/Shanghai 日期，格式为 `YYYY-MM-DD`。
- 更新插件的版本标记，并同步目录中的版本信息。
- 在根目录 `CHANGELOG.md` 的顶部新增记录，写明更新日期、插件名称、版本、针对的问题、具体改动和验证结果。
- 对尚待手机确认的去广告效果明确记录“待实机复测”，已验证的内容按实际结果填写。
- 同步插件使用说明中受更新影响的入口、要求和功能描述。
- 保留上游作者署名，本仓库新增贡献按用户要求署名“落痕”。

直播吧合并版的唯一维护入口为 `plugins/kelee/Zhibo8_remove_ads.plugin`，广告配置脚本位于 `scripts/zhibo8.js`。

历史归档的哈希和文件路径以 `vendor/kelee/manifest.json` 中指定的快照标签为准，当前维护版的修改记录写入 `CHANGELOG.md`。
