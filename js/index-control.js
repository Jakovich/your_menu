"use strict";
(function() {
  var menuWeekLink = document.querySelector(".service-nav__menu-week");
  var menuWeekLinkScroll = document.querySelector(".service-nav__menu-week--scroll");
  
  var menuWeekPopup = document.querySelector(".popup-dinner__menu");
  var menuPopup = document.querySelector(".popup-menu");
  
 
  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 250) {
      menuPopup.style.top = "0";
    } else {
      menuPopup.style.top = "-105px";
     
    }
  }
  
  
 /*раздел table*/
  
  var tableLinks = document.querySelectorAll(".index-table__item");
  
  var tableText = document.querySelectorAll(".index-table__content");
  
  var clearActive = function() {
    for (var i = 0; i < tableLinks.length; i++) {
      tableLinks[i].classList.remove("index-table__item--active");
    }
  };
  
  var clearContent = function() {
    for (var i = 0; i < tableText.length; i++) {
      tableText[i].style.display = "none";
    }
  };
  
  for (var i = 0; i < tableLinks.length; i++) {
    tableLinks[i].addEventListener("click", function() {
      clearActive();
      
      if (!this.classList.contains("index-table__item--active")) {
       this.classList.add("index-table__item--active");
      }
      var atr = this.getAttribute("data-name");
      for (var i = 0; i < tableText.length; i++) {
        if (tableText[i].getAttribute("data-name") == atr) {
          clearContent();
          tableText[i].style.display = "block";
        }
      }
    });
  }
  
  //анимация
  
  var opacityElem1 = new TimelineMax();
    opacityElem1
    
      .from(".index-reasons__title", 1, {opacity: 0})
      .from(".index-reasons__item--time", 1, {opacity: 0}, '=0.4')
      .from(".index-reasons__item--money", 1, {opacity: 0}, '=0.4')
      .from(".index-reasons__item--capabil", 1, {opacity: 0}, '=0.4')
      .from(".index-reasons__item--health", 1, {opacity: 0}, '=0.4')
      
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: ".index-reasons",
    reverse: false
  })
  .setTween(opacityElem1) // trigger a TweenMax.to tween
  /*.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)*/
  .addTo(controller);
  
  
  var opacityElem2 = new TimelineMax();
    opacityElem2
    
      .from(".index-explic__title", 1, {opacity: 0})
      .from(".index-explic__item--dish", 1, {opacity: 0}, '=0.4')
      .from(".index-explic__item--tel", 1, {opacity: 0}, '=0.4')
      .from(".index-explic__item--basket", 1, {opacity: 0}, '=0.4')
      .from(".index-explic__item--delivery", 1, {opacity: 0}, '=0.4')
      .from(".index-explic__item--pleasure", 1, {opacity: 0}, '=0.4')
    
    
  var scene2 = new ScrollMagic.Scene({
    triggerElement: ".index-explic",
    reverse: false
  })
  .setTween(opacityElem2) // trigger a TweenMax.to tween
  /*.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)*/
  .addTo(controller);
  
  var opacityElem3 = new TimelineMax();
    opacityElem3
    
      .from(".index-table__link-text", 1, {opacity: 0})
      .from(".index-table__link-arrow", 1, {opacity: 0}, '=0.4')
      .from(".index-table__link-box", 1, {opacity: 0}, '=0.4')
    
  var scene3 = new ScrollMagic.Scene({
    triggerElement: ".index-table__link",
    reverse: false
  })
  .setTween(opacityElem3) // trigger a TweenMax.to tween
  /*.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)*/
  .addTo(controller);
      
    

  
})();