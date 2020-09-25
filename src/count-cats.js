const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((sum, backyard) => {
    return sum + backyard.filter(element => element === '^^').length
},0)
};
