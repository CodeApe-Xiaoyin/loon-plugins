/**
 * 直播吧广告配置改写 · 合并版 v0.2.0
 * 作者：落痕
 * 贡献：禁用开屏、首页等广告位配置及开屏、插屏备选开关。
 * Loon http-response，需开启 requires_body。
 * 依据 2026-11-09 HAR 中的 advert_list / advert_config 结构编写。
 */
(function () {
  try {
    const config = JSON.parse($response.body);
    if (!config || !Array.isArray(config.advert_list)) {
      return $done({});
    }

    for (const slot of config.advert_list) {
      if (slot && typeof slot === "object" && !Array.isArray(slot)) {
        slot.enable = false;
      }
    }

    const advertConfig = config.advert_config;
    if (advertConfig && typeof advertConfig === "object") {
      if (Object.prototype.hasOwnProperty.call(advertConfig, "splash_bk")) {
        advertConfig.splash_bk = "disable";
      }
      if (Object.prototype.hasOwnProperty.call(advertConfig, "inter_bk")) {
        advertConfig.inter_bk = "disable";
      }
    }

    return $done({ body: JSON.stringify(config) });
  } catch (_) {
    console.log("[直播吧去广告] 广告配置处理失败，沿用原响应。");
    return $done({});
  }
})();
