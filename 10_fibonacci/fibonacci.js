const fibonacci = function(input) {
    let number = Number(input)
    if (number<0){return "OOPS"}
    else if (number===1){return 1}
    else if (number===0){return 0}
    else {return(fibonacci(number-1) + fibonacci(number-2))}
    

};

// Do not edit below this line
module.exports = fibonacci;
