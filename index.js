const { stringContaining } = require("expect");

// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];


function findMatching(drivers, string) {
    const result = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase());
    return result;
}

function fuzzyMatch(drivers, string) {
    const answer = drivers.filter(driversName => driversName.startsWith(string))
    return answer;
}

function matchName(drivers, name){
    return drivers.filter(function(hometown){
      return hometown.name === name
    })
  }