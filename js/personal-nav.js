"use strict";
(function() {
var personalNav = document.querySelector(".personal-nav");
var codeItem = personalNav.querySelector(".personal-nav__item--code");
var codePopupFriend = personalNav.querySelector(".popup--friend");
var codePopupLock = personalNav.querySelector(".popup--lock");
var personalItems = personalNav.querySelectorAll(".personal-nav__item");

codeItem.onmouseover = function() {
  codePopupFriend.style.display = "block";
};

codeItem.onmouseout = function() {
  codePopupFriend.style.display = "none";
};

for (var i = 0; i < personalItems.length; i++ ) {
  removeDotes(personalItems[i]);
  if (personalItems[i].classList.contains("personal__item--active")) {
    addDotes(personalItems[i]);
  }
}

function addDotes(item) {
    var spanDot = document.createElement("span");
    spanDot.className = "personal__item--dot";
    item.appendChild(spanDot);
}

function removeDotes(item) {
    if (item.classList.contains("personal__item--dot")){
      item.classList.remove("personal__item--dot");
    }
}

})();