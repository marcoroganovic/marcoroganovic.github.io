App.module.define("mail", ["modal"], function(modal) {

  function formatData(data) {
    var accumulator = "";

    for(var prop in data) {
      accumulator += encodeURIComponent(prop) + "=" + encodeURIComponent(data[prop]) + "&" 
    }

    return accumulator.slice(0, -1);
  }

  function send(mail) {
    var xhr = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
      xhr.open("POST", "https://marco-portfolio-mailer.herokuapp.com/mail");
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function() {
        if(this.status === 200 && this.readyState === 4) {
          modal.show("Message sent!");
          resolve();
        } else if(this.stats === 404) {
          modal.show("Mesage not sent, try again later!");
          reject();
        }
      }

      xhr.send(JSON.stringify(mail));
    });
  }

  return {
    send: send
  }

});
