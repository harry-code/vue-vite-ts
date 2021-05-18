// Rem flexible
const setRem = () => {
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  let htmlDom = document.getElementsByTagName('html')[0];
  //设置根元素字体大小, 按照1920屏幕宽进行换算，rem*100 = px
  htmlDom.style.fontSize = htmlWidth / 19.2 + 'px';
};
// init
setRem();
// when change clientWidth Rem
window.onresize = function () {
  setRem();
};
