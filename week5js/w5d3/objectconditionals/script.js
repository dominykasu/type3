let person = {
    name: "Andrius",
    age: 20,
    liveIn: {
        city:"Vilnius"
    },
    hobbies: ["running", "fishing", "looking"]
        }
console.log(person.name);
console.log(person.liveIn.city);
console.log(person.hobbies[2]);

// create an object whith these keys:
// name, surname, age, school, country > region > city, booksRed(array with books you red)


let me = {
 name: "Dom",
    surname:"Use",
    Age:20,
    School:"Zemyna",
    liveIin: {
        country:"Lithuania",
        region:"Vilnius region",
        city:"Vilnius city"
        },
    booksRead:["book1","book2","book3","book4"]
}



// log length of your name
// log sum of you name and school
// create variable and make its value to be you age and city added together
// create new variable and make it value to be first book from booksRed array

console.log(me.name.length);
console.log(me.name + me.School);
let ageCity= me.Age + me.liveIin.city;
console.log(ageCity);
let firstBook = me.booksRead[0];
console.log(firstBook);


let name="Tomas";

if (name==="Tomas"){
    console.log("Name is Tomas")
}
 else {
     console.log ("name value if not tomas")
}

if (name.length === 5){
    console.log("length is right")
}
else {
    console.log ("length is wrong")
}

////

let person1 = {
    personName: "John",
    livesIn: "America",
    hasKids: 3,
    married: true
}
// check if person name is Myke, if not console log "this person name is (TRUE NAME)"
// check if person lives in Amercija, if yes console log "(Name) lives in amerca and has (amount of kids)"
// check if amount of kids is more than 5, if no console log "we need (subtract hasKids from 5) kids to reach 5"
// check if person is married if yes log "(Name) is married lives in (livesIn) and has (hasKids) kids"

if (person1.personName === "Myke") {
    console.log("Name is Myke")
} else {
    console.log(`persons real name is ${person1.personName}`)
}

if (person1.livesIn === "America") {
    console.log (`${person1.personName} lives in america and has ${person1.hasKids} kids`)
}

if (person1.hasKids > 5) {
    console.log("person has more than 5 kids")
} else {
    console.log(`we need ${5 - person1.hasKids} kids to reach 5`)
}
// automatiskai true skaito
if (person1.married) {
    console.log(`${person1.personName} is married lives in ${person1.livesIn} and has ${person1.hasKids} kids`)
}

// check if counter is more than 74 * 8 if yes console.log length of firstLetters array
// console log first item from arrayItems in upperCase
// console log last item from arrayItems in lowerCase
// create a new key in data object to have Boolean type
// check if newly created key is true or false if true create one more key in data object with any type

let data = {
    arrayItems: ['Zodziai ivairus', "naujas sakinys", 'sakinys be 858 skaiciu'],
    firstLetters: [],
    counter: 254 * 3
}

if (data.counter > 74 * 8) {
    console.log(data.firstLetters.length)
}
console.log(data.arrayItems[0].toUpperCase());
console.log(data.arrayItems[2].toLowerCase());
console.log(data.arrayItems[data.arrayItems.length-1].toLowerCase());
// adds boolean variable width true value to data
data.boolean = true;
console.log(data);

// === true below
if (data.boolean) {
    data.newKey = "newKey"
}
console.log(data);

// HOMEWORK:

///////////////////////////////////////////////////////



// make numbers array to have only numbers
// make words array to have only words
// move items using - .pop() .shift() - .push(arg) .unshift(arg)




    let numbers = ['first', 1, 2, 3, 4, 'last']
let words = ['word', 'any', 'word', 'world']

words.push(numbers.pop());
words.unshift(numbers.shift());
console.log(words, numbers);



///////////////////////////////////////////////////////



let data3 = {
    name: "Jerry",
    hasToys: ['teddy bear', 'ball', 'car', 'soldier'],
    yearsOld: 12,
    birthDay: true,
    totalToys: null,
    friends: {
        susana: "at grandparents",
        tommy: "on pc",
        brad: "playing football"
    }
}

if (data3.birthDay) {
    removeBear = data3.hasToys.shift();
    data3.hasToys.push("ps4");
    data3.yearsOld++;
    totalToys=data3.hasToys.length;
}
console.log(removeBear);
console.log (data3.hasToys);
console.log(data3.yearsOld);
console.log(totalToys);
console.log(Object.keys(data3.friends));


// check if Jerry is having his birthday if yes do things:
// remove teddy bear from hasToys array
// add "ps4" to end of hasToys array
// increment yearsOld by one
// make totalToys key to always show length of hasToys array
// log each of Jerry friends



///////////////////////////////////////////////////////////



// tell about && and || operators



let person3 = {
    name: "John",
    age: 120,
    alive: false,
    interest: ['swimming', 'dancing']
}

person3.name = "Jonas"
person3.age = 30
 if (person3.age < 100) {
     person3.alive=true;
 }
 // dar galima
 // person3.alive = person3.age < 100
 if (person3.alive) {
     person3.interest.unshift("enjoying life");
 }
console.log(person3);
// Change Johns name to Jonas
// Change his age to 30
// check if john is younger than 100 if yes change his alive status to true
// check if john is alive, if yes, add on more interest 'enjoying life' to array