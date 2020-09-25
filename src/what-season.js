const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if ((!!date)) {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      const month = date.getMonth() + 1;
      if (month > 2 && month < 6)
        return 'spring';
      else if (month > 5 && month < 9)
        return 'summer';
      else if (month > 8 && month < 12)
        return 'autumn';
      else
        return 'winter';
    } else 
       throw Error();
  } else
    return 'Unable to determine the time of year!';
};
