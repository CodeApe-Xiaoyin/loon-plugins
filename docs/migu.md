# 移动咪咕直播地址修复

## 安装

```text
https://raw.githubusercontent.com/CodeApe-Xiaoyin/loon-plugins/main/plugins/migu_repair.plugin
```

保持原始 M3U 订阅，不替换频道地址。插件匹配 `gslbserv.itv.cmvideo.cn/index.m3u8` 的 HTTP 响应。

## 工作方式

调度接口返回 302 时，插件检查 `Location`。如果目标是 `http://111.63.118.100:6060/...`，只把主机和端口改为 `cache.ott.fifalive.itv.cmvideo.cn`，完整保留播放路径和查询参数，包括鉴权参数。随后 `[Host]` 将 CDN 主机映射到 `base-v4v6-cm-miguvideo.e.cdn.chinamobile.com`。

## 验证记录

2026-11-21 的真实验证使用频道 `3000000020000011523`。改写后的播放清单返回 HTTP 200，清单中的第一个 TS 分片返回 HTTP 200，响应类型为 `video/mp2t`，文件头为 MPEG-TS。

如果 Loon 日志中已经看到插件命中，但播放器仍失败，先刷新频道获取新的 302 鉴权参数。插件不会复用旧的 Location 查询参数。
