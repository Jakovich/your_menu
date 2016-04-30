"use strict";

(function() {
  var togetherPoints = document.querySelectorAll(".together-points__item");
  var itemGift = document.querySelectorAll(".personal-gift__item");
  var confirmPopup = document.querySelector(".personal-gift__confirm");
  var confirmPopupClose = confirmPopup.querySelector(".personal-gift__confirm-link");
  var itemGiftActive= [];
  
  for (var i = 0; i < itemGift.length; i++) {
    if (!itemGift[i].classList.contains("personal-gift__item--inactive")) {
      var activeLength = itemGiftActive.push(itemGift[i]);
    } else {
      var linkInactive = itemGift[i].querySelector(".personal-gift__button");
      linkInactive.onclick= function() {
        return false
      }
    }
  }
  
  for (var i = 0; i < activeLength; i++) {
    var linkActive = itemGiftActive[i].querySelector(".personal-gift__button");
    linkActive.addEventListener("click", function(event){
      event.preventDefault();
      confirmPopup.style.display = "block";
    })
  }
  
  confirmPopupClose.addEventListener("click", function(){
    confirmPopup.style.display = "none";
  });
  
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (!(confirmPopup.style.display == "none")) {
		confirmPopup.style.display = "none";
      }
    }
  });
  
  
  for (var i = 0; i < togetherPoints.length; i++) {
    
    togetherPoints[i].onmouseover = function() {
      var currentHover = this.querySelector(".together-points__hover");
      currentHover.style.display = "block";
    }
    togetherPoints[i].onmouseout = function() {
      var currentHover = this.querySelector(".together-points__hover");
      currentHover.style.display = "none";
    }
  }
    
    
    
    
    
})();


$(function() {

  $(".up-scroll").click(function() {

    $("body,html").animate({scrollTop:0},800);

  });

});



