const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (
    (Object.entries(date).length > 0 && arguments.length > 0) ||
    date instanceof Date === false
  )
    throw new Error("Invalid date!");
  const season = ["winter", "spring", "summer", "autumn"];
  const numMoth =
    date.getMonth() === 11 ? 0 : Math.floor((date.getMonth() + 1) / 3);
  return season[numMoth];
}

module.exports = {
  getSeason,
};
