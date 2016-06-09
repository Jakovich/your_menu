'use strict';
(function() {
  var imgItem = document.querySelectorAll('.menu-dish__img');

  function imgMoveHoriz() {
    for (var i = 0; i < imgItem.length; i++) {
      var currentWidth = imgItem[i].width;
      if (currentWidth > 250) {
        var offset = (currentWidth - 250);
        imgItem[i].style.left = -offset/2 + 'px';
      }
    }
  }
  
  
  window.onload = function(){
    imgMoveHoriz();
  }
  
  
  
})();
