const ar = [5, 8, 4, 567, 8, 87, 5, 68, 28]
// what if you want to multiply by 10
// arr[0] *=10
// arr[1] *=10
//     (ciklo vidus -- ... ; ciklo salyga ; )

// for (let i = 0 ; i < arr.length; i++) {
for (let i = 0 ; i < ar.length; i++) {
    ar[i]
    console.log(ar[i] * 10)
}

const cycle = [2,4,6,8,9,123,345,36,734,35]

for (let i = 0; i < 10; i++) {
    console.log(cycle[i])
}
// create for loop with 30 cycles, on each iteration check if
// for loop index is more than 20 if yes, console log "cycle index is (CYCLE ID)"

for (let i = 0; i < 30; i++) {
    if (i > 20) {
        console.log(`cycle index is ${i}`)
    }
}

// go through array with for loop and flip booleans to opposite value
let arrayOfBooleans = [true, false, false, true, true, true, false]

for (let i = 0; i < arrayOfBooleans.length; i++) {
arrayOfBooleans[i] = !arrayOfBooleans[i]
    console.log(arrayOfBooleans)
}

// goe through array with for loop, if string is 'black mamba' console log
// "(STRING VALUE) is (INDEX) in array, and is one of most poisonous snakes in the world"



let getIndex = ['first', 'second', 'third', 'black mamba', 'fourth', 'fifth']

for (let i = 0; i < getIndex.length; i++) {
    // console.log( getIndex[i])

 if (getIndex[i] === 'black mamba') {
     console.log (`${getIndex[i]} is ${[i]} in array, and is one of most poisonous snakes in the world`)
 }
}

/////////////////////////////////////////



// create a functions which accepts array data as an argument,
// loops over all items in array and console logs each of them



let arrayOfStrings = ['Labas', 'vakaras', 'ponios', 'ir', 'ponai']

function logItems (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }


}
logItems (arrayOfStrings)
logItems([345,6456,777,466,456])

//////////////////////////////////////////////////////



// in function loop over numbers in array multiply each by 3
// console log answer



let arrayOfNumbers = [1, 2, 3, 4, 5, 6,7,8,9]

function multi() {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        console.log(arrayOfNumbers[i] *3)
    }
}

multi()

// create function do this in it:
// with single for loop removes items from wagonsWIthCoal
// and append them to wagonsOfGasoline after this done
// check if wagonsWithCoal has any items, if not change coalCargo boolean to opposite
// do the same with gasolineCargo key
// console log modified object



let freightTrain = {
    wagonsWithCoal: [1,2,3,4,5],
    coalCargo: true,
    wagonsOfGasoline: [],
    gasolineCargo: false
}

function coal () {
    for (let i = 0; i < freightTrain.wagonsWithCoal.length; i++) {
        freightTrain.wagonsOfGasoline[i] = freightTrain.wagonsWithCoal[i]
    }
    freightTrain.wagonsWithCoal = []
    if(freightTrain.wagonsWithCoal.length === 0) {
        freightTrain.coalCargo = !freightTrain.coalCargo
    }
    if(freightTrain.wagonsOfGasoline.length === 0) {
        freightTrain.gasolineCargo = !freightTrain.gasolineCargo
    }
    console.log(freightTrain)
}
coal()
// function change() {
//     //pasidedu ilgi kuris nekinta kol dalykai shiftinasi
//     // const dataLen = freightTrain.wagonsWithCoal
//
//     // for (let i = 0; i < dataLen; i++) {
//     for (let i = 0; i < freightTrain.wagonsWithCoal.length; i++) {
//        // freightTrain.wagonsOfGasoline.push( freightTrain.wagonsWithCoal.shift())
//         // galima naudoti su i < freightTrain.wagonsWithCoal.length , kai turi dalyka pacioje
//           freightTrain.wagonsOfGasoline[i]= freightTrain.wagonsWithCoal[i]
//
//
//     } if (freightTrain.wagonsOfGasoline < 1) {
// freightTrain.gasolineCargo = !freightTrain.coalCargo
//     } if (freightTrain.wagonsWithCoal < 1) {
//         freightTrain.coalCargo = !freightTrain.gasolineCargo
//     }
//     console.log (freightTrain)
// }
//
// change()
// ?????????????????
//////////////////////////////////////////////////



// crete a function which takes textObject.arrayWithWords as an argument
// goe through array with words using for loop
// take first letter of each word and add to aWord key in textObject
// console log aWord key after all is done



let textObject = {
    arrayWithWords: ['firstWord', 'ipad', 'snow is snowing', 'hamburger'],
    aWord: ''
}

function firstLet (arr){
    for (let i = 0; i < arr.length; i++) {
  // console.log(textObject.arrayWithWords[i])
  //       console.log( textObject.arrayWithWords[i][0])
        textObject.aWord += arr[i][0]

    }
    console.log(textObject)
}


firstLet(textObject.arrayWithWords)

////
// Create a function that takes in a word and determines
// whether or not it is plural. A plural word is one that ends in "s".

function isPlural(word) {

    if (word[word.length-1] === "s") {
        console.log(`${word} word ends with s`)
    }
}

isPlural("changes")
isPlural("change")
isPlural("dudes")
isPlural("magic")



/////////////////////////////////////////////////



// Create a function that takes a string (a random name).
// If the last character of the name is an "n", return true, otherwise return false.

function isLastCharacterN(word) {
    // console.log (word[word.length-1])
    return word[word.length-1] === "n"
}

console.log(isLastCharacterN("Aiden"))
console.log(isLastCharacterN("Piet"))
console.log(isLastCharacterN("Bert"))
console.log(isLastCharacterN("Dean"))



//////////////////////////////////////////////



// A typical car can hold four passengers and one driver,
// allowing five people to travel around. Given n number of people,
// return how many cars are needed to seat everyone comfortably.

// function carsNeeded(people) {
//
// const carsNeed = Math.ceil(people/5)
//     console.log(carsNeed)
// }
//
// carsNeeded(5)
// carsNeeded(11)
// carsNeeded(0)



///////////////////////////////////////////////



// Create a function that takes an array and a string as arguments and return the index of the string.

function findIndex(arr, str) {
    console.log(arr.indexOf(str))

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            console.log(i)
        }
    }
}

findIndex(["hi", "edabit", "fgh", "abc"], "fgh")
findIndex(["Red", "blue", "Blue", "Green"], "blue")
findIndex(["a", "g", "y", "d"], "d")
findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")

//////////////////////////////////////////////



// Create a function to concatenate two integer arrays.

function concat(ar1, ar2 ) {
   const arr = ar1.concat(ar2)
    console.log(arr)
}

concat([1, 3, 5], [2, 6, 8])
concat([7, 8], [10, 9, 1, 1, 2])
concat([4, 5, 1], [3, 3, 3, 3, 3])

// arba const arrBoth = [...arr1, ...arr2]

//////////////////////////////////////////////////



// Write a function to check if an array contains a particular number.

function check(arr, numb) {
const findNumb = arr.includes(numb)
    console.log(findNumb)
}

check([1, 2, 3, 4, 5], 3)
check([1, 1, 2, 1, 1], 3)
check([5, 5, 5, 6], 5)
check([], 5)



///////////////////////////////////////////////



// Create a function that searches for the index of a given item in an array.
// If the item is present, it should return the index, otherwise, it should return -1.


function search(arr,numb){
    const findNumb = arr.indexOf(numb)
    console.log(findNumb)
}
search([1, 2, 3, 4], 3)
search([2, 4, 6, 8, 10], 8)
search([1, 3, 5, 7, 9], 11)



/////////////////////////////////////////////////



// Create a function that returns true if a string contains any spaces.

function hasSpaces(str){
    const spaces = str.indexOf(' ') !== -1
    console.log(spaces)
}
// galima naudoti includes
hasSpaces("hello")
hasSpaces("hello, world")
hasSpaces(" ")
hasSpaces("")
hasSpaces(",./!@#")



///////////////////////////////////////////////////////



// Given two arrays, which represent two sandwiches, return whether
// both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

function hasSameBread(arr1, arr2) {
    console.log((arr1[arr1.length-1] && arr1[0]) === (arr2[arr2.length-1] && arr2[0]))

}

hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
)



hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
)



hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
)



//////////////////////////////////////////////////////



/*



Create a function that takes an object
as an argument and returns a string with facts about
the city. The city facts will need to be extracted
from the object's three properties:



name
population
continent



The string should have the following format:
X has a population of Y and is
situated in Z (where X is the city name,
Y is the population and Z is the continent the city is situated in).



 */


function cityFacts(facts) {
    console.log(`${facts.name} has a population of ${facts.population} and is
situated in ${facts.continent}`)
}

cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
})



cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
})



//////////////////////////////////////////////////////



//Creates a function that takes a string and returns the concatenated first and last character.

function firstLast(str){
    concat(str[0], str[str.length-1])
}

firstLast("ganesh")
firstLast("kali")
firstLast("shiva")
firstLast("vishnu")
firstLast("durga")