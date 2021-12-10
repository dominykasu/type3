"use strict";
//Variables
let userName = "Andrius";
let age = 5;
let bul = false;
let arr = [7, 7, 4, 3, 2];
let random = "asdasd";
//arrays
const arr2 = [true, "asd", 5];
const arr3 = [true, "asd", 5];
const arr4 = ["asd", "342", "2313fss"];
//tuple
const arr5 = [true, "asd", 5, 6];
//union
const un = 555;
const un1 = "555";
const un2 = [5, 7, 8];
// create 4 variables with different types
let number = 101;
let stringArr = ["3", "623", "66", "32", "1"];
let numberArr = [];
let randomVar = ["asd", 5, true];
// check if variable with number type is moret than 100
// if yes change the number to 200
if (number > 100) {
    number = 200;
    console.log(number);
}
// create array with string values
// go through array and append string values lengths to newly created array with numbers
stringArr.forEach(x => {
    numberArr.push(x.length);
});
console.log(numberArr);
// create union variable to be number \ string
let unionNumString = 5;
// make its value to be your name
unionNumString = "dom";
console.log(unionNumString);
// in second line change that variable value to length of prevous value
unionNumString = unionNumString.length;
console.log(unionNumString);
const user1 = {
    name: "andrius",
    age: 28,
    hasCat: true
};
const user2 = {
    name: "ragana",
    age: 22,
    hasCat: false
};
const information = {
    name: "andrius",
    age: 28,
    city: "palanga",
    mobile: 333666,
    interests: ["swimming", "running", "eating"],
    height: 179,
    hairColor: "blue"
};
// create variable with array of numbers, add 5 numbers to it
let numbersVar = [4, 77, 89];
numbersVar.push(33, 44, 55, 66, 77);
console.log(numbersVar);
// check if you object with user age is more than 18
console.log(information.age > 18);
if (information.age > 18) {
    // information.age = numbersVar[1]
}
// if yes get second number form array with numbers and set it as user age
// create 3 variables with string types, make values to bie various hobbies
let sleeping = "i like swimming";
let flying = "i like flying";
let dreaming = "i like dreaming";
// push newly created variables values to user object interests array
information.interests.push(sleeping, flying, dreaming);
console.log(information.interests);
// change user height to 180
information.height = 180;
console.log(information.height);
//string comes back from function
function sayHello(name) {
    return name;
}
//cant do that, because name:string
// sayHello(5)
//void nieko negrazina
function count(num1, num2) {
    console.log(num1 + num2);
}
const thing = {
    text: "lala",
    num: 54,
    some: false
};
let carInfo = {
    carModel: "suzuki",
    carYear: 2025,
    gasConsumption: "20l/km",
    isDiesel: true
};
function returnString(carInfo) {
    if (carInfo.isDiesel === true) {
        return carInfo.carModel + carInfo.carYear;
    }
    else {
        return `${carInfo.gasConsumption} ${carInfo.isDiesel}`;
    }
}
console.log(returnString(carInfo));
/////////////////////////////////////////////////////////////////////////////
const numbers = [1, 3.22, 6, -1, "aa", true];
////////////////////////////////
let myMultiply;
// myMultiply = sayHello; // Not possible.
// myMultiply(); // Not possible.
function multiply(value1, value2) {
    return value1 * value2;
}
myMultiply = multiply;
console.log(myMultiply(5, 2));
////////////////////////////////
let add = (a, b) => a * b;
console.log(add(5, 6));
/////////////////////////////////////
const scientist = { firstName: 'Robert', experience: 9000 };
const { firstName, experience } = scientist;
console.log(firstName, experience);
