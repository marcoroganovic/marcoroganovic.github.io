App.module.define("modal", ["dom"], function(dom) {
  var $modal = dom.$(".modal-container");
  var $modalMessage = dom.$(".modal-container h3");
  var $modalButton = dom.$(".modal span");

  function show(message) {
    $modalMessage.textContent = message;
    $modal.style.display = "flex";
  }

  function hide() {
    $modal.classList.add("fadeOut");
    setTimeout(function() {
      $modal.style.classList.remove("fadeOut");
      $modal.style.display = "none";
    }, 300);
  }

  $modalButton.addEventListener("click", function(event) {
    hide();
  });

  return {
    show: show,
    hide: hide
  }
});
