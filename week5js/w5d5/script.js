// // kuriama fukcija
// function sayName() {
//
// }
//
// function sayHello() {
//     console.log('hello')
// }
// // iskvieciu funkcija
// sayHello()
//
// // funkcija gali but kintamojo reiksme
// const fun = function () {
//
// }
//
// // hoistinimas = funkcijos keliamos i virsu. anonimines funkcijos NERA keliamos (const fun = ... )
//
// function name(){
//     console.log("Dom")
//     town()
// }
// function surname(){
//     console.log('Use')
// }
// function town() {
//     console.log('Vln')
//     surname()
// }
//
// name()
//  // galima rasyt taip
// const fun1 = () => {console.log('Vln')}
//
// const fun2 = {
//     first:"text",
//     second:"text",
//     third: () => {
//
//     }
// }
//  // kvieciu funkcija su argumentu
// function sayName(name){
//     console.log(name)
// }
// sayName("Tomas")
//
// ///
//
// function sayName1(personName, personAge){
//     console.log(personName, personAge)
// }
// sayName1("Tomas", 50)
//
// ///
//
// function info (personTown, personRoom, personMet){
//     console.log(personTown, personRoom, personMet)
// }
// info ("Vilnius", "bathroom", 50 )
// info("Kaunas", "kithchen", 20)
// info ("Pane", "bedroom", 15)
//
// ///
// function count(num) {
//     console.log(num * 77)
// }
// count(250)
// count(30)
// count(15)
//
// /// funkcija priima stringa kaip argumenta, issiaiskina ilgi ir ilgi padalina is 3
//
// function whAt (stringLenght){
//     console.log(stringLenght.length /3)
// }
// whAt("ka darai")
// whAt("nieko gero nedarao")
//
// /////
// const arr = []
//
// function addToArr(items){
//     arr.push(items)
// }
// addToArr("ka darai")
// addToArr(1)
// addToArr(true)
// console.log(arr);
//
// ////
//
// /////////////////////// FUNCTIONS ///////////////////////////////////////////
//
//
//
// // Create a function that takes two numbers as arguments and return their sum.
// addition(3, 2)
// addition(-3, -6)
// addition(7, 3)
// // num1 num2  = arguments
// function addition (num1, num2) {
//     console.log(num1 + num2)
// }
//
// ////////////////////////////////////////////////////////
//
//
//
// // Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// addition1(0)
// addition1(9)
// addition1(-3)
//  function addition1(addition) {
//     console.log(addition+1)
//      // ++addition
//  }
//
//
// ////////////////////////////////////////////////////////
//
//
//
// // Create a function that takes an array and returns the first element.
// getFirstValue([1, 2, 3])
// getFirstValue([80, 5, 100])
// getFirstValue([-500, 0, 50])
//
// function getFirstValue(firstV){
//     console.log(firstV[0])
// }
//
//
//
// /////////////////////////////////////////////////////////
// // Write a function that converts hours into seconds.
// howManySeconds(2)
// howManySeconds(10)
// howManySeconds(24)
//
// function howManySeconds (hours){
//     console.log(hours * 60 * 60)
// }
//
//
// // Write a function that returns the string "something" joined with a space " " and the given argument a.
//
//
//
// giveMeSomething("is better than nothing")
// giveMeSomething("Bob Jane")
// giveMeSomething("something")
//
// function giveMeSomething(text1){
//     console.log(`something ${text1}`)
// }
//
//
//
// /////////////////////////////////////////////////////////
//
//
//
// // Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
//
//
//
// lessThanOrEqualToZero(5)
// lessThanOrEqualToZero(0)
// lessThanOrEqualToZero(-2)
//
// function lessThanOrEqualToZero(number){
//     if (number <= 0 ) {
//         console.log("true")
//     } else {
//         console.log("false")
//     }
//
// }
//
//
//
// ////////////////////////////////////////////////////////
//
//
//
// // Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
//
//
//
// lessThan100(22, 15)
// lessThan100(83, 34)
// lessThan100(3, 77)
//
// function lessThan100(number1, number2) {
//     if (number1+number2 < 100) {
//         console.log("true")
//     } else {
//         console.log("false")
//     }
// }
//
//
// ////////////////////////////////////////////////////
//
//
//
// // Create a function that returns true when num1 is equal to num2; otherwise return false.
//
//
//
// isSameNum(4, 8)
// isSameNum(2, 2)
// isSameNum(2, "2")
//
// function isSameNum(numbe1, numbe2) {
//     if (numbe1 === numbe2) {
//         console.log("true")
//     } else {
//         console.log("false")
//     }
// }
// // console.log(numbe1 === numbe2); kazkaip
// //////////////////////////////////////////////////
//
//
//
// // Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
//
//
//
// //     wins get 3 points
// // draws get 1 point
// // losses get 0 points
//
// function footballPoints(wins, draws, losses) {
//  console.log((wins * 3) + (draws * 1) + (losses * 0))
// }
// // let results= 0
// // results += wins*3
// // results =+ draws
//
// footballPoints(3, 4, 2)
// footballPoints(5, 0, 2)
// footballPoints(0, 0, 1)
//
//



//////////////////////////////////
// from inside the function change persons name age and add one interest
// variable "person" should stay outside the function
let person = {
    name: "Andy",
    surname: 'Dandy',
    interests: ['sports', 'pc']
}
function function1() {
    person.age = 20
    person.name = "Tom"
    person.interests.push("Swimming")
}
function1();
console.log(person);
/////////////////////////////////////
let information = {
    jobTitle: "taxi driver",
    location: "London",
    marriedTo: "John",
    amountOfKids: '12'
}
function tellFortune(info) {
    // info = information;
    console.log(`You will be a ${information.jobTitle} in ${information.location}, and married to ${information.marriedTo} with ${information.amountOfKids} kids.`)
}
tellFortune(information)

// pass information object to function tellFortune as argument,
// outputs your fortune to the console like so: "You will be a X in Y, and married to Z with N kids."

//////////////////////////////////////
let data3 = ['data1', 'data2', 'data3', 'data4']
console.log(data3.length)

function checkData(arr) {
    if (arr.length > 3){
       console.log(arr.length * 8)
    }
}
checkData(data3)

// create a function which takes data as an argument, checks if data has more than 3 items
// in array, if yes multiply data array length by 8 and return the answer
///////////////////////////////
// create a function which checks if numbers (and types) are equal, return true or false
console.log(isSameNum(2,2))
console.log(isSameNum(8,21))
console.log(isSameNum(9,"9"))

function isSameNum(number1,number2) {
    if (number1 === number2) {
        console.log(true);
    } else
    {
        console.log(false)
    }

}

//////////////////////////////



//Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.


console.log(convert(1, 3))
console.log(convert(2, 0))
console.log(convert(0, 0))

function convert(hours, minutes) {
    return (hours * 3600 + minutes * 60 +" seconds")
}

///////////////////////////////////



// write function named calculateDogAge that:
// takes 1 argumentL you puppy's age.
// calculates your dog's age based on conversion rate of 1 human year to 7 dog years.
// outputs the result to console log like so "Your doggie is (AGE) years old in dog years"
// call the function three times with different sets of values - 3, 8, 12
calculateDogAge(3)
function calculateDogAge(DogAge){
    let humanYears = DogAge * 7
    console.log(`Your dogard is ${humanYears} years old in human  years`)
}


////////////////////////////////




/*
In this challenge, a farmer is asking you
to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs

The farmer has counted his animals and he gives you a subtotal
for each species. You have to implement a function that returns the total number of legs of all the animals.

Don't forget to return the result.
The order of animals passed is animals(chickens, cows, pigs).
Remember that the farmer wants to know the total number of legs and not the total number of animals.

 */

function animals(chickens, cows, pigs) {
    return (chickens*2) + (cows * 4) + (pigs *4)
}

console.log(animals(2, 3, 5))
console.log(animals(1, 2, 3))
console.log(animals(5, 2, 8))




/////////////////////////////////




//Create a function that takes three arguments prob, prize, pay
// and returns true if prob * prize > pay; otherwise return false.

// function profitableGamble(prob, prize,pay) {
//     if (prob * prize > pay) {
//         console.log("true")
//     } else {
//         console.log("false")
//     }
// }
function profitableGamble(prob, prize,pay) {
    return prob * prize > pay
}

    console.log(profitableGamble(0.2, 50, 9))
    console.log(profitableGamble(0.9, 1, 2))
    console.log(profitableGamble(0.9, 3, 2))

/////////////////////////////////////



// Create a function that takes two strings as arguments and return either true or
// false depending on whether the total number of characters in the first
// string is equal to the total number of characters in the second string.

function comp (str1, str2) {
    return str1.length === str2.length
}

console.log(comp("AB", "CD"))
console.log(comp("ABC", "DE"))
console.log(comp("hello", "edabit"))



//////////////////////////////////////



//Create a function that returns true if a string is empty and false otherwise.

function isEmpty(str) {
    return str === ""
}

console.log(isEmpty(""))
console.log(isEmpty("a"))
console.log(isEmpty(" "))




/////////////////////////////////////////



/*
A bartender is writing a simple program to determine whether
he should serve drinks to someone. He only serves drinks
to people 18 and older and when he's not on break.



Given the person's age, and whether break time is in session,
create a function which returns whether he should serve drinks.



 */

function shouldServeDrinks(age,free) {
    return age >= 18 && free
}

console.log(shouldServeDrinks(17, true))
console.log(shouldServeDrinks(19, false))
console.log(shouldServeDrinks(30, true))



////////////////////////////////////////////