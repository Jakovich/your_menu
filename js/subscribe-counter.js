"use strict";
(function() {
  var subscribeFormQuantity = document.querySelectorAll(".subscribe-variant__input");
  var PRICE = 700;
  var form = document.querySelector(".subscribe__form");
  var total = document.querySelector(".total-form-sum");
  var totalSum = 0;
  
  /*установка изначальный значений*/
   var initiValue = function(elem) {
    var initSubscribeQuantity = form[elem];
     var initsubscribeValue = parseInt(initSubscribeQuantity.value, 10);
     var totalSum =  initsubscribeValue * PRICE;
     var classDiv = "input[name=" + elem +"]";
     var container = form.querySelector(classDiv).parentNode.parentNode;
     var initpriceSpan = container.querySelector(".total-sum");
     var inittotalSum = initsubscribeValue * PRICE;
     initpriceSpan.innerHTML = inittotalSum;
   };
  
  initiValue("subscribe-3dinner");
  initiValue("subscribe-5dinner");
  initiValue("subscribe-5smoothies");
  initiValue("subscribe-5sandwich");

  
   
    /*реагирование на изменения*/
  var dinamicValue = function() {
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
  };
  dinamicValue();
  
     /*поворачивание элементов*/
  
  var rotateFunctionFront = function() {
    var buttonsSelectFront = document.querySelectorAll(".subscribe-variant__price__button");
    for (var i = 0; i < buttonsSelectFront.length; i++) {
      buttonsSelectFront[i].onclick = function(event) {
        event.preventDefault();
        var currentContainer = this.parentNode.parentNode.parentNode.parentNode.parentNode;
        
        var currentSum = currentContainer.querySelector(".total-sum");
        var currentValue = parseInt(currentSum.innerHTML, 10);
        var currentFront = currentContainer.querySelector(".subscribe-variant");

        if (!currentContainer.classList.contains("subscribe-variant__container--active")) {
          currentContainer.classList.add("subscribe-variant__container--active");
        }
       
        if (currentFront.classList.contains("subscribe-variant--check")) {
          totalSum = totalSum  - currentValue;
          total.innerHTML = totalSum + "р";
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
        var currentSum = currentContainer.querySelector(".total-sum");
        var currentValue = parseInt(currentSum.innerHTML, 10);

        if (currentContainer.classList.contains("subscribe-variant__container--active")) {
          currentContainer.classList.remove("subscribe-variant__container--active");
        }
        
        if (this.classList.contains("subscribe-variant__btn--yes")) {
          if (!currentVariant.classList.contains("subscribe-variant--check")) {
            currentVariant.classList.add("subscribe-variant--check");
            
          } 
          totalSum = totalSum  + currentValue;
            total.innerHTML = totalSum + "р";
          
         } else {
           
          currentVariant.classList.remove("subscribe-variant--check");
          
         }
      }
    }
  };
  
  rotateFunctionFront();
  rotateFunctionBack();
  
  /*установка изначальной итоговой суммы*/
  var setInitialTotal = function () {
    var checkedVariant = document.querySelectorAll(".subscribe-variant--check");
    
    for (var i = 0; i < checkedVariant.length; i++) {
      var container = checkedVariant[i].parentNode.parentNode;
      var currentSum = container.querySelector(".total-sum");
      var currentValue = parseInt(currentSum.innerHTML, 10);
      totalSum = totalSum  + currentValue;
    }
    total.innerHTML = totalSum + "р";
    return totalSum;
  };
  
  setInitialTotal();
})();