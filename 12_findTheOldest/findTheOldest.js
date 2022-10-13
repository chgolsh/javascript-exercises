const findTheOldest = function(people) {
    return people.reduce(function(prevPerson, currPerson) {
        if (prevPerson.name === undefined) return currPerson;

        let year = new Date().getFullYear()
        let prevPersonAge = (prevPerson.yearOfDeath || year) - prevPerson.yearOfBirth;
        let currPersonAge = (currPerson.yearOfDeath || year) - currPerson.yearOfBirth;
        return prevPersonAge > currPersonAge ? prevPerson : currPerson;
    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
