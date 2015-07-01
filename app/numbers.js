exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
   return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binary_array = [];
    for(i=0; i < 8; i++ ){
      binary_array.push(1 & (num >> i))
    }
    return binary_array.reverse().join("");
    
  },

  multiply: function(a, b) {
    a = adjust(a);
    b = adjust(b);

    var result = (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);

    return result;

    function adjust(num) {
      var exponent, multiplier;

      if (num < 1) {
        exponent = Math.floor( Math.log(num) * -1 );
        multiplier = Math.pow(10, exponent);

        return { adjusted: num * multiplier, multiplier: multiplier };
      }

      return { adjusted: num, multiplier: 1 };
    }
  }
};
