"use strict";
(function() {
  var subscribeForm =  document.querySelectorAll(".subscribe-variant__form");
  var subscribeFormQuantity = document.querySelectorAll("input[name=subscribe-quantity]");
   var PRICE = 700;
  /*установка изначальный значений*/
  for (var i = 0; i < subscribeForm.length; i++) {
    var initSubscribeQuantity = subscribeForm[i]["subscribe-quantity"];
    var initsubscribeValue = parseInt(initSubscribeQuantity.value, 10);
    var initpriceSpan = subscribeForm[i].querySelector(".total-sum");
    var inittotalSum = initsubscribeValue * PRICE;
    initpriceSpan.innerHTML = inittotalSum;
  }
  /*реагирование на изменения*/
  for (var i = 0; i < subscribeFormQuantity.length; i++) {
    subscribeFormQuantity[i].onclick = function() {
      var subscribeFormValue = parseInt(this.value, 10); 
      var parentDiv = this.parentNode;
      var parentForm = parentDiv.parentNode;
      var priceSpan = parentForm.querySelector(".total-sum");
      var totalSum = subscribeFormValue * PRICE;
      priceSpan.innerHTML = totalSum;
    };
  }
  
   /*поворачивание элементов*/
  
  
  
  var rotateFunctionFront = function() {
    var buttonsSelectFront = document.querySelectorAll(".subscribe-variant__price__button");
    for (var i = 0; i < buttonsSelectFront.length; i++) {
      buttonsSelectFront[i].onclick = function(event) {
        event.preventDefault();
        var currentContainer = this.parentNode.parentNode.parentNode.parentNode.parentNode;

        if (!currentContainer.classList.contains("subscribe-variant__container--active")) {
          currentContainer.classList.add("subscribe-variant__container--active");
        }
      }
    }
  };
  
  var rotateFunctionBack = function() {
    var buttonSelectBack = document.querySelectorAll(".subscribe-variant__btn");
    for (var i = 0; i < buttonSelectBack.length; i++) {
      buttonSelectBack[i].onclick = function(event) {
        event.preventDefault();
        var currentContainer = this.parentNode.parentNode.parentNode.parentNode.parentNode;
        
        var currentVariant = currentContainer.querySelector(".subscribe-variant__front .subscribe-variant");

        if (currentContainer.classList.contains("subscribe-variant__container--active")) {
          currentContainer.classList.remove("subscribe-variant__container--active");
        }
        
        if (this.classList.contains("subscribe-variant__btn--yes")) {
          if (!currentVariant.classList.contains("subscribe-variant--check")) {
            currentVariant.classList.add("subscribe-variant--check");
          }
         } else {
            currentVariant.classList.remove("subscribe-variant--check");
         }
      }
    }
  };
  rotateFunctionFront();
  rotateFunctionBack();
  
})();