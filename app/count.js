exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;
    function doCount() {
      console.log(start++);
      if(start <= end){
        timeout = setTimeout(doCount, 100);
      }
      return timeout
    }
    doCount();
    
    return {
      cancel : function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
