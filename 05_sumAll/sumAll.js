const sumAll = function(first, second) {
    let sum=0
    if(first <0 || second<0 || typeof(first)!='number' || typeof(second)!='number'){
        return 'ERROR'
    }
    else if (second>first){
        for (i=first; i <= second ; i++){
            sum += i
        };
    }
    else if (second<first){
        for (i=second; i <= first ; i++){
            sum +=i
        };
    };
    return sum
}




// Do not edit below this line
module.exports = sumAll;
