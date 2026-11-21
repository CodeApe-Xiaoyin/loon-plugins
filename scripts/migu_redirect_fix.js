/**
 * 移动咪咕直播 302 地址修复
 *
 * 将调度接口返回的坏 IP:6060 Location 改为咪咕 CDN 主机，保留完整路径和鉴权查询参数。
 * 验证过的播放链路：M3U8 HTTP 200，首个 TS 分片 HTTP 200。
 */
(function () {
  const headers = $response.headers || {};
  let locationKey = null;
  for (const key of Object.keys(headers)) {
    if (key.toLowerCase() === "location") {
      locationKey = key;
      break;
    }
  }

  if (!locationKey || typeof headers[locationKey] !== "string") {
    $done({});
    return;
  }

  const rewritten = headers[locationKey].replace(
    /^http:\/\/111\.63\.118\.100:6060(?=\/)/i,
    "http://cache.ott.fifalive.itv.cmvideo.cn"
  );

  if (rewritten === headers[locationKey]) {
    $done({});
    return;
  }

  headers[locationKey] = rewritten;
  $done({ headers });
})();
