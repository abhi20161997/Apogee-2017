(function() {

  "use strict";

  var toggles = document.querySelectorAll("#hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
      (this.classList.contains("active") === true) ? document.body.style.marginLeft = "0" : document.body.style.marginLeft = "-25vw";
    });
  }

})();
