'use strict';
(function() {
  var titles = document.querySelectorAll('.menu-dish__title a');
  var maxHeight = 0;
  for (var i = 0; i < titles.length; i++) {
    if (titles[i].offsetHeight > maxHeight) {
      maxHeight = titles[i].offsetHeight;
    }
  }

  for (var i = 0; i < titles.length; i++) {
    var value = maxHeight + 'px'
    titles[i].style.height = value;
  }
})();

