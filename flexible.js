(function(win, lib) {
  const doc = win.document;
  const docEl = doc.documentElement;
  let metaEl = doc.querySelector('meta[name="viewport"]');
  let dpr = 0;
  let scale = 0;
  let tid;
  const flexible = lib.flexible || (lib.flexible = {});
  
  
  if (metaEl) {
    let match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
    if (match) {
      scale = parseFloat(match[1]);
      dpr = parseInt(1 / scale);
    }
  }
  
  if (!dpr && !scale) {
    let isAndroid = win.navigator.appVersion.match(/android/gi);
    let isIPhone = win.navigator.appVersion.match(/iphone/gi);
    const devicePixelRatio = win.devicePixelRatio;
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
    scale = 1 / dpr;
  }
  
  docEl.setAttribute('data-dpr', dpr);
  
  if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl);
    } else {
      const wrap = doc.createElement('div');
      wrap.appendChild(metaEl);
      doc.write(wrap.innerHTML);
    }
  }
  
  // 设置基准值
  const baseSize = 100; // 750设计稿基准值 (750px/10)
  const desktopBreakpoint = 751; // 桌面端断点
  const maxWidth = 1920; // 最大宽度限制

  // 核心函数：刷新REM值
  function refreshRem() {
    let width = docEl.getBoundingClientRect().width;
    let resRem;
    // 桌面端处理
    if (width > 1920) {
      resRem = (1 * baseSize).toFixed(2) + 'px'
      docEl.style.fontSize = resRem
      docEl.classList.add('desktop-mode');
      docEl.classList.remove('mobile-mode');
    } else if (width >= desktopBreakpoint * dpr) {
      // 桌面端 - 使用固定px单位
      resRem = ((width / 1920) * baseSize).toFixed(2) + 'px'
      docEl.style.fontSize = resRem
      docEl.classList.add('desktop-mode');
      docEl.classList.remove('mobile-mode');
      
      // 限制最大宽度
      if (width > maxWidth) { width = maxWidth}
    }
    else {
      // 移动端处理
      docEl.classList.add('mobile-mode');
      docEl.classList.remove('desktop-mode');
      // 移动端 - 使用REM单位
      if (width / dpr > 540) { width = 540 * dpr }
      resRem = ((width / 750) * baseSize).toFixed(2);
      docEl.style.fontSize = resRem
    }
    
    flexible.rem = win.rem = resRem;
  }

  refreshRem();
  
  // 事件监听
  win.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);

  win.addEventListener('load', refreshRem, false);
  
  win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);
  
  // 初始化
  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = 12 * dpr + 'px';
  } else {
    doc.addEventListener('DOMContentLoaded', function(e) {
      doc.body.style.fontSize = 12 * dpr + 'px';
    }, false);
  }
    
  flexible.dpr = win.dpr = dpr;
  flexible.refreshRem = refreshRem;
  flexible.rem2px = function(d) {
    var val = parseFloat(d) * this.rem;
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px';
    }
    return val;
  }
  flexible.px2rem = function(d) {
    var val = parseFloat(d) / this.rem;
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem';
    }
    return val;
  }
})(window, window['lib'] || (window['lib'] = {}));