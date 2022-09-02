const removeFromArray = function(sourceArray, ...values) {
    let array = Array.from(sourceArray);
    for (value of values) {
        let indexOfValue = array.indexOf(value);
        if (indexOfValue === -1) continue;
        array.splice(indexOfValue, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
