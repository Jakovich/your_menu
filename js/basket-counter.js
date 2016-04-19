"use strict";
(function() {
  
  var basketTotal = document.querySelector(".basket-total__table");
  var dishItem = document.querySelectorAll(".basket-total__dish-item");
  
  var dishPrice = basketTotal.querySelector(".basket-total__quantity span");
  var dishPriceValue = parseInt(dishPrice.innerHTML, 10);
  
  var dishQuantity = basketTotal.querySelector("select[name=quantity-portion]");
  var dishQuantityValue =  parseInt(dishQuantity.value, 10);
/*  var subscribeForm = document.querySelector(".subscribe-variant__form");
  var subscribeFormQuantity = subscribeForm["subscribe-quantity"];
  var subscribeFormValue = parseInt(subscribeFormQuantity.value, 10);
  var priceSpan = subscribeForm.querySelector(".total-sum");
  var PRICE = 700;

  var totalSum = subscribeFormValue * PRICE;
  priceSpan.innerHTML = totalSum;

  for (var i = 0; i < subscribeFormQuantity.length; i++) {
    subscribeFormQuantity[i].onclick = function() {
      var subscribeFormValue = parseInt(subscribeFormQuantity.value, 10);
      var totalSum = subscribeFormValue * PRICE;
      priceSpan.innerHTML = totalSum;
    };
  }*/
})();