"use strict";
(function() {
  var infoEdit = document.querySelectorAll(".personal-info__edit"); 
  var addressButton = document.querySelector(".personal-info__add");
  var template = document.querySelector('#address-template');
  var elementToClone;
  
  if ('content' in template) {
    elementToClone = template.content.querySelector('.personal-info__address-item');
  } else {
    elementToClone = template.querySelector('.personal-info__address-item');
  }
  
  
  var editFunction = function() {
    for (var i = 0; i < infoEdit.length; i++) {

    infoEdit[i].addEventListener ("click", function(){
      var tdEdit = this.parentNode;
      var infoInput = tdEdit.querySelector(".personal-info__input");
      var infoDiv = tdEdit.querySelector("div");
      infoDiv.style.display = "none";
      infoInput.style.display = "block";
      infoInput.focus();
    })
    }
  };

  addressButton.addEventListener ("click", function(event) {
    event.preventDefault();
    var addressContainer = document.querySelector(".personal-info__address-items");
    var addressItems = document.querySelectorAll(".personal-info__address-item");
    var newAddressItem = elementToClone.cloneNode(true);
    var Edit = document.querySelector(".personal-info__edit"); 
    var newEdit = Edit.cloneNode(true);
    if (addressItems.length < 3){
      addressContainer.appendChild(newAddressItem);
    }
    infoEdit = document.querySelectorAll(".personal-info__edit");
    editFunction();
    
  });
  editFunction();

})();