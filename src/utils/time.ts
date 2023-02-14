const Time = (time: any) => {
  //获取当前时间  
  const now = new Date().getTime();
  //时间差  
  const leftTime = time - now;
  //定义变量 d,h,m,s保存倒计时的时间  
  let d, h, m, s;
  if (leftTime >= 0) {
    d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
    h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
    m = Math.floor(leftTime / 1000 / 60 % 60);
    s = Math.floor(leftTime / 1000 % 60);
  }
  //将0-9的数字前面加上0，例1变为01
  d = checkTime(d);
  h = Number(checkTime(h));
  m = checkTime(m);
  s = checkTime(s);
  function checkTime(i: any) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  if (s === 'undefined') {
    return
  }
  const result = (Number(d*24 + h) === 0 ? '00' : Number(d*24 + h)) + 'H ' + m + 'M ' + s + 'S'

  return result
}

export {
  Time
}