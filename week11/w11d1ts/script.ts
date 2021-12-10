//Variables
let userName: string = "Andrius"
let age:number = 5
let bul :boolean = false
let arr:number[] = [7,7,4,3,2]
let random:any = "asdasd"
//arrays
const arr2:any[] = [true,"asd",5]
const arr3:[boolean,string,number] = [true,"asd",5]
const arr4:string[] = ["asd", "342", "2313fss"]
//tuple
const arr5:[boolean,string,number,number] = [true,"asd",5,6]
//union
const un:number | string = 555
const un1:number | string = "555"
const un2:number | string | number[]= [5,7,8]


// create 4 variables with different types

let number:number = 101
let stringArr:string[] = ["3","623","66","32","1"]
let numberArr:number[] = []

let randomVar:any[] = ["asd", 5, true]

// check if variable with number type is moret than 100
// if yes change the number to 200

if (number > 100) {
    number = 200
    console.log(number)
}

// create array with string values
// go through array and append string values lengths to newly created array with numbers

stringArr.forEach(x => {
numberArr.push(x.length)
 })
console.log(numberArr)

// create union variable to be number \ string
let unionNumString: number | string = 5
// make its value to be your name
unionNumString = "dom"
console.log(unionNumString)
// in second line change that variable value to length of prevous value
unionNumString = unionNumString.length
console.log(unionNumString)


//Objects

type userType = {
    //readonly keist negalima
   readonly name:string,
    age:number,
    hasCat:boolean,
    //city? reiskia gali but arba ne
    city?: number|string
}
const user1: userType = {
    name:"andrius",
    age: 28,
    hasCat:true
}
const user2: userType = {
    name:"ragana",
    age: 22,
    hasCat:false
}

// create object with name, age, city, mobile, array of interests (strings), height, hair color
// make name and age to be read only
// make hair color to be optional



type InformationType = {
    readonly name:string
    readonly age:number
    city:string
    mobile:number
    interests:string[]
    height:number
    hairColor?:string

}

const information: InformationType = {
    name:"andrius",
    age: 28,
    city:"palanga",
    mobile:333666,
    interests:["swimming","running","eating"],
    height:179,
    hairColor:"blue"
}

// create variable with array of numbers, add 5 numbers to it
let numbersVar:number[] = [4,77,89]
numbersVar.push(33,44,55,66,77)
console.log(numbersVar)
// check if you object with user age is more than 18
console.log(information.age > 18)
if (information.age > 18) {

    // information.age = numbersVar[1]
}
// if yes get second number form array with numbers and set it as user age
// create 3 variables with string types, make values to bie various hobbies
let sleeping:string = "i like swimming"
let flying:string = "i like flying"
let dreaming:string = "i like dreaming"
// push newly created variables values to user object interests array
information.interests.push(sleeping,flying,dreaming)
console.log(information.interests)
// change user height to 180
information.height = 180
console.log(information.height)

//string comes back from function
function sayHello (name:string):string{
    return name
}
//cant do that, because name:string
// sayHello(5)

//void nieko negrazina
function count(num1:number, num2:number):void {
    console.log(num1+num2)
}

interface Some {
    text:string,
    num:number,
    some:boolean
}
const thing:Some = {
    text:"lala",
    num: 54,
    some:false
}

//interface and type difference =  interface doesnt have equal sign, type we can assign value


// create interface for object with carModel, carYear, gasolineConsumption, isDiesel
// create object with random car info according to earlier created interface
// create function which takes car object as an argument and returns string as a value
// in function check if car isDiesel
// if yes return car model and carYear combined in string
// if no return car gasolineConsumption combined with isDiesel in string

interface CarType {
    carModel:string,
    carYear:number,
    gasConsumption:string,
    isDiesel:boolean
}
let carInfo:CarType = {
    carModel:"suzuki",
    carYear:2025,
    gasConsumption:"20l/km",
    isDiesel:true
}

function returnString(carInfo:any): string {
    if (carInfo.isDiesel === true) {
        return carInfo.carModel + carInfo.carYear
    } else {
        return `${carInfo.gasConsumption} ${carInfo.isDiesel}`
    }
}
console.log(returnString(carInfo))
/////////////////////////////////////////////////////////////////////////////



const numbers:(string|number|boolean)[] = [1, 3.22, 6, -1,"aa", true]

////////////////////////////////


let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; // Not possible.
// myMultiply(); // Not possible.
function multiply(value1: number, value2: number) {
    return value1 * value2;
}
myMultiply = multiply;

console.log(myMultiply(5, 2));

////////////////////////////////

let add = (a:number,b:number) => a*b
console.log(add(5,6))


/////////////////////////////////////


const scientist: { firstName: string, experience: number } = { firstName: 'Robert', experience: 9000 };
const { firstName, experience } = scientist;

console.log(firstName, experience);