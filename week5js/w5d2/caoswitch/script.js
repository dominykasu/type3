let car = "bmw";
if (car === "vw" || car === "audi"){
    console.log("VW grupe");
}
else if (car === "bmw" || car === "mini") {
    console.log ("bmw grupe");
}
else {
    console.log("nepriklauso");
}
////
let userInput = "morka";
switch (userInput) {
    case "morka":
    case "kopustas":
    case "agurkas":
    case "salota":
    case "svogunas":
        console.log("tai yra darzove");
        break;
    case "braske":
    case "obuolys":
    case "kriause":
    case "vysnia":
    case "tresne":
        console.log("tai yra vaisius");
        break;
}
////
const weekDay = 1;

switch (weekDay) {
    case 0:
        console.log("tai yra pirm");
        break;
    case 1:
        console.log("tai yra antr");
        break;
    case 2:
        console.log("tai yra trec");
        break;
    case 3:
        console.log("tai yra ketv");
        break;
    case 4:
        console.log("tai yra penkt");
        break;
    case 5:
        console.log("tai yra sest");
        break;
    case 6:
        console.log("tai yra sekm");
        break;
}
////

