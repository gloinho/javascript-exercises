const findTheOldest = function(group) {
    let oldest = group.reduce((old, person) => {
        if(!person.yearOfDeath){person.yearOfDeath = (new Date).getFullYear()};
        let seeAge = person.yearOfDeath-person.yearOfBirth
        if (old < seeAge) {old = seeAge};
        return old
    }, 0)
    let whoIsOldest = group.filter(person => (person.yearOfDeath-person.yearOfBirth) === oldest)[0]
    return whoIsOldest
};


// Do not edit below this line
module.exports = findTheOldest;
