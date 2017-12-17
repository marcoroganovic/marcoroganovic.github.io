var App = (function() {
  var id = 0;
  var MODULES = {};

  function define(name, deps, fn) {
    MODULES[name] = {
      id: id++,
      definition: function() {
        return fn.apply(fn, deps.map(function(dep) { 
          return MODULES[dep]
        }));
      }
    }
  }

  function get(name) {
    return MODULES[name].definition;
  }

  return {
    module: {
      define: define,
      get: get
    },

    init: function() {

      Object.keys(MODULES).map(function(name, idx) {
        return {
          name: name,
          moduleId: MODULES[name].id,
          index: idx
        }
      }).sort(function(left, right) {
        var a = left.moduleId;
        var b = right.moduleId;

        if(a !== b) {
          if(a > b) return 1;
          if(a < b) return -1;
        }

        return left.index - right.index;
      }).forEach(function(mod) {
        var name = mod.name;
        MODULES[name] = MODULES[name].definition();
      });

    }
  }

})();
