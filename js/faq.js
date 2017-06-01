"use strict";
(function() {
  var questionLinks = document.querySelectorAll(".faq__question");
  var subQuestionLinks = document.querySelectorAll(".faq__subquestion");
   var questionAnswers = document.querySelectorAll(".faq__answer");
  
   for (var i = 0; i <  questionAnswers.length; i++) { 
     questionAnswers[i].style.display = "none";
   }
  
  var openQuestion = function() {
    for (var i = 0; i < questionLinks.length; i++) {
      questionLinks[i].onclick = function() {
        var currentContainer = this.parentNode;
        var currentAnswers = currentContainer.querySelectorAll(".faq__answer");
        if (!this.classList.contains("faq__question--active")) {
          this.classList.add("faq__question--active");
          for (var i = 0; i < currentAnswers.length; i++ ) {
          currentAnswers[i].style.display = "block";
          }          
        } else {
          this.classList.remove("faq__question--active");
          for (var i = 0; i < currentAnswers.length; i++ ) {
          currentAnswers[i].style.display = "none";
          }
        }
      };
    }
  };
  
  var openSubQuestion = function() {
    for (var i = 0; i < subQuestionLinks.length; i++) {
    subQuestionLinks[i].onclick = function() {
      var currentContainer = this.parentNode;
      var currentUpContainer = currentContainer.parentNode; 
      var currentUpQuestion = currentUpContainer.querySelector(".faq__question");
      var currentAnswer = currentContainer.querySelector(".faq__answer");
      var allAnswers =  currentUpContainer.querySelectorAll(".faq__answer");
        if (currentAnswer.style.display == "none") {
          currentAnswer.style.display = "block";
          if (!currentUpQuestion.classList.contains("faq__question--active")) {
            currentUpQuestion.classList.add("faq__question--active");
          }
        } else {
          currentAnswer.style.display = "none";
        }
      checkSubAnswer(allAnswers, currentUpQuestion);
      };
    }
  }

  /*function check if all subAnswer closed*/
  var checkSubAnswer = function(arr, elem) {    
    var number = 0;
    for (var i = 0; i < arr.length; i++ ) { 
      if ( arr[i].style.display == "block") {
        number = number + 1;
      }
    }
    if (number == 0) {
      elem.classList.remove("faq__question--active");
    }
  };
  
  
  openQuestion();
  openSubQuestion();
  
})();