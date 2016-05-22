var ingreds = document.querySelectorAll(".menu-ingredient__inner");
var linkTitle = document.querySelectorAll(".menu-ingredient__title");
var menuPopup = document.querySelector(".menu-dish__popup");
var menuChangeLinks = document.querySelectorAll(".menu-dish__btn");



//скрытие и показ ингредиентов
for (var i = 0; i < ingreds.length; i++) {
 ingreds[i].style.display = "none";
}

var showIngred = function() {
  for (var i = 0; i < linkTitle.length; i++) {
    linkTitle[i].addEventListener("click", function(){
      var currentItem = this.parentNode.parentNode;
      var currentIngred = currentItem.querySelector(".menu-ingredient__inner");
      if (currentIngred.style.display === "none") {
        currentIngred.style.display = "block";
      } else {
        currentIngred.style.display = "none";
      }
    })
  }
};

showIngred();

//открытие попапа "заменить блюдо"

for (var i = 0; i < menuChangeLinks.length; i++) {
  menuChangeLinks[i].addEventListener("click", function(){
    if (menuPopup.style.display === "none") {
      menuPopup.style.display = "block";
    }
   
  })
}
                  

//закрытие попапа "заменить блюдо"
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (!(menuPopup.style.display === "none")) {
      menuPopup.style.display = "none"
    }
  }
});

$("body").click(function(e) {

  if($(e.target).closest(".menu-dish__popup").length==0) $(".menu-dish__popup").css("display","none");

});
