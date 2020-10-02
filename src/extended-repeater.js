const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addArr = [];
  let finalArr = [];
  if (!options.separator)
    options.separator = '+';
  if (!options.additionSeparator)
    options.additionSeparator = '|';
  if (!options.repeatTimes)
    options.repeatTimes = 1;
  if (!options.additionRepeatTimes)
    options.additionRepeatTimes = 1;
  if (!options.hasOwnProperty('addition')) {
    options.addition = ''
  }
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addArr.push(String(options.addition))
  }
  addArr = addArr.join(options.additionSeparator).split();
  for (let i = 0; i < options.repeatTimes; i++) {
    finalArr.push(str + addArr)
  }
  return finalArr.flat().join(options.separator);
};
