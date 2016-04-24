"use strict";
(function() {
  var questionLinks = document.querySelectorAll(".faq__question");

  var openQuestuion = function() {
    for (var i = 0; i < questionLinks.length; i++) {
      questionLinks[i].onclick = function() {
        var currentContainer = this.parentNode;
        if (!currentContainer.classList.contains("faq__item--active")) {
          currentContainer.classList.add("faq__item--active");
        } else {
          currentContainer.classList.remove("faq__item--active");
        }
      };
    }
  };

  openQuestuion();
  
})();