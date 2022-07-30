addEventListener("dblclick", function () {
  if (!!document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    const el = document.documentElement
    const rfs = el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen;
    rfs.call(el);
  }
});

addEventListener("keypress", function () {
  const container = document.querySelector('.container');
  const backgroundColor = getComputedStyle(container)['background-color'];
  const isBlack = backgroundColor === 'rgb(0, 0, 0)'
  container.style.setProperty('background-color', isBlack ? 'var(--white)' : 'var(--black)')
});