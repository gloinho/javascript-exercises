const reverseString = function(phrase) {
    let splited = phrase.split('')
    let reversed = ''
    for (i=splited.length - 1; i>=0; i--){
        reversed += splited[i]
    }
    return reversed

};

// Do not edit below this line
module.exports = reverseString;
