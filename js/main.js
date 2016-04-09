var personalNav = document.querySelector(".personal-nav");
var codeItem = personalNav.querySelector(".personal-nav__item--code");
var codePopupFriend = personalNav.querySelector(".popup--friend");
var codePopupLock = personalNav.querySelector(".popup--lock");

codeItem.onmouseover = function() {
  codePopupFriend.style.display = "block";
};

codeItem.onmouseout = function() {
  codePopupFriend.style.display = "none";
}