(function(){
  
  function imgResize() {
    var menuImg = document.querySelectorAll('.menu-dishes img');
    for (var i=0; i < menuImg.length; i++) {
      if (menuImg[i].width > menuImg[i].height) {
        menuImg[i].style.height = 100 + '%';
        menuImg[i].style.width = 'auto';
      } else {
        menuImg[i].style.height = 'auto';
        menuImg[i].style.width = 100 + '%';
      }
    }
  }

window.onload = function() {
  imgResize();
}  
})();
