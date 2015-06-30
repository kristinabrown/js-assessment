exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(arg) {
      return str + ", " + arg
    }
  },

  makeClosures : function(arr, fn) {
    var new_arr = [];
    for(i = 0; i < arr.length; i++){
      new_arr.push(fn(arr[i]));
    }
    return new_arr;
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn.call(null, str1, str2, str3);
    };
  },

  useArguments : function() {
    var total = 0
    
    for(i = 0; i < arguments.length; i++){
      total += arguments[i];
    }
    return total;
  },
//yeah, I don't get this call it one...
  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function(){
      var moreargs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreargs);
    }
  },

  curryIt : function(fn) {
    function applyArguments(fn, arguments) {
      return fn.apply(null, arguments);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        } else {
          return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
        }
      };
    }

    return getArgumentAccumulator([], fn.length);
  }
};

//curried functions
// function add(a, b) {
//     if (arguments.length < 1) {
//         return add;
//     } else if (arguments.length < 2) {
//         return function(c) { return a + c }
//     } else {
//         return a + b;
//     }
// }
