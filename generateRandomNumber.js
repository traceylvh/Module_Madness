var randomNumber = function(min,max){
  return Math.floor(Math.random() * (1 + max - min) + min);
};

var generateNumber = function() {
  return randomNumber(100, 1000000);
}


module.exports = generateNumber;
