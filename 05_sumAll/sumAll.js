const sumAll = function(start, end){
    let sum = 0;
    if ((start < 0 || end < 0) || 
        !(typeof(start) === "number" && typeof(end) === "number")){
            return "ERROR";
        }
    if (start > end) [start, end] = [end, start];
    for (let num = start; num <= end; num++){
        sum += num;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
