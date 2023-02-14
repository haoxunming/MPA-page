interface Window {
  rem: number
}

(function (win:Window) {
  let h: number
  const docEl = document.documentElement
  function setUnitA () {
    const w = docEl.getBoundingClientRect().width
    let r = 20
    if (w === 412) {
      r = (412 / 360) * 20
    }
    win.rem = w / r
    docEl.style.fontSize = win.rem + 'px'
  }
  win.addEventListener('resize', function () {
    clearTimeout(h)
    h = setTimeout(setUnitA, 300)
  }, false)
  win.addEventListener('pageshow', function (e:PageTransitionEvent) {
    if (e.persisted) {
      clearTimeout(h)
      h = setTimeout(setUnitA, 300)
    }
  }, false)

  setUnitA()
})(window)
