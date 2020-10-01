const CustomError = require("../extensions/custom-error");

const chainMaker = {
  values: [],
  getLength() {
    return this.values.length;
  },
  addLink(value = '') {
    this.values.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || (position < 1 || position > this.values.length )){
      this.values = [];
      throw Error();
    }
      
    else{
      this.values.splice(position - 1, 1)
      return this;
    }
  },
  reverseChain() {
    this.values.reverse();
    return this
  },
  finishChain() {
    let result = '';
    for (let i = 0; i < this.values.length; i++) {
      result = result.concat(`( ${this.values[i]} )`)
      if (i + 1 === this.values.length)
        break;
      result = result.concat(`~~`);
    }
    this.values = [];
    return result
  }
};

module.exports = chainMaker;
