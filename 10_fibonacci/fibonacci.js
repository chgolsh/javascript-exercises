const fibonacci = function(member) {
    if (member < 0 || !Number(member)) 
        return "OOPS";
    
    let a = 0;
    let b = 1;

    for (let i = 1; i < member; i++) {
        const temp = b;
        b += a;
        a = temp;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
