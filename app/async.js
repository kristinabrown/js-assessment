exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    var people_arr = [];
    return $.get(url).then(function(people){
      people["people"].map(function(person){
        people_arr.push(person["name"]);
      });
      return people_arr
    });
  }
};
