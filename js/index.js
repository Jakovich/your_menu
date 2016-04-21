"use strict";
(function() {
  var menuWeekLink = document.querySelector(".service-nav__menu-week");
  var menuWeekLinkScroll = document.querySelector(".service-nav__menu-week--scroll");
  
  var menuWeekPopup = document.querySelector(".popup-dinner");
  var menuPopup = document.querySelector(".popup-menu");
  
  menuWeekLink.onclick = function(event) {
    event.preventDefault();
    if (menuWeekPopup.style.display == "block") {
      menuWeekPopup.style.display = "none";
    } else {
      menuWeekPopup.style.display = "block";
    }
  };
  
  menuWeekLinkScroll.onclick = function(event) {
    event.preventDefault();
    if (menuWeekPopup.style.display == "block") {
      menuWeekPopup.style.display = "none";
      menuWeekPopup.style.position = "absolute";
      menuWeekPopup.style.top = "166px";
      menuWeekPopup.style.left = "110px";
    } else {
      menuWeekPopup.style.display = "block";
      menuWeekPopup.style.position = "fixed";
      menuWeekPopup.style.top = "65px";
      menuWeekPopup.style.left = "250px";
    }
  };
  
  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 200) {
      menuPopup.style.top = "0";
    } else {
      menuPopup.style.top = "-105px";
    }
  }
})();