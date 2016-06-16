'use strict';

(function() {
  var select = document.querySelector('.add-address__select');
  
  var container = document.querySelector('.add-address__address-exist');

  var selectValue = select.options[select.selectedIndex].text;
  
  container.innerHTML = selectValue;
  
  select.onchange = function() {
    var selectValue = select.options[select.selectedIndex].text;
    container.innerHTML = selectValue;
  }

})();