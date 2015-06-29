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

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
