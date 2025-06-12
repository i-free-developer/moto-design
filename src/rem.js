(function initRem() {
  
  const baseSize = 100; // 基准值 (1rem = 100px)
  const designWidth = 750; // 设计稿宽度
  
  function setRem() {
    let windowWidth = document.documentElement.clientWidth;
    if (windowWidth <= 750) {
      const scale = windowWidth / designWidth;
      document.documentElement.style.fontSize = baseSize * scale + 'px';
    } else {
      document.documentElement.style.fontSize = '16px';
    }
    console.log('setRem', baseSize, windowWidth, designWidth)
  }
  
  setRem();
  window.addEventListener('load', () => { requestAnimationFrame(setRem) })
  window.addEventListener('resize', () => { requestAnimationFrame(setRem) })

})()