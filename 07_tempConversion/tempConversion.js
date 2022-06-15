const ftoc = function(temp) {
  return Math.round((temp-32)*(5/9)*10)/10
//	[°C] = ([°F] − 32) × 5⁄9

};

const ctof = function(temp) {
  return Math.round((temp*(9/5)+32)*10)/10

//[°F] = [°C] × 9⁄5 + 32
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
