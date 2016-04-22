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
  
  
 /*раздел table*/
  
  var tableLinks = document.querySelectorAll(".index-table__item");
  
  var tableText = document.querySelectorAll(".index-table__content");
  
  var clearActive = function() {
    for (var i = 0; i < tableLinks.length; i++) {
      tableLinks[i].classList.remove("index-table__item--active");
    }
  };
  
  var clearContent = function() {
    for (var i = 0; i < tableText.length; i++) {
      tableText[i].style.display = "none";
    }
  };
  
  for (var i = 0; i < tableLinks.length; i++) {
    tableLinks[i].addEventListener("click", function() {
      clearActive();
      
      if (!this.classList.contains("index-table__item--active")) {
       this.classList.add("index-table__item--active");
      }
      var atr = this.getAttribute("data-name");
      for (var i = 0; i < tableText.length; i++) {
        if (tableText[i].getAttribute("data-name") == atr) {
          clearContent();
          tableText[i].style.display = "block";
        }
      }
    });
  }
  
})();