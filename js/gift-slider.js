jQuery(document).ready(function(){
 function htmSlider(){
  /* Зададим следующие параметры */
  /* обертка слайдера */
  var slideWrap = jQuery('.personal-gift__wrap');
  /* кнопки вперед/назад и старт/пауза */
  var nextLink = jQuery('.personal-gift__nav--next');
  var prevLink = jQuery('.personal-gift__nav--prev');
  
  /* Проверка на анимацию */
  var is_animate = false;
  /* ширина слайда с отступами */
  var slideWidth = jQuery('.personal-gift__item').outerWidth();
  /* смещение слайдера */
  var scrollSlider = slideWrap.position().left - slideWidth;
		
  /* Клик по ссылке на следующий слайд */
  nextLink.click(function(){
   if(!slideWrap.is(':animated')) {
    slideWrap.animate({left: scrollSlider}, 500, function(){
     slideWrap
      .find('.personal-gift__item:first')
      .appendTo(slideWrap)
      .parent()
      .css({'left': 0});
    });
   }
  });

  /* Клик по ссылке на предыдующий слайд */
  prevLink.click(function(){
   if(!slideWrap.is(':animated')) {
    slideWrap
     .css({'left': scrollSlider})
     .find('.personal-gift__item:last')
     .prependTo(slideWrap)
     .parent()
     .animate({left: 0}, 500);
   }
  });
 }
   
  /* иницилизируем функцию слайдера */
 htmSlider();
});

/*функция открытия попапа подтверждения*/
"use strict";

(function() {

  var itemGift = document.querySelectorAll(".personal-gift__item");
  var confirmPopup = document.querySelector(".personal-gift__confirm");
  var confirmPopupClose = confirmPopup.querySelector(".personal-gift__confirm-link");
  var itemGiftActive= [];
  
  for (var i = 0; i < itemGift.length; i++) {
    if (!itemGift[i].classList.contains("personal-gift__item--inactive")) {
      var activeLength = itemGiftActive.push(itemGift[i]);
    } else {
      var linkInactive = itemGift[i].querySelector(".personal-gift__button");
      linkInactive.onclick= function() {
        return false
      }
    }
  }
  
  for (var i = 0; i < activeLength; i++) {
    var linkActive = itemGiftActive[i].querySelector(".personal-gift__button");
    linkActive.addEventListener("click", function(event){
      event.preventDefault();
      confirmPopup.style.display = "block";
    })
  }
  
  confirmPopupClose.addEventListener("click", function(){
    confirmPopup.style.display = "none";
  });
  
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (!(confirmPopup.style.display == "none")) {
		confirmPopup.style.display = "none";
      }
    }
  });
  
})();