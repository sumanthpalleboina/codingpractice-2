const list = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

function getPeopleInCity(list) {
  return getFirstNames(list);
}
module.exports = getPeopleInCity;
