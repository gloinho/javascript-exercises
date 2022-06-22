const add = function(x, y) {
  return x+y
	
};

const subtract = function(x, y) {
  return x-y
	
};

const sum = function(array) {
  const result = array.reduce((total, number) => {return total + number}, 0)
  return result
  }

const multiply = function(array) {
  const result = array.reduce((total, number) => {
    if (total===0){return number}
    else {return total*number}
  }, 0)
  return result
};

const power = function(x, y) {
  return x**y
	
};

const factorial = function(number) {
  if (number===0){return 1}
  else{
    return number*(factorial(number-1))
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
