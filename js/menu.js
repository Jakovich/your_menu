"use strict";
(function(){

  var ingreds = document.querySelectorAll(".menu-ingredient__inner");
  var menuSection = document.querySelector(".menu-dishes");
  var menuPopup = document.querySelector(".menu-dish__popup");
  var menuChangeLinks = menuSection.querySelectorAll(".menu-dish__btn");
  var choiceMenu = document.querySelector(".menu-intro__form");
  var dinnerQuantity = choiceMenu["portion"];
  var dinnerValue = parseInt(dinnerQuantity.value, 10);
  var menuItems = menuSection.querySelectorAll(".menu-dishes__item");
  var dinnerTitle = document.querySelector(".menu-dishes__quantity");
  var dinnerCheck = document.querySelectorAll(".menu-choice__portion-variant input");
  var menuPopupClose = menuPopup.querySelector(".menu-dish__popup-close");
  var dinnerTitleThree = document.querySelector(".menu-dishes__quantity-title--3");
  var dinnerTitleFive = document.querySelector(".menu-dishes__quantity-title--5");
  var currentItemForChange;
  var linksPopup;

  menuPopup.style.display = "none";

  //скрытие и показ ингредиентов
  for (var i = 0; i < ingreds.length; i++) {
   ingreds[i].style.display = "none";
  }

  var showIngred = function() {
    var linkTitle = document.querySelectorAll(".menu-ingredient__title");
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
  
  

  
  //функция замены выбранного блюда
  var copy = function() {
    
  if (!(menuPopup.style.display === "none")) {
    for (var j = 0; j < linksPopup.length; j++) {
      linksPopup[j].addEventListener("click", function(){
        var itemForReplace = this.parentNode.parentNode;
        var currentBtn = itemForReplace.querySelector(".menu-dish__btn");
        currentBtn.innerHTML = "заменить";
        var cloneItem = itemForReplace.innerHTML;
        var replacedItem = currentItemForChange.cloneNode(true);
        currentItemForChange.innerHTML = cloneItem;
        menuPopup.style.display = "none";
        for (var i = 0; i < menuItems.length; i++) {
          
            if (!menuItems[i].hasAttribute("disabled")) {
              if (menuItems[i].innerHTML === cloneItem) {
                menuItems[i].innerHTML = replacedItem.innerHTML;
              }
              menuItems[i].setAttribute("disabled", "disabled");
            } else {
              
              menuItems[i].removeAttribute("disabled");
            }
          }
         menuChangeLinks = menuSection.querySelectorAll(".menu-dish__btn");
          popupShow();
        })
      }
    }
  };
  
//заполнение и открытие попапа "заменить блюдо"
  var popupShow = function() {
    var popupItemContainer = document.querySelector(".menu-dishes__items--popup");
    for (var i = 0; i < menuChangeLinks.length; i++) {
      menuChangeLinks[i].addEventListener("click", function(){
        currentItemForChange = this.parentNode.parentNode;
        if (!currentItemForChange.hasAttribute("disabled")) {
          if (menuPopup.style.display === "none") {
            popupItemContainer.innerHTML="";
            for (var i = 0; i < menuItems.length; i++) {
              if (menuItems[i].hasAttribute("disabled")) {
                var toClone = menuItems[i].cloneNode(true);
                toClone.removeAttribute("disabled");
                var currentBtn = toClone.querySelector(".menu-dish__btn");
                currentBtn.innerHTML = "выбрать";
                popupItemContainer.appendChild(toClone);

              }
            }
            menuPopup.style.display = "block";
            linksPopup = menuPopup.querySelectorAll(".menu-dish__btn");
            copy();
            
            for (var i = 0; i < menuItems.length; i++) {
              if (menuItems[i].hasAttribute("disabled")) {
                menuItems[i].removeAttribute("disabled")
              } else {
                menuItems[i].setAttribute("disabled", "disabled");
              }
            }
          }
        }
        showIngred();
      });
    }
   
  }
  
  popupShow();

  //функция закрытия попапа "заменить блюдо"
  
  var hidePopup = function() {
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
  };
  
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      hidePopup();
    }
  });
  
  menuPopupClose.addEventListener("click", function() {
    hidePopup();
  });
  
//функция удаления аттрибута disabled
  var clearAttributes = function() {
    dinnerTitle.removeAttribute("disabled");
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].removeAttribute("disabled", "disabled");
      }
  }; 
  
//установка аттрибутов disabled в зависимости от выбранного кол-ва ужинов

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
//реагирование на изменения выбранного кол-ва ужинов
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
  
  //реагирование на клик по заголовку "3 ужина" и "5 ужинов"
  var changeByTitle = function () {
  
    dinnerTitleFive.addEventListener("click", function(){
      if (dinnerQuantity.value == 3) {
        dinnerQuantity.value = 5;
        clearAttributes();
        hideDinner(5);
      }
    });
    
    dinnerTitleThree.addEventListener("click", function(){
      if (dinnerQuantity.value == 5) {
        dinnerQuantity.value = 3;
        clearAttributes();
        hideDinner(3);
      }
    });
  };
  
  
  
  changeByTitle();
 

})();
