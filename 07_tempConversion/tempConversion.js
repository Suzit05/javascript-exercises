const convertToCelsius = function(temp) {
  return Math.round((5/9)*(temp-32))
};

const convertToFahrenheit = function(temp) {
  return Math.round(temp* (9/5) + 32)
};
convertToCelsius(32);
convertToFahrenheit(0);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
