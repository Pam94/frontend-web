const data = require("./data");

function entryCalculator(entrants) {//TODO
  if (!entrants || Object.values(entrants) === []) {

    return 0;

  } else {

    return Object.values(entrants).reduce((totalPrice, entrant) =>
      totalPrice += (entrant.value * data.prices[entrant]));
  }
}

function schedule(dayName) {//TODO
  if (!dayName) {
    return Object.values(data.hours).reduce((object, day) => {
      if (day[1].open == 0 && day[1].close == 0) {
        object[day[0]] = "CLOSED";
      } else {
        object[day[0]] = "Open from " + day[1].open
          + "am until " + day[1].close + "pm";
        return object;
      }
    }, {});
  } else {
    return Object.values(data.hours).reduce((object, day) => {
      if (day[0] == dayName) {
        if (day[1].open == 0 && day[1].close == 0) {
          object[dayName] = "CLOSED";
        } else {
          object[dayName] = "Open from " + day[1].open
            + "am until " + day[1].close + "pm";
          return object;
        }
      } else {
        return {};
      }
    }, {});
  }
}

function animalCount(species) {
  // your code here
}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
