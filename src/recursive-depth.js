const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.maxDepth = 1;
  }
  calculateDepth(arr) {
    let index = arr.findIndex(el => Array.isArray(el))
    if (index >= 0) {
      this.maxDepth++;
      return this.calculateDepth(arr.flat())
    } else {
      let result = this.maxDepth;
      this.maxDepth = 1;
      return result;
    }

  }
};