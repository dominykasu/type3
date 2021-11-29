///////////////////////////////////////////////
/*
Write a function that stutters a word as if someone is
struggling to read it. The first two letters are
repeated twice with an ellipsis ...
and space after each, and then the word is pronounced with a question mark ?.
 */
function stutter(str) {
    console.log(str[0]+str[1] + "... " + str[0]+str[1] + "... " + str + " ?")
    console.log(`${str[0]+str[1]}... ${str[0]+str[1]}... ${str} ?`)
}
// stutter("incredible")
// stutter("enthusiastic")
// stutter("outstanding")

// ///////////////////////////////////////////////////////////
//
// // Luke Skywalker has family and friends. Help him remind them who is who.
// // Given a string with a name, return the relation of that person to Luke.
//
// /*
//
// Person             Relation
// Darth Vader father
// Leia            sister
// Han         brother in law
// R2D2            droid
//
//  */
function relationToLuke(name) {
    if("Darth Vader" === name) {
        console.log("Luke i am your father")
    }
    if("Leia" === name) {
        console.log("Luke i am your sister")
    }
    if("Han" === name) {
        console.log("Luke i am your brother in law")
    }
    if("R2D2" === name) {
        console.log("Luke i am your droid")
    }
}
relationToLuke("Darth Vader")
relationToLuke("Leia")
relationToLuke("Han")
//
// /////////////////////////////////////////////////////////////
//
// // Create a function that takes an array with numbers and return an array with the elements multiplied by two.
//
function getMultipliedArr(arr) {
    console.log(arr.map(num => num * 2))
}
getMultipliedArr([2, 5, 3])
getMultipliedArr([1, 86, -5])
getMultipliedArr([5, 382, 0])
//
//
// ///////////////////////////////////////////////////////////////
//
// // Create a function that takes an array of words and transforms it into an array of each word's length.
//
function wordLengths(words) {
    const arr = []
    for (let i = 0; i < words.length; i++) {
        arr.push(words[i].length)
    }
    // console.log(arr)

    console.log( words.map(word => word.length) )
}
wordLengths(["hello", "world"])
wordLengths(["Halloween", "Thanksgiving", "Christmas"])
wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])

/////


function wordLengths1(arr) {
    arr.map(item => {
        console.log(item[item.length-1])
    })
}
wordLengths1(["She", "sells", "seashells", "down", "by", "the", "seashore"])

// Create a function that returns the string "Burp"
// with the amount of "r's" determined by the input parameters of the function.

function longBurp(r){
    // $r = "r" * r
    // console.log("Bu" + "r".repeat(r) + "p")
    let word = "Bu"
    for (let i = 0; i < r; i++) {
        word += "r"

    }
    console.log(word + "p")
}

longBurp(3)
// ➞ "Burrrp"
longBurp(5)
// ➞ "Burrrrrp"
longBurp(9)
// ➞ "Burrrrrrrrrp"



// ////////////////////////////////////////////////////////
//
//
//
// // Create a function that takes a number and return an array
// // of three numbers: half of the number, quarter of the number and an eighth of the number.
//
//
function halfQuarterEighth(numb){
    let arr = []
    arr.push(numb/2)
    arr.push(numb/4)
    arr.push(numb/8)
    console.log(arr)
}
halfQuarterEighth(6)
// ➞ [3, 1.5, 0.75]
halfQuarterEighth(22)
// ➞ [11, 5.5, 2.75]
halfQuarterEighth(25)
// ➞ [12.5, 6.25, 3.125]
//
//
//
//
// ////////////////////////////////////////////////////////
//
//
//
// // For each of the 6 coffee cups I buy, I get a 7th cup free.
// // In total, I get 7 cups. Create a function that takes n cups
// // bought and return as an integer the total number of cups I would get.
//
//
//
function totalCups(cups){
    const cupIt = Math.floor(cups/6)
    console.log(cupIt + cups)

}
totalCups(6)
// ➞ 7
totalCups(12)
// ➞ 14
totalCups(213)
// ➞ 248
//
//
//
// //////////////////////////////////////////////////////////
//
//
//
// // Create a function that takes a string and returns a string with spaces in between all of the characters.
//
//
//
// function spaceMeOut(word){
//     for (let i = 0; i < word.length; i++) {
//         let spaces = ""
//         // console.log(word[i])
//         spaces = word.charAt[i] + " "
//         console.log(spaces)
//     }
// }


// function spaceMeOut(str){
//     for(let i=0; i<str.length; i++){
//         let newStr = '';
//         // newStr += str.charAt(i) + ' ';
//         newStr += str[i] + " "
//         console.log(newStr)
//     }
//
// }
function spaceMeOut(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        newStr += str[i] + " "
    }
    console.log(newStr)
}

spaceMeOut("space")
// ➞ "s p a c e"
spaceMeOut("far out")
// ➞ "f a r  o u t"
spaceMeOut("elongated musk")
// ➞ "e l o n g a t e d   m u s k"







