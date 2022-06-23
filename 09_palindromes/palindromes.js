const palindromes = function (word) {
    let onlyletters = word.replace(/[^\w]/gi, '').toLowerCase()
    let reversed = onlyletters.split('').reverse().join('')
    return onlyletters === reversed
};

// Do not edit below this line
module.exports = palindromes;
