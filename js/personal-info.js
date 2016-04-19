"use strict";
(function() {
var personalTable = document.querySelector(".personal-info__data-table");
var personalInfo = personalTable.querySelectorAll(".personal-info__data");
var infoEdit = personalTable.querySelectorAll(".personal-info__edit"); 

var infoInput = personalTable.querySelectorAll(".personal-info__input");
var infoDiv = personalTable.querySelectorAll("div");


for (var i = 0; i < personalInfo.length; i++) {
   infoEdit[i].addEventListener ("click", function(){
    var tdEdit = this.parentNode;
    var infoInput = tdEdit.querySelector(".personal-info__input");
    var infoDiv = tdEdit.querySelector("div");
    infoDiv.style.display = "none";
    infoInput.style.display = "inline-block";
    infoInput.focus();
  })
  
}
})();