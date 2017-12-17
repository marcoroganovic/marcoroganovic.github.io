App.module.define("dom", [], function() {
  var d = document;

  return {
    $: function(tag) {
      return d.querySelector(tag);
    },

    $$: function(tag) {
      return d.createElement(tag);
    }
  }

});
