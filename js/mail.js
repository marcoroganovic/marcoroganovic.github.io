App.module.define("mail", [], function() {

  function formatData(data) {
    var accumulator = "";

    for(var prop in data) {
      accumulator += encodeURIComponent(prop) + "=" + encodeURIComponent(data[prop]) + "&" 
    }

    return accumulator.slice(0, -1);
  }

  function send(mail) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://marco-portfolio-mailer.herokuapp.com/mail");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
      if(this.status === 200 && this.readyState === 4) {
        alert("Sent!");
      } else if(this.stats === 404) {
        alert("Failed!");
      }
    }

    xhr.send(JSON.stringify(mail));
  }

  return {
    send: send
  }

});
