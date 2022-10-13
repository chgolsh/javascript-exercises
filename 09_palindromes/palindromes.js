const palindromes = function (str) {
    let normal_str = str.replace(/[!,\.\s]/g, '').toLowerCase();
    let reverse_str = normal_str.split('').reverse().join('');
    return normal_str === reverse_str;
};

// Do not edit below this line
module.exports = palindromes;
