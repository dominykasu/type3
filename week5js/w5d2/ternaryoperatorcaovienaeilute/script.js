const year = 2020;
// year === 2021 ? console.log("this year") : console.log("prev year");
const currentYear = year === 2021 ? "this year" : "prev year";
console.log(currentYear);
////
const myName = "Dom";
const isMyName = myName === "Dom" ? "yes, your name correct" : "not your name";
console.log(isMyName);
///
const clientAge = 20;
const legalAge = 18;

const canDrive = clientAge >= legalAge ? "yes you can drive" : "cant drive";
console.log(canDrive);
////

const clientAge1 = -1;
const legalAge1 = 18;

let canDrive1 = clientAge1 < 0 || clientAge1 > 120 ? "invalid age" : canDrive2 = clientAge1 >= legalAge1 ? "yes you can drive" : "cant drive";
console.log(canDrive1);

//

const phone = "aiPhone";
const isIphoneUser = phone === 'iPhone';
console.log(isIphoneUser);