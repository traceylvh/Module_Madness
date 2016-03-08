var randomNumber = require('./generateRandomNumber');
var toUSD = require('./convertUSD');

var randomToUSD = function(){
  return toUSD(randomNumber()).toString();
}

var printBalance = function() {
  return "Account balance: \n"
}

module.exports = randomToUSD;
module.exports.print = printBalance;
