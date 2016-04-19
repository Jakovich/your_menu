"use strict";
(function() {
  var navBasket = document.querySelector(".basket-nav__item--basket");
  var navEntry = document.querySelector(".basket-nav__item--entry");;
  var navDelivery = document.querySelector(".basket-nav__item--delivery");;
  var navConfirm = document.querySelector(".basket-nav__item--confirm");

  var totalNext = document.getElementById("total-next"); 
  var deliveryNext = document.getElementById("delivery-next");
  var confirmPrev = document.getElementById("confirm-prev"); 


  var basketTotal = document.querySelector(".basket-total");
  var basketEntry = document.querySelector(".basket-entry");
  var basketDelivery = document.querySelector(".basket-delivery");
  var basketConfirm = document.querySelector(".basket-confirm");

  basketTotal.style.display = "block";
  basketEntry.style.display = "none";
  basketDelivery .style.display = "none";
  basketConfirm.style.display = "none";

  totalNext.addEventListener("click", function(event){
    event.preventDefault();
    elementHide(basketTotal);
    elementShow(basketEntry);
    elementHide(basketDelivery);
    elementHide(basketConfirm);
  });

  deliveryNext.addEventListener("click", function(event){
    event.preventDefault();
    elementHide(basketTotal);
    elementHide(basketEntry);
    elementHide(basketDelivery);
    elementShow(basketConfirm);
  });

  confirmPrev.addEventListener("click", function(event){
    event.preventDefault();
    elementHide(basketTotal);
    elementHide(basketEntry);
    elementShow(basketDelivery);
    elementHide(basketConfirm);
  });

  var elementShow = function(elem) {
    if (elem.style.display == "none") {
      elem.style.display = "block";
    }
  };

  var elementHide = function(elem) {
      if (elem.style.display == "block") {
      elem.style.display = "none";
    }
  };

    navBasket.addEventListener("click", function(){
      elementShow(basketTotal);
      elementHide(basketEntry);
      elementHide(basketDelivery);
      elementHide(basketConfirm);
  });

  navEntry.addEventListener("click", function(){
      elementShow(basketEntry);
      elementHide(basketTotal);
      elementHide(basketDelivery);
      elementHide(basketConfirm);
  });

  navDelivery.addEventListener("click", function(){
    elementShow(basketDelivery);  
    elementHide(basketEntry);
    elementHide(basketTotal);
    elementHide(basketConfirm);
  });

  navConfirm.addEventListener("click", function(){
    elementShow(basketConfirm);
    elementHide(basketDelivery);  
    elementHide(basketEntry);
    elementHide(basketTotal);
  });
})();