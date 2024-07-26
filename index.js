function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Testing the function
console.log(saturdayFun()); 
console.log(saturdayFun("dance"));

function mondayWork(activity ="go to the office") {
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork());
console.log(mondayWork("go to the gym"));

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}