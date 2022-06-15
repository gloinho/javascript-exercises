const removeFromArray = function() {
    let args = Array.from(arguments);
    let array = args[0];
    let values = args.splice(1);

    for (let value of values){
        let index = array.findIndex(arg => arg === value)
        if (index != -1){array.splice(index, 1)};
        };
    return array;
    };



// Do not edit below this line
module.exports = removeFromArray;
