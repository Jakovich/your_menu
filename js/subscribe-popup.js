"use strict";
(function() {
var subscribePopup = document.querySelector(".subscribe-popup");
var subscribePopupForm = subscribePopup.querySelector("form");
var subscribePopupClose = subscribePopup.querySelector(".subscribe-popup__close");
var subscribePopupOpen = document.querySelector(".personal-subscribe__delete");
var subscribePopupBtn = subscribePopup.querySelector(".subscribe-popup__btn");

subscribePopupOpen.addEventListener("click", function(event){
  event.preventDefault();
  subscribePopup.style.display = "block";
});

subscribePopupClose.addEventListener("click", function(){
  subscribePopup.style.display = "none";
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (!(subscribePopup.style.display == "none")) {
      subscribePopup.style.display = "none";
	}
  }
});

subscribePopupBtn.addEventListener("click", function(event){
  event.preventDefault();
  subscribePopup.style.display = "none";
  subscribePopupForm.submit();
});

})();