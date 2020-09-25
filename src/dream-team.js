const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members))
    return false
  return members
    .filter(member => (typeof member === 'string' && !!member.trim()))
    .map(member => member.trim().toUpperCase()[0])
    .sort()
    .join('')
};
