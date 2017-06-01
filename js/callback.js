(function(){
  var callbackPopup = document.querySelector(".popup-callback");
  var callbackClose = callbackPopup.querySelector(".calback-form__close");
  var callbackSubmit = callbackPopup.querySelector(".calback-form__submit");
  var callBackLinks = document.querySelectorAll(".user-nav__item--tel a");
  for (var i = 0; i < callBackLinks.length; i ++) {
    callBackLinks[i].addEventListener("click", function (event) {
      event.preventDefault(event);
      if(!(callbackPopup.style.display === "block"))
      callbackPopup.style.display = "block";
    });
  }
  
  callbackClose.addEventListener("click", function () {
    callbackPopup.style.display = "none";
  });
  
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (callbackPopup.style.display === "block") {
		  callbackPopup.style.display = "none";
      }
    }
  });
})();