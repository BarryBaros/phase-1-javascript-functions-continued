// code your solution here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun()); // Output: This Saturday, I want to roller-skate!
console.log(saturdayFun("go swimming")); // Output: This Saturday, I want to swimming!


let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
console.log(mondayWork());
console.log(mondayWork("continue with my SE studies."));



function wrapAdjective(star = "*") {
    return function(vanis="special") {
        return `You are ${star}${vanis}${star}!`
    }
}
// Call wrapAdjective and store the returned function
const wrappedFunction = wrapAdjective("*");

// Call the returned function with a parameter
const result = wrappedFunction();

console.log(result); // Output: You are *amazing*!
