"use strict";
(function() {
  var infoEdit = document.querySelectorAll(".personal-info__edit"); 
  
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
  
})();