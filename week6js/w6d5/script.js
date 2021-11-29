// Create a function that takes an array and returns the sum of all numbers in the array.

function getSumOfItems(arr) {

// let sum = arr[1] + arr[2] + arr[0]
//     console.log(sum)
// }
    ////////////////////////////////
    let sum = 0
    arr.map(x => sum += x)
    console.log(sum)
// x ATSPINDI KIEKVIENA ARR ELEMENTA
    //////////////////////////////

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        // console.log(sum)
    }
}
////////////////////////////////////


getSumOfItems([2, 7, 4])
// ➞ 13
getSumOfItems([45, 3, 0])
// ➞ 48
getSumOfItems([-2, 84, 23])
// ➞ 105



/////////////////////////////////////////////////////////



// Given a number and an object with min and max properties,
// return true if the number lies within the given range (inclusive).

function isInRange(num, prop){

        console.log(num <= prop.max && num >= prop.min)

}

isInRange(4, { min: 0, max: 5 })
// ➞ true
isInRange(4, { min: 4, max: 5 })
// ➞ true
isInRange(4, { min: 6, max: 10 })
// ➞ false
isInRange(5, { min: 5, max: 5 })
// ➞ true
//
//
//
//
// ////////////////////////////////////////////////////////////
//
//
//
// //Create a function that returns an array of booleans from a
// // given number by iterating through the number one digit
// // at a time and appending true into the array if the digit is 1 and false otherwise.
//
//
//

// function integerBoolean(str){
//     const arr = []
//
//
//     for (let i = 0; i < str.length; i++) {
//         // console.log(str[i])
//
//
//         if (str[i] === "1") {
//             arr.push(true)
//         } else {
//             arr.push(false)
//
//         }
//         console.log(arr)
//     }
//
// }



function integerBoolean(str) {
    const arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i] === "1")
    }
    console.log(arr)
}
integerBoolean("100101")
// ➞ [true, false, false, true, false, true]
integerBoolean("10")
// ➞ [true, false]
integerBoolean("001")
// ➞ [false, false, true]
//
//
//
// /////////////////////////////////////////////////////////
//
//
//
//
// // Create a function that returns the number of syllables in a
// // simple string. The string is made up of short repeated words
// // like "Lalalalalalala" (which would have 7 syllables).
//
//
//
function countSyllables(str) {
    str = str.toLowerCase()
    const startEls = str[0]+str[1]
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i] + str[i+1] === startEls) {
            counter++
        }
    }
    console.log(counter)
}


countSyllables("Hehehehehehe")
// ➞ 6
countSyllables("bobobobobobobobo")
// ➞ 8
countSyllables("NANANA")
// ➞ 3

// Create a function which returns the length of a string, WITHOUT using String.length property.
//
//
//
function length(str){
    // let count = []
    // for (let i = 0; i < str.length; i++) {
    //     //
    //     count.push(str[i])
    //
    //
    // }
    // console.log(count.length)
    const strArr = [...str]
    let counter = 0
    strArr.map(x=> counter++)
    console.log(counter)
}


length("Hello World")
//➞ 11
length("Edabit")
//➞ 6
length("wash your hands!")
//➞ 16


//
// //////////////////////////////////////////////////////////
//
//
//
// // Create a function that returns a number, based on the string provided. Here is a list of all digits (if you are non english speaker):
//
//
//
// //"one"        1
// //"two"        2
// //"three"    3
// //"four"    4
// //"five"    5
// //"six"        6
// //"seven"    7
// //"eight"    8
// //"nine"    9
// //"zero"    0
//
function word(str){
 // if ( str === "one")
 //     console.log("1")
 //    if ( str === "two")
 //        console.log("2")
 //    if ( str === "nine")
 //        console.log("9")
const arr = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    console.log(arr.indexOf(str))
        }
word("one")//➞ 1



word("two") //➞ 2



word("nine") //➞ 9
//
//
//
//
// ///////////////////////////////////////////////////////////
//
//
//
// //Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
//
function filterArray(arr) {
    // let kitas = []
    //    for (let i = 0; i < arr.length; i++) {
    //        // console.log(typeof arr[i] === "string")
    //        // kitas = arr.shift(typeof arr[i] === "string")
    //        // console.log(kitas)
    //
    //        console.log(arr)
    //    }

    const numbers = []
    arr.map(x => {
        if(Number.isInteger(x)) {
            numbers.push(x)
        }
        // ARBA
        Number.isInteger(x) ? numbers.push(x) : null
    })
    console.log(numbers)

}


filterArray([1, 2, 3, "a", "b", 4]) //➞ [1, 2, 3, 4]



filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) //➞ [0, 1729]



filterArray(["Nothing", "here"]) //➞ []
//
//
//
// ///////////////////////////////////////////////////////////
//
//
//
// // Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
//
//
//
function Go(num) {
    if(num < 1 && num >= 60) {
        let str = ""
        for (let i = 0; i < num; i++) {
            str += "-"
        }
    } else {
        console.log("Bad Number")
    }
}

Go(1) //➞ "-"



Go(5) //➞ "-----"



Go(3) //➞ "---"
//
//
//
// //////////////////////////////////////////////////////////
//
//
//
// // Create a function that adds a string ending to each member in an array.
//
//
//

function addEnding(arr, end){
    const result = arr.map(word => word+end)
    /// word yra kiekvienas array zodis
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + end
        console.log(arr)
    }
}

addEnding(["clever", "meek", "hurried", "nice"], "ly")
//➞ ["cleverly", "meekly", "hurriedly", "nicely"]



addEnding(["new", "pander", "scoop"], "er")
//➞ ["newer", "panderer", "scooper"]



addEnding(["bend", "sharpen", "mean"], "ing")
//➞ ["bending", "sharpening", "meaning"]


/////////////////////////////////////////////////////////



//Create a function to multiply all of the values in an array by the amount of values in the given array.

function multiplyByLength(arr) {
    // for (let i = 0; i < arr.length; i++) {

    const total = arr.map(x=> x * arr.length)
    console.log(total)

}

multiplyByLength([2, 3, 1, 0]) //➞ [8, 12, 4, 0]



multiplyByLength([4, 1, 1]) //➞ ([12, 3, 3])



multiplyByLength([1, 0, 3, 3, 7, 2, 1]) //➞  [7, 0, 21, 21, 49, 14, 7]



multiplyByLength([0]) //➞ ([0])



// /////////////////////////////////////////////////////////
//
//
//
// // Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
//
//
//
function countdown(num) {
    let arr = []
    for (let i = num; i >= 0; i--) {
        arr.push(i)
    }
    console.log(arr)
}

countdown(5) //➞ [5, 4, 3, 2, 1, 0]



countdown(1) //➞ [1, 0]



countdown(0) //➞ [0]
//
//
//
// ///////////////////////////////////////////////////////
//
//
//
// // Create a function that takes two arguments (item, times). The first argument (item) is the item
// // that needs repeating while the second argument (times) is the number of times the item is
// // to be repeated. Return the result in an array.
//
//
//
function repeat(item,times) {
    let total = []
    total = Array(times).fill(item)
    console.log(total)
}

repeat("edabit", 3) //➞ ["edabit", "edabit", "edabit"]



repeat(13, 5) //➞ [13, 13, 13, 13, 13]



repeat("7", 2) //➞ ["7", "7"]



repeat(0, 0) //➞ []
//
//
//
// ////////////////////////////////////////////////////
//
//
//
// //In this exercise you will have to:
//
//
//
// //Take a list of names.
// //Add "Hello" to every name.
// //Make one big string with all greetings.
// //The solution should be one string with a comma in between every "Hello (Name)".
//
//
function greetPeople(arr) {
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        let comaOne = ""
        if(i === arr.length - 1) {
            comaOne = ""
        } else {
            comaOne = ", "
        }
        // ARBA
        const coma = i === arr.length - 1 ? "" : ", "
        str += "Hello " + arr[i] + coma
    }
    console.log(str)
}

greetPeople(["Joe"]) //➞ "Hello Joe"



greetPeople(["Angela", "Joe"]) //➞ "Hello Angela, Hello Joe"



greetPeople(["Frank", "Angela", "Joe"]) //➞ "Hello Frank, Hello Angela, Hello Joe"


HOMEWORK:


// Create a function that repeats each character in a string n times.
    function repeat(word, num) {
        let result = ""
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < num; j++) {
                result += word[i]
            }
        }
        console.log(result)
    }
repeat("mice", 5) //➞ "mmmmmiiiiiccccceeeee"
repeat("hello", 3) //➞ "hhheeellllllooo"
repeat("stop", 1) //➞ "stop"

////////////////////////////////////////////////
//
// // Create a function that takes in two arrays: the array of user-typed words,
// // and the array of correctly-typed words and outputs an array containing
// // 1s (correctly-typed words) and -1s (incorrectly-typed words).
//
function correctStream(arr1, arr2) {
    const result = []
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] === arr2[i]) {
            result.push(1)
        } else {
            result.push(-1)
        }
    }
    // ARBA
    const res = arr1.map((item, index) => {
        return item === arr2[index] ? 1 : -1
    })
    console.log(res)
}
correctStream(
    ["it", "is", "find"],
    ["it", "is", "fine"]
) //➞ [1, 1, -1]
correctStream(
    ["april", "showrs", "bring", "may", "flowers"],
    ["april", "showers", "bring", "may", "flowers"]
) //➞ [1, -1, 1, 1, 1]
//
// ///////////////////////////////////////////
//
// // Create a function that filters out an array of state names into two categories based on the second parameter.
//
// // Abbreviations abb
// // Full names full
function filterStateNames(arr, second) {
    const result = []
    if(second === "abb") {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].length === 2) {
                result.push(arr[i])
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].length !== 2) {
                result.push(arr[i])
            }
        }
    }
    console.log(result)
    /////////////////////
    for (let i = 0; i < arr.length; i++) {
        if(second === "abb") {
            arr[i].length === 2 ? result.push(arr[i]) : null
        } else {
            arr[i].length !== 2 ? result.push(arr[i]) : null
        }
    }
}
filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
//➞ ["CA", "NY"]
filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
//➞ ["Arizona", "Nevada"]
filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
//➞ ["MT", "NJ", "TX", "ID", "IL"]
filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")
//➞ []
//
// //////////////////////////////////////////////////
//
// Hamming distance is the number of characters that differ between two strings.
//
//
// To illustrate:
//
// String1: "abcbba"
// String2: "abcbda"
//
// Hamming Distance: 1 - "b" vs. "d" is the only difference.
//
// Create a function that computes the hamming distance between two strings.
function hammingDistance(str1, str2) {
    let counter = 0
    for (let i = 0; i < str1.length; i++) {
        str1[i] !== str2[i] ? counter++ : null
    }
    console.log(counter)
}
hammingDistance("abcde", "bcdef")
hammingDistance("abcde", "abcde")
hammingDistance("strong", "strung")
// ////////////////////////////////////////////////////
//
// //Given a string of letters, how many capital letters are there?
function capitalLetters(str) {
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        let upper = str[i].toUpperCase()
        let original = str[i]
        if(upper === original) {
            counter++
        }
    }
    console.log(counter)
}
capitalLetters("fvLzpxmgXSDrobbgMVrc") //➞ 6
capitalLetters("JMZWCneOTFLWYwBWxyFw") //➞ 14
capitalLetters("mqeytbbjwqemcdrdsyvq") //➞ 0
//
// ///////////////////////////////////////////////////////
//
// // Create a function that will remove the letters "a", "b" and "c"
// // from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
function removeABC(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== "a" && str[i] !== "b" && str[i] !== "c") {
            result += str[i]
        }
    }
    console.log(result)
}

removeABC("This might be a bit hard") //➞ "This might e  it hrd"
removeABC("hello world!") //➞ null
removeABC("") // ➞ null
//
// /////////////////////////////////////////////////////
//
// // Create a function that takes an array of strings and returns an array with
// // only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

function numInStr(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        let hasNum = false
        for (let j = 0; j < arr[i].length; j++) {
            if( Number(arr[i][j]) ) {
                hasNum = true
            } else {
            }
        }
        if(hasNum) {
            result.push(arr[i])
        }
    }
    console.log(result)
}
numInStr(["1a", "a", "2b", "b"]) //➞ ["1a", "2b"]
numInStr(["abc", "abc10"]) //➞ ["abc10"]
numInStr(["abc", "ab10c58884", "a10bc", "bcd"]) //➞ ["ab10c", "a10bc"]
numInStr(["this is a test", "test1"]) //➞ ["test1"]
//
// /////////////////////////////////////////////////
//
// // Create a function that finds each number in the given array that is
// // greater than every number that comes after it. Your solution should return an array of the number(s) that meet these criteria.
function leader(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let wrongNumber = false
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                wrongNumber = true
            }
        }
        if(!wrongNumber) {
            result.push(arr[i])
        }
    }
    console.log(result)
}
leader([2, 3, 20, 15, 8, 3]) //➞ [20, 15, 8, 3]
// Note that 20 is greater than all the elements to it's
// right side, similarly 15 and so on.
leader([2, 3, 20, 15, 8, 25, 3]) // ➞ [25, 3]
// Note that 20 cannot be added because it is not greater than 25.
leader([1, 2, 3, 4, 5]) //➞ [5]
// 5 is technically greater than the (zero) remaining items.
leader([8, 7, 1, 2, 10, 3, 5]) //➞[10, 5]
// 10 is greater than all items to the right of it, so include.
// 3 is not greater than all items to the right of it, so exclude.
// 5 is greater than the remaining items, so include.