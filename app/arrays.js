exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(i = 0; i < arr.length; i++){
      if (arr[i] == item){
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var sum = 0;
    for(i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    for(i = 0; i < arr.length; i++){
      if(arr[i] == item){
        arr.splice(i, 1);
      }
    }
    return arr
  },

  removeWithoutCopy : function(arr, item) {
    var new_arr = arr;
    for(i = 0; i < arr.length; i++){
      if(arr[i] == item){
        new_arr.splice(i, 1);
        i -= 1
      }
    }
    return new_arr;
  },

  append : function(arr, item) {
    var end_spot = arr.length
    arr[end_spot] = item
    return arr
  },

  truncate : function(arr) {
    var end_spot = arr.length - 1;
    arr[end_spot] = undefined;
    var cleaned = [];
    for(i = 0; i < arr.length; i++){
      if(arr[i] != undefined){
        cleaned.push(arr[i]);
      }
    }
    return cleaned
  },

  prepend : function(arr, item) {
    new_arr = [];
    for(i = 0; i < arr.length; i++){
      if(i === 0){
        new_arr.push(item);
        new_arr.push(arr[i]);
      } else {
        new_arr.push(arr[i]);
      }
    }
    return new_arr
  },

  curtail : function(arr) {
    arr[0] = undefined
    var new_arr = [];
    for(i = 0; i < arr.length; i++){
      if(arr[i] != undefined){
        new_arr.push(arr[i]);
      }
    }
    return new_arr
  },

  concat : function(arr1, arr2) {
    for( i = 0; i < arr2.length; i++){
      arr1.push(arr2[i]);
    }
    return arr1
  },

  insert : function(arr, item, index) {
    var new_arr = [];
    for(i = 0; i < arr.length; i++){
      if(i == index){
        new_arr.push(item);
        new_arr.push(arr[i]);
      } else {
        new_arr.push(arr[i]);
      }
    }
    return new_arr
  },

  count : function(arr, item) {
     var count = 0
     for(i = 0; i < arr.length; i++){
       if(arr[i] == item){
         count += 1;
       }
     }
     return count
  },

  duplicates : function(arr) {
    var items = {};
    var new_arr = [];
    for(i = 0; i < arr.length; i++){
      if(items.hasOwnProperty(arr[i].toString())){
        items[arr[i]] = (items[arr[i]] + 1);
      } else {
        items[arr[i]] = 1;
      }
    }
    for (var key in items) {
      if (items[key] > 1) {
        new_arr.push(parseInt(key));
      }
    }
    return new_arr;
  },

  square : function(arr) {
    var new_arr = [];
    for(i = 0; i < arr.length; i++){
      var square = arr[i] * arr[i];
      new_arr.push(square);
    }
    return new_arr
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    for(i = 0; i < arr.length; i++){
      if(arr[i] == target){
        result.push(i);
      }
    }
    return result
  }
};
