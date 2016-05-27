"use strict";
(function(){ 
  
//изменение стоимости заказа в завивсимости от кол-ва порций
  
  var subscribeFormQuantity = document.querySelectorAll(".subscribe-variant__input");
  var PRICE = 700;
  var form = document.querySelector(".menu-intro__form");
  var initSubscribeQuantity = form["subscribe-quantity"];
  var totalSumContainer = document.querySelector(".total-sum");
  var totalSumSaleContainer = document.querySelector(".total-sum-sale");
  
  
  //установка изначальныx значений
   var valueCreat = function(elem) {
     var subscribeValue = parseInt(elem.value, 10);
     var totalSum = subscribeValue * PRICE;
     var totalSumSale = Math.floor(totalSum * 0.9);
     totalSumContainer.innerHTML = totalSum;
     totalSumSaleContainer.innerHTML = totalSumSale;
   };
  
  //реагирование на изменения
  var dinamicValueChange = function() {
    for (var i = 0; i < subscribeFormQuantity.length; i++) {
      subscribeFormQuantity[i].onclick = function() {
      valueCreat(this);
      };
    }
  };
  valueCreat(initSubscribeQuantity);
  dinamicValueChange();
})();