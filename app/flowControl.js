exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    function play(num) {
      if(num % 15 === 0){
        return 'fizzbuzz';
      } else if(num % 5 === 0) {
        return 'buzz';
      } else if(num % 3 === 0) {
        return 'fizz';
      } else if(num == undefined || typeof(num) != 'number') {
        return false;
      } else {
        return num;
      }
    }
    
    return play(num);
  }
};
