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
  
})();