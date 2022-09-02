const sumAll = function(min, max){
    if (start < 0 || end < 0) return "ERROR";
    if (!typeof(start) === "number" && !typeof(end) === "number") return "ERROR";
    if (start > end) [start, end] = [end, start];
    let sum = 0;
    for (let num = start; num <= end; num++){
        sum += num;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
