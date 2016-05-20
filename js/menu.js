var ingreds = document.querySelectorAll(".menu-ingredient__inner");
var linkTitle = document.querySelectorAll(".menu-ingredient__title");
//for (var i = 0; i < ingreds.length; i++) {
//  ingreds[i].style.display = "none";
//}

var showIngred = function() {
  for (var i = 0; i < linkTitle.length; i++) {
    linkTitle[i].addEventListener("click", function(){
      var currentItem = this.parentNode.parentNode;
      var currentIngred = currentItem.querySelector(".menu-ingredient__inner");
      currentIngred.style.display = "block;"
    })
  }
};

showIngred();
