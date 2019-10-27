const data = require("./data");

function entryCalculator(entrants) {//TODO
  if (!entrants || Object.values(entrants).length === 0) {

    return 0;

  } else {

    return Object.entries(entrants).reduce((totalPrice, entrant) =>
      totalPrice += (entrant[1] * data.prices[entrant[0]]), 0);

  }
}

function schedule(dayName) {
  if (!dayName) {
    return Object.entries(data.hours).reduce((object, day) => {
      if (day[1].open == 0 && day[1].close == 0) {
        object[day[0]] = "CLOSED";
      } else {
        object[day[0]] = "Open from " + day[1].open
          + "am until " + day[1].close % 12 + "pm";
      }
      return object;
    }, {});
  } else {
    return Object.entries(data.hours).reduce((object, day) => {
      if (day[0] === dayName) {
        if (day[1].open == 0 && day[1].close == 0) {
          object[dayName] = "CLOSED";
        } else {
          object[dayName] = "Open from " + day[1].open
            + "am until " + day[1].close % 12 + "pm";
        }
      }
      return object;
    }, {});
  }
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((object, animalGroup) => {
      object[animalGroup.name] = animalGroup.residents.length;
      return object;
    }, {});
  } else {
    return data.animals.reduce((count, animalGroup) => {
      if (animalGroup.name === species) {
        count = animalGroup.residents.length;
      }
      return count;
    }, 0);
  }
}

function animalMap(options) {
  // your code here reduce a un unico objeto y un filter para separar los tipos // de animales segun el location
}

function animalPopularity(rating) {
  // your code here reduce a un unico objeto y un filter para separar los tipos // de animales segun la popularity
}

function animalsByIds(ids) {
  // your code here FILTER by ID y SOME
}

function animalByName(animalName) {
  // your code here REDUCE y FILTER
}

function employeesByIds(ids) {
  // your code here FILTER y EVERY
}

function employeeByName(employeeName) {
  // your code here FILTER by name and lastname SOME?
}

function managersForEmployee(idOrName) {
  // your code here FILTER by id, name y last name y MAP cambiar el id de los ////manager por sus nombres
}

function employeeCoverage(idOrName) {
  // your code here REDUCE and FILTER
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
