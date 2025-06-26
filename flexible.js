(function(win, lib) {
  var doc = win.document;
  var docEl = doc.documentElement;
  var metaEl = doc.querySelector('meta[name="viewport"]');
  var dpr = 0;
  var scale = 0;
  var tid;
  var flexible = lib.flexible || (lib.flexible = {});
  
  // 设置基准值
  var baseSize = 100; // 750设计稿基准值 (750px/10)
  var desktopBreakpoint = 751; // 桌面端断点
  var maxWidth = 1920; // 最大宽度限制
  
  if (metaEl) {
    var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
    if (match) {
      scale = parseFloat(match[1]);
      dpr = parseInt(1 / scale);
    }
  }
  
  if (!dpr && !scale) {
    var isAndroid = win.navigator.appVersion.match(/android/gi);
    var isIPhone = win.navigator.appVersion.match(/iphone/gi);
    var devicePixelRatio = win.devicePixelRatio;
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
      var wrap = doc.createElement('div');
      wrap.appendChild(metaEl);
      doc.write(wrap.innerHTML);
    }
  }
  
  // 核心函数：刷新REM值
  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    
    // 桌面端处理
    if (width >= desktopBreakpoint * dpr) {
      // 桌面端 - 使用固定px单位
      docEl.style.fontSize = '16px';
      docEl.classList.add('desktop-mode');
      docEl.classList.remove('mobile-mode');
      
      // 限制最大宽度
      if (width > maxWidth) {
        width = maxWidth;
      }
    } 
    // 移动端处理
    else {
      docEl.classList.add('mobile-mode');
      docEl.classList.remove('desktop-mode');
      
      // 移动端 - 使用REM单位
      if (width / dpr > 540) {
        width = 540 * dpr;
      }
      var rem = width / 10;
      docEl.style.fontSize = rem + 'px';
    }
    
    flexible.rem = win.rem = rem;
  }
  
  // 事件监听
  win.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  
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
  
  refreshRem();
  
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