window.addEventListener('load', function() {
  const loader = document.getElementById('loader-wrapper');
  
  // 等待 CSS 動畫流程播放完畢（約 2.5 秒）後平滑揭幕
  setTimeout(() => {
    loader.classList.add('fade-out');
  }, 2500);
});