const ftoc = function(f) {
  let c = (f - 32) * (5/9);
  let roundedToOneDecimal = Math.round(c * 10) / 10;
  return roundedToOneDecimal;
};

const ctof = function(c) {
  let f = (c * (9/5)) + 32;
  let roundedToOneDecimal = Math.round(f * 10) / 10;
  return roundedToOneDecimal;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
