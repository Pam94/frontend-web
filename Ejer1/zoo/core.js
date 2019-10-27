const data = require("./data");

function entryCalculator(entrants) {
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
  if (!options || !options.hasOwnProperty('includeNames')) {
    return data.animals.reduce((object, animalGroup) => {
      const animalsByLocation = data.animals.filter(
        element => element.location === animalGroup.location);
      const animalNames = animalsByLocation.map(animal => animal.name);

      object[animalGroup.location] = animalNames;
      return object;
    }, {});
  } else {
    if (options.hasOwnProperty('includeNames')
      && options['includeNames'] === true) {
      return data.animals.reduce((object, animalGroup) => {
        let animalsByLocation = data.animals.filter(
          element => element.location === animalGroup.location);

        const animalNames = [];
        animalsByLocation.forEach(element => {
          let animalObject = {};

          let residentFilter = element.residents;
          if (options.hasOwnProperty('sex')) {
            residentFilter = element.residents.filter(
              resident => resident.sex === options['sex'], []);
          }
          animalObject[element.name] = residentFilter.map(
            resident => resident.name, []);
          animalNames.push(animalObject);
        });

        object[animalGroup.location] = animalNames;
        return object;
      }, {});
    }
  }
}

function animalPopularity(rating) {
  if (!rating) {
    return data.animals.reduce((object, animalGroup) => {
      const animalsByPopularity = data.animals.filter(
        element => element.popularity === animalGroup.popularity);
      const animalNames = animalsByPopularity.map(animal => animal.name);

      object[animalGroup.popularity] = animalNames;
      return object;
    }, {});
  } else {
    return data.animals.reduce((array, animalGroup) => {
      if (rating === animalGroup.popularity) {
        const animalsByPopularity = data.animals.filter(
          element => element.popularity === animalGroup.popularity);
        array = animalsByPopularity.map(animal => animal.name);

      }
      return array;
    }, []);
  }
}

function animalsByIds(ids) {
  if (!ids) {
    return [];
  } else {
    return data.animals.filter(animal => ids.includes(animal.id), []);
  }
}

function animalByName(animalName) {
  if (!animalName) {
    return {};
  } else {
    return data.animals.reduce((object, animalGroup) => {
      const animal = animalGroup.residents.filter(element =>
        element.name === animalName);

      if (animal.length > 0) {
        object['name'] = animal[0].name;
        object['sex'] = animal[0].sex;
        object['age'] = animal[0].age;
        object['species'] = animalGroup.name;
      }
      return object;
    }, {});
  }
}

function employeesByIds(ids) {
  if (!ids) {
    return [];
  } else {
    return data.employees.filter(employee => ids.includes(employee.id), []);
  }
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  } else {
    const employeeFilter = data.employees.filter(employee =>
      employee.firstName === employeeName ||
      employee.lastName === employeeName);

    if (employeeFilter.length > 0) {
      return employeeFilter[0];
    }
  }
}

function managersForEmployee(idOrName) {
  if (!idOrName) {
    return {};
  } else {
    const employeeFilter = data.employees.filter(employee =>
      employee.id === idOrName ||
      employee.firstName === idOrName ||
      employee.lastName === idOrName);

    let employees = employeeFilter;
    if (employeeFilter.length > 0) {

      employees[0].managers = employees[0].managers.map(manager => {
        let employeeFilter = data.employees.filter(element => element.id === manager);
        return employeeFilter[0].firstName + ' ' + employeeFilter[0].lastName
      });

      return employees[0];
    } else {
      return {};
    }
  }
}

function employeeCoverage(idOrName) {
  if (!idOrName) {
    return data.employees.reduce((object, employee) => {

      let animalsResponsible = data.animals.filter(animal => employee.responsibleFor.includes(animal.id));

      animalsResponsible = animalsResponsible.map(element => element.name);

      object[employee.firstName + ' ' + employee.lastName] = animalsResponsible;
      return object;
    }, {});
  } else {
    const employeeFilter = data.employees.filter(employee =>
      employee.id === idOrName ||
      employee.firstName === idOrName ||
      employee.lastName === idOrName);

    return employeeFilter.reduce((object, employee) => {

      let animalsResponsible = data.animals.filter(animal => employee.responsibleFor.includes(animal.id));

      animalsResponsible = animalsResponsible.map(element => element.name);

      object[employee.firstName + ' ' + employee.lastName] = animalsResponsible;
      return object;
    }, {});
  }
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
