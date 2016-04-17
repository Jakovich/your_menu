"use strict";
(function() {
  var subscribeForm = document.querySelector(".subscribe-variant__form");
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
  }
})();