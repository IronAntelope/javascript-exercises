const findTheOldest = function(people) { // return oldest person only 
  return people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestAge < currentAge ? current : oldest;
  })
};

const getAge = function(birth, death) {
  if(!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]
console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
