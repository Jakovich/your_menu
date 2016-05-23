"use strict";
(function(){

  var ingreds = document.querySelectorAll(".menu-ingredient__inner");
  var linkTitle = document.querySelectorAll(".menu-ingredient__title");
  var menuSection = document.querySelector(".menu-dishes");
  var menuPopup = document.querySelector(".menu-dish__popup");
  var menuChangeLinks = menuSection.querySelectorAll(".menu-dish__btn");
  var choiceMenu = document.querySelector(".menu-intro__form");
  var dinnerQuantity = choiceMenu["portion"];
  var dinnerValue = parseInt(dinnerQuantity.value, 10);
  var menuItems = menuSection.querySelectorAll(".menu-dishes__item");
  var dinnerTitle = document.querySelector(".menu-dishes__quantity");
  var dinnerCheck = document.querySelectorAll(".menu-choice__portion-variant input");

  menuPopup.style.display = "none";

  //скрытие и показ ингредиентов
  for (var i = 0; i < ingreds.length; i++) {
   ingreds[i].style.display = "none";
  }

  var showIngred = function() {
    for (var i = 0; i < linkTitle.length; i++) {
      linkTitle[i].addEventListener("click", function(){
        var currentItem = this.parentNode.parentNode;
        var currentIngred = currentItem.querySelector(".menu-ingredient__inner");
        if (!currentItem.hasAttribute("disabled")) {
          if (currentIngred.style.display === "none") {
            currentIngred.style.display = "block";
          } else {
            currentIngred.style.display = "none";
          }
        }
      })
    }
  };

  showIngred();

  //открытие попапа "заменить блюдо"

  for (var i = 0; i < menuChangeLinks.length; i++) {
    menuChangeLinks[i].addEventListener("click", function(){
      var currentItem = this.parentNode.parentNode;
      if (!currentItem.hasAttribute("disabled")) {
        if (menuPopup.style.display === "none") {
          menuPopup.style.display = "block";
          for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].hasAttribute("disabled")) {
              menuItems[i].removeAttribute("disabled")
            } else {
              menuItems[i].setAttribute("disabled", "disabled");
            }
          }
        }
      }

    });
  }


  //закрытие попапа "заменить блюдо"
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (!(menuPopup.style.display === "none")) {
        menuPopup.style.display = "none"
        for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].hasAttribute("disabled")) {
              menuItems[i].removeAttribute("disabled")
            } else {
              menuItems[i].setAttribute("disabled", "disabled");
            }
          }
      }
    }
  });

  //закрытие попапа по клику вне

  /*$("body").click(function(e) {

    if($(e.target).closest(".menu-dish__popup").length==0) { $(".menu-dish__popup").css("display","none");
    for (var i = 0; i < menuItems.length; i++) {
            if (menuItems[i].hasAttribute("disabled")) {
              menuItems[i].removeAttribute("disabled")
            } else {
              menuItems[i].setAttribute("disabled", "disabled");
            }
          }
    }

  });*/


  var clearAttributes = function() {
    dinnerTitle.removeAttribute("disabled");
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].removeAttribute("disabled", "disabled");
      }
  }; 

  var hideDinner = function(value) {
    if (value === 3) {
      dinnerTitle.setAttribute("disabled", "disabled");
      for (var i = 3; i < menuItems.length; i++) {
        menuItems[i].setAttribute("disabled", "disabled");
      }
    } else if (value === 5) {

      for (var i = 5; i < menuItems.length; i++) {
        menuItems[i].setAttribute("disabled", "disabled");
      }
    }
  }

  clearAttributes();
  hideDinner(dinnerValue);

  var dinamicValue = function() {
      for (var i = 0; i < dinnerCheck.length; i++) {
        dinnerCheck[i].onclick = function() {
          var newDinnerValue = parseInt(this.value, 10);
          clearAttributes();
          hideDinner(newDinnerValue);
      };
    }
  }
  dinamicValue();

})();
