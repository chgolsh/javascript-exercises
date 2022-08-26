const repeatString = function(str, times) {
    if (times < 0) return 'ERROR';
    let newStr = '';
    for (let idx = 0; idx < times; idx++) {
        newStr += str;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
