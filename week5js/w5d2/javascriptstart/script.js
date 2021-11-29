console.log("hello");
let name = "Andrius"
console.log(name);
//string = "...."
//number = 8
//boolean = true or false
//object = { ...  }  (parameters inside)
// Array = [ 5, "zodis", { .. } ]

let text = "BDHR L SHA BRA";
console.log(text);
console.log(text [5] + text [9] + text [0] + text [9] + text [7]);
// prints LABAS
let num1 = 15;
let num2 = 3;
let num3 = 13;

console.log((num1 - num2) * num3);
//156

let text1= "absdeafghijklmnoprstuvz";
console.log(text1.length);
//teksto ilgis = 22

let str1 = "aaaa";
let str2 = "bbb";
let str3 = "cc";
console.log ((str1+str2+str3).length)
//stringu teksto suma = 9
let sumOfLengths = str1 + str2 + str3;
console.log (sumOfLengths.length);
//stringu teksto suma = 9

const first = 100
const second = 30
const third = 2
const fourth = 5

const result = (first - second) / third * fourth
console.log(result);
// 175

// Declare a variable with value 99
let myNum = 99
// do something with myNum so it value would be 33 and log it
myNum = myNum / 3;
console.log(myNum);
// do something with myNum so it value would be 30 and log it
myNum = myNum -3;
console.log(myNum);
// do something with myNum so it value would be "52 kortos yra kaladej"
myNum = "52 kortos yra kaladej";
console.log(myNum);

const str = "ABC DEF GH"
const numb1 = 1
const numb2 = 2
const numb3 = 3
let resultValue
// make result value to be "A1B2G3"
resultValue = str[0]+numb1+str[1]+numb2+str[8]+numb3;
console.log(resultValue);

//make result value to be "trains are cool, so i like trains"

const quote1 = "trains are cool"
const quote2 = "i like trains"

console.log(quote1 + ", so " +quote2);

// make result to be "B is the second letter of alphabet"

const forstOrSecond = ['first', 'second']
const valueOne = "A is the"
const valueTwo = "letter of alphabet"



let result1 = valueTwo[15]+valueOne.substring(1,8) + " " +forstOrSecond[1] + " "+valueTwo;
console.log(result1)

//make rasult to be "this string length is ___"
const string = "this string length is"
let result2 = string + " "+ string.length;
console.log(result2);

//get last object of array, and divide it by 2
const arr = [5, 12, 18, 30, 40]
let result3 = arr[4] / 2;
console.log(result3);
let result4 = arr[arr.length-1] /2;
console.log(result4);

// change value of 'pienas' to 'jogurtas
const shoppingList = ['duona', 'ledai', 'maisto katinui', 'bananai', 'gyvenimo prasme', 'pienas', 'sokoladas']
shoppingList[5] = "jogurtas";
console.log(shoppingList);

// make result to be "ohh baby its cold outside"
const randomWords = [0, 20, "ohh", [78, "baby"], ['its cold', 11, 22], 'outside']
let result5 = randomWords[2] + randomWords[3][1] +randomWords[4][0] +randomWords[5]
console.log(result5);

// create variables, you name, you age, city you live in
// append those variables to "Hello, my name is ___ i am already ___ years old and i do live in ___"

let myName = "Dom";
let myAge = 20;
let myCity = "Vilnius"

let result0 = `Hello, my name is ${myName} i am already ${myAge} years old and i do live in ${myCity}.`
console.log(result0);


let numbers = [1, 5, 2, 52, 88, 4]
let streetName = "Kestučio gatve"
// replace streetName to be "Kestucio"
// create new variable to be "Kestucio 52-4" using back ticks and numbers from array
// create new variable to have last symbol of before created variable multiplied by fourth number from numbers array
streetName = "kestucio";
// let newStreet = `${streetName} 52-4`;
let newStreet = `${streetName} ${numbers[3]} ${numbers[5]}`;
console.log(newStreet);

let lastSymbol1 = newStreet[newStreet.length-1] * numbers[3];

console.log(lastSymbol1);

const arr1 = [10, "pienas", "ABC", 20, 44]
// create new variable and make it value to be "Ai20" using elements from array and back ticks
// and add last element from array multiplied by first array element
let newVar = `${arr1[2][0]}${arr1[1][1]}${arr1[3]}` + arr1[arr1.length-1] * arr1[0];
console.log(newVar);

// naudojamas tik array viduje -- variable.pop() <- pasiima paskutine reiksme visam laikui
//remove last element from array, add it to result string, console log both of them

const arr3 = ['zuvis', 'zvejyba', 'ezeras', 'meduolis']
let result6 = "Mmmmm koks velniskai skanus "

// let lastElement = arr3.pop();
result6 = result6 + arr3.pop();

console.log(arr3);
console.log(result6);

// naudojamas tik array viduje -- variable.shift() <- pasiima pirma reiksme visam laikui

// //return right type of values to their arrays
//
// const arrayWithNumbers = [1, 5, 9, 6, 'sun']
// const arrayWithString = [5, 'grass', 'nature']
// // let stringArray= arrayWithString + arrayWithNumbers.pop();
// // let numberArray= arrayWithNumbers + arrayWithString.shift();
// // console.log(stringArray);
// // console.log(numberArray);
// let onlyNumbers = arrayWithNumbers;
// let onlyStrings = arrayWithString;
//
// let stringArray= onlyStrings + onlyNumbers.pop();
// let numberArray= onlyNumbers + onlyStrings.shift();
// console.log(stringArray);
// console.log(numberArray);



const arrayWithNumbers = [1, 5, 9, 6, 'sun']
const arrayWithString = [5, 'grass', 'nature']
const sun = arrayWithNumbers.pop()
const num = arrayWithString.shift()
arrayWithString[2] = sun
arrayWithNumbers[4] = num
console.log(arrayWithNumbers, arrayWithString)


// push adds item to start
//add 3 new products to shopping list array
const shoppingList2 = ['tomatoe', 'milk'];
shoppingList2.push('a','b', 'c')

////////////////////////////////
//remove first and last values from array1 and add them to empty array
let array1 = ['first value', 2, 6, 4, 7, 'second value' ]
let emptyArray = []
emptyArray.push(array1.pop(), array1.shift())

////////////////////////////////

//add arrayTwo to begining of arrayOne, console log value from arrayTwo
let arrayOne = [5, 8, "anything", [5, 88]]
let arrayTwo = [879, 'get this string']
arrayOne.unshift(arrayTwo)
console.log(arrayOne);