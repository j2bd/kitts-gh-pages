
'use strict';

(function() {


  var cardjb = document.getElementById("jb-toggle");
  var switchtoggle  = document.getElementById("customSwitch2");

  switchtoggle.addEventListener('click', function(e) {
    if (cardjb.classList.contains("order-2")) {
      cardjb.classList.remove("order-2");
    } else {
      cardjb.classList.add("order-2");
      }
    });

})();
