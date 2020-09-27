const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error();
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (resultArray.length)
          resultArray.pop();
        break;
      case '--double-prev':
        if (resultArray.length)
          resultArray.push(resultArray[resultArray.length - 1]);
        break;
      case '--discard-next':
        if (i < arr.length - 1) {
          i++;
          if (arr[i + 1] === '--double-prev' || arr[i + 1] === '--discard-prev')
            i++;
        }
        break;
      case '--double-next':
        if (i < arr.length - 1)
          resultArray.push(arr[i + 1]);
        break;
      default:
        resultArray.push(arr[i]);
        break;
    }
  }
  return resultArray;
};
