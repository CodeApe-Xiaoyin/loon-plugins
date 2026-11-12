# 静态检查标记

这些标记用于定位需要人工查看的代码位置。它们表示代码包含相应语法或 API，安全结论需结合实际数据流判断。扫描覆盖已下载的静态文件，动态构造的请求地址和运行时加载内容仍需另外审阅。

- 网络请求 API 可发出请求，需查看 URL、请求头、请求体及其数据来源。
- 持久化存储可能用于 Cookie、令牌、设置或缓存，需结合读写位置检查。
- 动态执行包括 `eval`、`new Function` 和 `importScripts` 的语法特征。
- 编码字符串和压缩代码会增加人工审阅难度，协议处理和打包库也可能包含这些特征。
- ZIP 载荷属于客户端资源替换，需检查压缩包内容。

[完整机器可读结果](review.json) · [逐插件 MitM 域名与依赖信息](manifest.json)

| 资源 | 检查标记 | 相关插件 |
| --- | --- | --- |
| [XiaojukejiCharge_remove_ads.js](resources/kelee.one/Resource/JavaScript/XiaojukejiCharge/XiaojukejiCharge_remove_ads.js) | 网络请求 API、持久化存储、动态执行、编码字符串、压缩代码 | 小桔充电去广告 |
| [PICC_Insurance_remove_ads.js](resources/kelee.one/Resource/JavaScript/PICC_Insurance/PICC_Insurance_remove_ads.js) | 基础静态扫描 | 中国人保去广告 |
| [CaptureAccountToken.js](resources/kelee.one/Resource/JavaScript/TestFlight/CaptureAccountToken.js) | 网络请求 API、持久化存储、压缩代码 | 自动加入TestFlight |
| [AutoJoinTF.js](resources/kelee.one/Resource/JavaScript/TestFlight/AutoJoinTF.js) | 网络请求 API、持久化存储、压缩代码 | 自动加入TestFlight |
| [AutoMonitorTF.js](resources/kelee.one/Resource/JavaScript/TestFlight/AutoMonitorTF.js) | 网络请求 API、持久化存储、压缩代码 | 自动加入TestFlight |
| [YouTube_remove_ads_response.js](resources/kelee.one/Resource/JavaScript/YouTube/YouTube_remove_ads/YouTube_remove_ads_response.js) | 网络请求 API、持久化存储、压缩代码 | YouTube去广告 |
| [YouTube_remove_ads_request.js](resources/kelee.one/Resource/JavaScript/YouTube/YouTube_remove_ads/YouTube_remove_ads_request.js) | 网络请求 API、持久化存储、压缩代码 | YouTube去广告 |
| [response.bundle.js](resources/github.com/NSRingo/WeatherKit/releases/download/v3.1.0/response.bundle.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | Apple天气增强 |
| [KebidaDushu_remove_ads.js](resources/kelee.one/Resource/JavaScript/KebidaDushu/KebidaDushu_remove_ads.js) | 编码字符串 | 帆书去广告 |
| [12306_remove_ads.js](resources/kelee.one/Resource/JavaScript/12306/12306_remove_ads.js) | 基础静态扫描 | 12306去广告 |
| [sub-store-1.min.js](resources/github.com/sub-store-org/Sub-Store/releases/latest/download/sub-store-1.min.js) | 网络请求 API、持久化存储、动态执行、编码字符串、压缩代码 | Sub-Store |
| [sub-store-0.min.js](resources/github.com/sub-store-org/Sub-Store/releases/latest/download/sub-store-0.min.js) | 网络请求 API、持久化存储、动态执行、编码字符串、压缩代码 | Sub-Store |
| [cron-sync-artifacts.min.js](resources/github.com/sub-store-org/Sub-Store/releases/latest/download/cron-sync-artifacts.min.js) | 网络请求 API、持久化存储、动态执行、编码字符串、压缩代码 | Sub-Store |
| [IThome_remove_ads.js](resources/kelee.one/Resource/JavaScript/IThome/IThome_remove_ads.js) | 基础静态扫描 | IT之家去广告 |
| [updatable.jq](resources/kelee.one/Resource/JQLang/Amap/updatable.jq) | 基础静态扫描 | 高德地图去广告 |
| [search_poi_detail.jq](resources/kelee.one/Resource/JQLang/Amap/search_poi_detail.jq) | 基础静态扫描 | 高德地图去广告 |
| [DjDuoDuo_remove_ads.js](resources/kelee.one/Resource/JavaScript/DjDuoDuo/DjDuoDuo_remove_ads.js) | 编码字符串、压缩代码 | DJ多多去广告 |
| [VVebo_repair.js](resources/kelee.one/Resource/JavaScript/VVebo/VVebo_repair.js) | 持久化存储 | VVebo时间线修复 |
| [BaiduSearchHomePage_remove_ads.js](resources/kelee.one/Resource/JavaScript/BaiduSearch/BaiduSearchHomePage_remove_ads.js) | 压缩代码 | 百度网页去广告 |
| [Baidu_input_method_remove_ads.js](resources/kelee.one/Resource/JavaScript/Baidu_input_method/Baidu_input_method_remove_ads.js) | 基础静态扫描 | 百度输入法去广告 |
| [BooHee_remove_ads.js](resources/kelee.one/Resource/JavaScript/BooHee/BooHee_remove_ads.js) | 基础静态扫描 | 薄荷健康去广告 |
| [Fileball_mount.js](resources/kelee.one/Resource/JavaScript/Fileball/Fileball_mount.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | Fileball网盘挂载 |
| [1.1.1.1.request.js](resources/raw.githubusercontent.com/VirgilClyne/Cloudflare/main/js/1.1.1.1.request.js) | 网络请求 API、持久化存储、压缩代码 | 1.1.1.1配置管理 |
| [1.1.1.1.response.js](resources/raw.githubusercontent.com/VirgilClyne/Cloudflare/main/js/1.1.1.1.response.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | 1.1.1.1配置管理 |
| [ShuQiCenterReader_remove_ads.js](resources/kelee.one/Resource/JavaScript/ShuQiCenterReader/ShuQiCenterReader_remove_ads.js) | 基础静态扫描 | 书旗小说去广告 |
| [home_smzdm_remove_ads.jq](resources/kelee.one/Resource/JQLang/smzdm/home_smzdm_remove_ads.jq) | 基础静态扫描 | 什么值得买去广告 |
| [RedPaper_remove_ads.js](resources/kelee.one/Resource/JavaScript/RedPaper/RedPaper_remove_ads.js) | 持久化存储 | 小红书去广告 |
| [Weixin_external_links_unlock.js](resources/kelee.one/Resource/JavaScript/Weixin/Weixin_external_links_unlock.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | 微信外部链接解锁 |
| [WPS_checkin.js](resources/kelee.one/Resource/JavaScript/WPS/WPS_checkin.js) | 网络请求 API、持久化存储、动态执行、编码字符串、压缩代码 | WPS每日签到 |
| [my.js](resources/kelee.one/Resource/JavaScript/Qbb/my.js) | 编码字符串、压缩代码 | 亲宝宝去广告 |
| [homepage.js](resources/kelee.one/Resource/JavaScript/Qbb/homepage.js) | 编码字符串、压缩代码 | 亲宝宝去广告 |
| [script-hub.js](resources/raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/script-hub.js) | 网络请求 API、持久化存储、动态执行、压缩代码 | Script-Hub |
| [Rewrite-Parser.js](resources/raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/Rewrite-Parser.js) | 网络请求 API、持久化存储、动态执行、压缩代码 | Script-Hub |
| [rule-parser.js](resources/raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/rule-parser.js) | 网络请求 API、持久化存储、动态执行、压缩代码 | Script-Hub |
| [script-converter.js](resources/raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/script-converter.js) | 网络请求 API、持久化存储、动态执行、编码字符串、压缩代码 | Script-Hub |
| [DubbingShow_remove_ads.js](resources/kelee.one/Resource/JavaScript/DubbingShow/DubbingShow_remove_ads.js) | 基础静态扫描 | 配音秀去广告 |
| [mobileClouds_remove_ads.js](resources/kelee.one/Resource/JavaScript/mobileClouds/mobileClouds_remove_ads.js) | 基础静态扫描 | 中国移动云盘去广告 |
| [AutoHome_remove_ads.js](resources/kelee.one/Resource/JavaScript/AutoHome/AutoHome_remove_ads.js) | 基础静态扫描 | 汽车之家去广告 |
| [PuPuMall_remove_ads.js](resources/kelee.one/Resource/JavaScript/PuPuMall/PuPuMall_remove_ads.js) | 基础静态扫描 | 朴朴超市去广告 |
| [tab_Bilibili_remove_ads.jq](resources/kelee.one/Resource/JQLang/Bilibili/tab_Bilibili_remove_ads.jq) | 基础静态扫描 | 哔哩哔哩去广告 |
| [mine_Bilibili_remove_ads.jq](resources/kelee.one/Resource/JQLang/Bilibili/mine_Bilibili_remove_ads.jq) | 基础静态扫描 | 哔哩哔哩去广告 |
| [Bilibili_proto_request_kokoryh.js](resources/kelee.one/Resource/JavaScript/Bilibili/Bilibili_proto_request_kokoryh.js) | 网络请求 API、持久化存储、压缩代码 | 哔哩哔哩去广告 |
| [Bilibili_proto_response_kokoryh.js](resources/kelee.one/Resource/JavaScript/Bilibili/Bilibili_proto_response_kokoryh.js) | 网络请求 API、持久化存储、压缩代码 | 哔哩哔哩去广告 |
| [Bilibili_json_kokoryh.js](resources/kelee.one/Resource/JavaScript/Bilibili/Bilibili_json_kokoryh.js) | 网络请求 API、持久化存储、压缩代码 | 哔哩哔哩去广告 |
| [FollowRSS_checkin.js](resources/kelee.one/Resource/JavaScript/FollowRSS/FollowRSS_checkin.js) | 网络请求 API、持久化存储、压缩代码 | Follow每日签到 |
| [iMaiCai_remove_ads.js](resources/kelee.one/Resource/JavaScript/iMaiCai/iMaiCai_remove_ads.js) | 基础静态扫描 | 小象超市去广告 |
| [Spotify_response.js](resources/kelee.one/Resource/JavaScript/Spotify/Spotify_response.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | Spotify歌词增强 |
| [Spotify_request.js](resources/kelee.one/Resource/JavaScript/Spotify/Spotify_request.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | Spotify歌词增强 |
| [Translate_response.js](resources/kelee.one/Resource/JavaScript/Spotify/Translate_response.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | Spotify歌词增强 |
| [External_Lyrics_response.js](resources/kelee.one/Resource/JavaScript/Spotify/External_Lyrics_response.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | Spotify歌词增强 |
| [NeteaseNews_remove_ads.js](resources/kelee.one/Resource/JavaScript/NeteaseNews/NeteaseNews_remove_ads.js) | 基础静态扫描 | 网易新闻去广告 |
| [MKZ_remove_ads.js](resources/kelee.one/Resource/JavaScript/MKZ/MKZ_remove_ads.js) | 基础静态扫描 | 漫客栈去广告 |
| [core_initialize.js](resources/kelee.one/Resource/JavaScript/iWallBiZhi/core_initialize.js) | 编码字符串、压缩代码 | 最美壁纸去广告 |
| [landing_initialize.js](resources/kelee.one/Resource/JavaScript/iWallBiZhi/landing_initialize.js) | 编码字符串、压缩代码 | 最美壁纸去广告 |
| [landing.js](resources/kelee.one/Resource/JavaScript/iWallBiZhi/landing.js) | 编码字符串、压缩代码 | 最美壁纸去广告 |
| [Uki_remove_ads.js](resources/kelee.one/Resource/JavaScript/Uki/Uki_remove_ads.js) | 基础静态扫描 | Uki去广告 |
| [common_tab.js](resources/kelee.one/Resource/JavaScript/Bixin/common_tab.js) | 编码字符串、压缩代码 | 比心去广告 |
| [my_page.js](resources/kelee.one/Resource/JavaScript/Bixin/my_page.js) | 编码字符串、压缩代码 | 比心去广告 |
| [NeteaseCloudMusic_remove_ads.js](resources/kelee.one/Resource/JavaScript/NeteaseCloudMusic/NeteaseCloudMusic_remove_ads.js) | 编码字符串、压缩代码 | 网易云音乐去广告 |
| [Weibo_remove_ads.js](resources/kelee.one/Resource/JavaScript/Weibo/Weibo_remove_ads.js) | 基础静态扫描 | 微博去广告 |
| [AppStoreAPI.js](resources/kelee.one/Resource/JavaScript/IPATool/AppStoreAPI.js) | 网络请求 API | IPA工具箱助手 |
| [Installer.js](resources/kelee.one/Resource/JavaScript/IPATool/Installer.js) | 基础静态扫描 | IPA工具箱助手 |
| [tieba-proto.js](resources/kelee.one/Resource/JavaScript/Tieba/tieba-proto.js) | 编码字符串、压缩代码 | 百度贴吧去广告 |
| [MeituMYXJ_remove_ads.js](resources/kelee.one/Resource/JavaScript/MeituMYXJ/MeituMYXJ_remove_ads.js) | 基础静态扫描 | 美颜相机去广告 |
| [Taobao_remove_ads.js](resources/kelee.one/Resource/JavaScript/Taobao/Taobao_remove_ads.js) | 基础静态扫描 | 淘宝去广告 |
| [TV_Assistant_remove_ads.js](resources/kelee.one/Resource/JavaScript/TV_Assistant/TV_Assistant_remove_ads.js) | 基础静态扫描 | 乐播投屏去广告 |
| [PinDuoDuo_remove_ads.js](resources/kelee.one/Resource/JavaScript/PinDuoDuo/PinDuoDuo_remove_ads.js) | 基础静态扫描 | 拼多多去广告 |
| [KuaiKanComic_remove_ads.js](resources/kelee.one/Resource/JavaScript/KuaiKanComic/KuaiKanComic_remove_ads.js) | 基础静态扫描 | 快看漫画去广告 |
| [NodeLinkCheck.js](resources/kelee.one/Resource/JavaScript/NodeLinkCheck/NodeLinkCheck.js) | 网络请求 API、持久化存储、压缩代码 | 代理链路检测 |
| [RiskBird_remove_ads.js](resources/kelee.one/Resource/JavaScript/RiskBird/RiskBird_remove_ads.js) | 基础静态扫描 | 风鸟去广告 |
| [AliYunDrive_remove_ads.js](resources/kelee.one/Resource/JavaScript/AliYunDrive/AliYunDrive_remove_ads.js) | 基础静态扫描 | 阿里云盘去广告 |
| [chavy.boxjs.js](resources/raw.githubusercontent.com/chavyleung/scripts/master/box/chavy.boxjs.js) | 网络请求 API、持久化存储、动态执行、压缩代码 | BoxJs |
| [YouTube_Subtitles_request.js](resources/kelee.one/Resource/JavaScript/YouTube/YouTube_Subtitles_Translate/YouTube_Subtitles_request.js) | 持久化存储、压缩代码 | YouTube双语翻译 |
| [YouTube_Subtitles_response.js](resources/kelee.one/Resource/JavaScript/YouTube/YouTube_Subtitles_Translate/YouTube_Subtitles_response.js) | 持久化存储、压缩代码 | YouTube双语翻译 |
| [YouTube_Composite_Subtitles_response.js](resources/kelee.one/Resource/JavaScript/YouTube/YouTube_Subtitles_Translate/YouTube_Composite_Subtitles_response.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | YouTube双语翻译 |
| [YouTube_Subtitles_Translate_response.js](resources/kelee.one/Resource/JavaScript/YouTube/YouTube_Subtitles_Translate/YouTube_Subtitles_Translate_response.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | YouTube双语翻译 |
| [ColorfulClouds_remove_ads.js](resources/kelee.one/Resource/JavaScript/ColorfulClouds/ColorfulClouds_remove_ads.js) | 基础静态扫描 | 彩云天气去广告 |
| [FlyerTea_remove_ads.js](resources/kelee.one/Resource/JavaScript/FlyerTea/FlyerTea_remove_ads.js) | 基础静态扫描 | 飞客去广告 |
| [MaiMai_remove_ads.js](resources/kelee.one/Resource/JavaScript/MaiMai/MaiMai_remove_ads.js) | 基础静态扫描 | 脉脉去广告 |
| [Chelaile_remove_ads.js](resources/kelee.one/Resource/JavaScript/Chelaile/Chelaile_remove_ads.js) | 基础静态扫描 | 车来了去广告 |
| [NetworkEntryAndExitQueries.js](resources/kelee.one/Resource/JavaScript/Node_detection_tool/NetworkEntryAndExitQueries.js) | 网络请求 API、持久化存储、压缩代码 | 节点检测工具 |
| [LocationDetection.js](resources/kelee.one/Resource/JavaScript/Node_detection_tool/LocationDetection.js) | 网络请求 API、压缩代码 | 节点检测工具 |
| [NodeUnlockDetection.js](resources/kelee.one/Resource/JavaScript/Node_detection_tool/NodeUnlockDetection.js) | 网络请求 API、压缩代码 | 节点检测工具 |
| [1.1.1.1.panel.js](resources/raw.githubusercontent.com/VirgilClyne/Cloudflare/main/js/1.1.1.1.panel.js) | 网络请求 API、持久化存储、压缩代码 | WARP节点查询 |
| [NetEaseGodlike_remove_ads.js](resources/kelee.one/Resource/JavaScript/NetEaseGodlike/NetEaseGodlike_remove_ads.js) | 基础静态扫描 | 网易大神去广告 |
| [SodaMusic_remove_ads.js](resources/kelee.one/Resource/JavaScript/SodaMusic/SodaMusic_remove_ads.js) | 基础静态扫描 | 汽水音乐去广告 |
| [Umetrip_remove_ads.js](resources/kelee.one/Resource/JavaScript/Umetrip/Umetrip_remove_ads.js) | 基础静态扫描 | 航旅纵横去广告 |
| [MotorFans_remove_ads.js](resources/kelee.one/Resource/JavaScript/MotorFans/MotorFans_remove_ads.js) | 基础静态扫描 | 摩托范去广告 |
| [CaixinMedia_remove_ads.js](resources/kelee.one/Resource/JavaScript/CaixinMedia/CaixinMedia_remove_ads.js) | 基础静态扫描 | 财新去广告 |
| [Douyu_remove_ads.js](resources/kelee.one/Resource/JavaScript/Douyu/Douyu_remove_ads.js) | 基础静态扫描 | 斗鱼去广告 |
| [Reddit_remove_ads.jq](resources/kelee.one/Resource/JQLang/Reddit/Reddit_remove_ads.jq) | 基础静态扫描 | Reddit去广告 |
| [Spotify_remove_ads.js](resources/kelee.one/Resource/JavaScript/Spotify/Spotify_remove_ads.js) | 压缩代码 | Spotify去广告 |
| [JD_Price.js](resources/kelee.one/Resource/JavaScript/JD/JD_Price.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | 京东比价 |
| [JD_remove_ads.js](resources/kelee.one/Resource/JavaScript/JD/JD_remove_ads.js) | 基础静态扫描 | 京东去广告 |
| [HUPU_remove_ads.js](resources/kelee.one/Resource/JavaScript/HUPU/HUPU_remove_ads.js) | 基础静态扫描 | 虎扑去广告 |
| [BiliComic_remove_ads.js](resources/kelee.one/Resource/JavaScript/BiliComic/BiliComic_remove_ads.js) | 基础静态扫描 | 哔哩哔哩漫画去广告 |
| [base_init.js](resources/kelee.one/Resource/JavaScript/ShoujiDesk/base_init.js) | 编码字符串、压缩代码 | 口袋壁纸去广告 |
| [BabyTree_remove_ads.js](resources/kelee.one/Resource/JavaScript/BabyTree/BabyTree_remove_ads.js) | 基础静态扫描 | 宝宝树孕育去广告 |
| [Soul_remove_ads.js](resources/kelee.one/Resource/JavaScript/Soul/Soul_remove_ads.js) | 基础静态扫描 | Soul去广告 |
| [getAppConfig.js](resources/kelee.one/Resource/JavaScript/Weidian/getAppConfig.js) | 编码字符串、压缩代码 | 微店去广告 |
| [wallet.js](resources/kelee.one/Resource/JavaScript/Weidian/wallet.js) | 编码字符串、压缩代码 | 微店去广告 |
| [d6996fee95380affdf740ee44a85fbe9___UNI__EDB922E.zip](resources/kelee.one/Resource/Zip/DREAME/d6996fee95380affdf740ee44a85fbe9___UNI__EDB922E.zip) | ZIP 载荷 | DREAME去广告 |
| [replace-body.js](resources/raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js) | 基础静态扫描 | Script-Hub |
| [echo-response.js](resources/raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/echo-response.js) | 网络请求 API、持久化存储、压缩代码 | Script-Hub |
| [body-rewrite.js](resources/raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/body-rewrite.js) | 网络请求 API、持久化存储、压缩代码 | Script-Hub |
| [replace-header.js](resources/raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-header.js) | 网络请求 API、持久化存储、压缩代码 | Script-Hub |
| [boxjs.revert.usercfgs.sessions.js](resources/raw.githubusercontent.com/chavyleung/scripts/master/box/scripts/boxjs.revert.usercfgs.sessions.js) | 网络请求 API、持久化存储、压缩代码 | BoxJs |
| [boxjs.revert.usercfgs.js](resources/raw.githubusercontent.com/chavyleung/scripts/master/box/scripts/boxjs.revert.usercfgs.js) | 网络请求 API、持久化存储、压缩代码 | BoxJs |
| [boxjs.revert.boxjs.js](resources/raw.githubusercontent.com/chavyleung/scripts/master/box/scripts/boxjs.revert.boxjs.js) | 网络请求 API、持久化存储、压缩代码 | BoxJs |
| [box.switcher.js](resources/raw.githubusercontent.com/chavyleung/scripts/master/box/switcher/box.switcher.js) | 网络请求 API、持久化存储、压缩代码 | BoxJs |
| [boxjs.revert.caches.js](resources/raw.githubusercontent.com/chavyleung/scripts/master/box/scripts/boxjs.revert.caches.js) | 网络请求 API、持久化存储、压缩代码 | BoxJs |
| [boxjs.revert.usercfgs.favapps.js](resources/raw.githubusercontent.com/chavyleung/scripts/master/box/scripts/boxjs.revert.usercfgs.favapps.js) | 网络请求 API、持久化存储、压缩代码 | BoxJs |
| [boxjs.revert.baks.js](resources/raw.githubusercontent.com/chavyleung/scripts/master/box/scripts/boxjs.revert.baks.js) | 网络请求 API、持久化存储、压缩代码 | BoxJs |
| [commit.js](resources/raw.githubusercontent.com/dompling/Script/master/gist/commit.js) | 网络请求 API、持久化存储、压缩代码 | BoxJs |
| [restore.js](resources/raw.githubusercontent.com/dompling/Script/master/gist/restore.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | BoxJs |
| [backup.js](resources/raw.githubusercontent.com/dompling/Script/master/gist/backup.js) | 网络请求 API、持久化存储、编码字符串、压缩代码 | BoxJs |
| [SimpleExpressBeta.js](resources/raw.githubusercontent.com/xiaobailian67/Surge/refs/heads/main/SimpleExpressBeta.js) | 基础静态扫描 | IPA工具箱助手 |
| [utils.js](resources/raw.githubusercontent.com/xiaobailian67/Surge/refs/heads/main/utils.js) | 网络请求 API、持久化存储 | IPA工具箱助手 |
| [plist-complete.js](resources/raw.githubusercontent.com/xiaobailian67/Surge/refs/heads/main/plist-complete.js) | 编码字符串 | IPA工具箱助手 |
| [9410-b8806e870a26db7d.js](resources/kelee.one/Resource/JavaScript/PinDuoDuo/9410-b8806e870a26db7d.js) | 基础静态扫描 | 拼多多去广告 |
