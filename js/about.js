'use strict';

(function() {
  
  var popupLink = document.querySelector('.about__btn');
  var popupCv = document.querySelector('.about-popup');
  var popupClose = popupCv.querySelector('.about-popup__close');
  
  popupLink.addEventListener('click', function(event){
    event.preventDefault();
    if (!(popupCv.style.display === 'block')) {
      popupCv.style.display = 'block'
    }
  })
  
  popupClose.addEventListener('click', function(){  
    if (popupCv.style.display === 'block') {
      popupCv.style.display = 'none'
    }
  })
  
  
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popupCv.style.display === "block") {
		  popupCv.style.display = "none";
      }
    }
  });
    
})();

//функция показа пути загруженного файла
$(document).ready( function() {
    $(".about-popup__file-upload input[type=file]").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#filename").val(filename);
    });
});