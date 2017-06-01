"use strict";

(function() {
  var togetherPoints = document.querySelectorAll(".together-points__item");

  for (var i = 0; i < togetherPoints.length; i++) {
    
    togetherPoints[i].onmouseover = function() {
      var currentHover = this.querySelector(".together-points__hover");
      currentHover.style.display = "block";
    }
    togetherPoints[i].onmouseout = function() {
      var currentHover = this.querySelector(".together-points__hover");
      currentHover.style.display = "none";
    }
  }  
})();


$(function() {

  $(".up-scroll").click(function() {

    $("body,html").animate({scrollTop:0},800);

  });

});



