"use strict";
(function(){
  var menuWeekLink = document.querySelector(".service-nav__menu-week");
  var menuWeekPopup = document.querySelector(".popup-dinner");
  var popupContant = menuWeekPopup.getElementsByTagName('*');
  var nmb;
  var nmbSecond;
  menuWeekLink.onmouseover = function() {
    //event.preventDefault();
    if (menuWeekPopup.style.display == "block") {
      menuWeekPopup.style.display = "none";
    } else {
      menuWeekPopup.style.display = "block";
      nmb = 0;
      nmbSecond = 0; 
    }
  };
  
  var popupClose = function() {
  
    menuWeekPopup.onmouseout = function(event) {
      nmbSecond = 0; 
      for (var i = 0; i < popupContant.length; i++) {
        
        if ( event.relatedTarget === popupContant[i]) {
          ++nmb;
        } else {
          ++nmbSecond;
        }
      } 
        
      for (var j = 0 ; j < popupContant.length; j++) {
          popupContant[j].onmouseout = function(event) {
            nmbSecond = 0;
          if (event.relatedTarget === menuWeekPopup) {
             ++nmb;
          } else {
            nmb = 0;
          }
        };
         menuWeekPopup.onmouseout = function(event) {
      nmbSecond = 0; 
      for (var i = 0; i < popupContant.length; i++) {
        
        if ( event.relatedTarget === popupContant[i]) {
          ++nmb;
        } else {
          ++nmbSecond;
        }
      } 
      }
      
      
     
    
       if (nmb === 0 || nmbSecond === 0) {
        menuWeekPopup.style.display = "none";
      }
  }
  };
  
  popupClose();
  
})();