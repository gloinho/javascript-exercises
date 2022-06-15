const repeatString = function(phrase, times) {
    if (times < 0){
        return 'ERROR'
    }
    let repetition = phrase.repeat(times)
    return repetition
};

// Do not edit below this line
module.exports = repeatString;
