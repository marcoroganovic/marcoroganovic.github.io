App.module.define("contact", ["dom", "mail"], function(dom, mail) {

  // Cache DOM elements
  var $nameInput = dom.$("input[name='name']");
  var $emailInput = dom.$("input[name='email']");
  var $subjectInput = dom.$("input[name='subject']");
  var $messageInput = dom.$("textarea");
  var $formButton = dom.$("form button");

  // Events array
  var EVENT_NAMES = "input";

  var message = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  function applyInvalidStyles(el, value) {
    if(!value.trim()) {
      el.style.border = "1px solid tomato";
      return false;
    }

    removeInvalidStyles(el);
    return true;
  }

  function removeInvalidStyles(el) {
    el.style.border = "none";
  }

  function updateFormInfo(event, propName) {
    var target = event.target
        value = target.value;
    message[propName] = applyInvalidStyles(target, value) ? value : "";;
  }

  $nameInput.addEventListener(EVENT_NAMES, function(event) {
    updateFormInfo(event, "name")
  });

  $emailInput.addEventListener(EVENT_NAMES, function(event) {
    updateFormInfo(event, "email");
  });

  $subjectInput.addEventListener(EVENT_NAMES, function(event) {
    updateFormInfo(event, "subject");
  });

  $messageInput.addEventListener(EVENT_NAMES, function(event) {
    updateFormInfo(event, "message");
  });

  $formButton.addEventListener("click", function(event) {
    event.preventDefault();

    var validMessage = Object.keys(message).every(function(key) {
      return !!message[key];
    });

    if(validMessage) {
      // should add validation for email
      // and find some API mail sending service
      // also show user some pop-up for letting
      // him know that message is sent
      mail.send(message);
    }
  });


  return {};

});
