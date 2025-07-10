function getDpr() {
  const metaEl = document.querySelector('meta[name="viewport"]');
  let dpr = 0;
  let scale = 0;
  
  if (metaEl) {
    let match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
    if (match) {
      scale = parseFloat(match[1]);
      dpr = parseInt(1 / scale);
    }
  }
  
  if (!dpr && !scale) {
    let isAndroid = window.navigator.appVersion.match(/android/gi);
    let isIPhone = window.navigator.appVersion.match(/iphone/gi);
    const devicePixelRatio = window.devicePixelRatio;
    if (isIPhone) {
      if (devicePixelRatio >= 3) {
        dpr = 3;
      } else if (devicePixelRatio >= 2) {
        dpr = 2;
      } else {
        dpr = 1;
      }
    } else {
      dpr = 1;
    }
  }
  return dpr
}

function refreshRem() {
  const dpr = getDpr()
  let width = document.documentElement.getBoundingClientRect().width;
  // 设置基准值
  const baseSize = 100; // 750设计稿基准值 (750px/10)
  const desktopBreakpoint = 751; // 桌面端断点
  const maxWidth = 1920; // 最大宽度限制
  const bigScreenFixedRatio = 0.9
  // 核心函数：刷新REM值
  let resRem;
  // 桌面端处理
  if (width > 1920) {
    resRem = (1 * baseSize).toFixed(2) * bigScreenFixedRatio + 'px'
    document.documentElement.style.fontSize = resRem
  } else if (width >= desktopBreakpoint * dpr) {
    // 桌面端 - 使用固定px单位
    resRem = ((width / 1920) * baseSize).toFixed(2) * bigScreenFixedRatio + 'px'
    document.documentElement.style.fontSize = resRem
    // 限制最大宽度
    if (width > maxWidth) { width = maxWidth}
  }
  else {
    // 移动端处理
    // 移动端 - 使用REM单位
    if (width / dpr > 540) { width = 540 * dpr }
    resRem = ((width / 750) * baseSize).toFixed(2);
    document.documentElement.style.fontSize = resRem
  }    
}

// 事件监听
let tid;
window.addEventListener('load', refreshRem, false);

window.addEventListener('resize', function() {
  clearTimeout(tid);
  tid = setTimeout(refreshRem, 300);
}, false);

window.addEventListener('pageshow', function(e) {
  if (e.persisted) {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 100);
  }
}, false);