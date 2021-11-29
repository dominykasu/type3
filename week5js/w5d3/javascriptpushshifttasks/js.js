const lyricsOne = "vejas man pasake vien tavo varda"
const lyricsTwo = "bet taves surasti as negaliu,"
const lyricsThree = "kai pilka kregzdute padangem nardo"
const lyricsFour = "jai labai pavydziu zydru keliu"



let lyricsTotalLength = lyricsOne.length +lyricsTwo.length + lyricsThree.length +lyricsFour.length;
// Make lyricsTotalLength value to be length of all lyrics strings summed up
console.log(lyricsTotalLength);



let totalLengthInString;
// Make totalLengthInString value to be " (NUMBER) is total length of lyrics"
totalLengthInString = `${lyricsTotalLength} is total length of lyrics`
console.log (totalLengthInString);



let lyricsStringAverageLength;
// make lyricsStringAverageLength value to be mathematical expression
// which counts average length of lyrics string
lyricsStringAverageLength = lyricsTotalLength /4;
console.log(lyricsStringAverageLength);



const firstLetters = [];

// Get first letter of each lyrics string, add it array, using .push() or .unshift()
// firstLetters.push(lyricsOne.charAt(0),lyricsTwo.charAt(0),lyricsThree.charAt(0),lyricsFour.charAt(0));
firstLetters.push(lyricsOne[0],lyricsTwo[0],lyricsThree[0],lyricsFour[0]);
console.log(firstLetters);


const lastLetters = []
// Get last letter of each lyrics string, add it array, using .push() or .unshift()
lastLetters.unshift(lyricsOne[lyricsOne.length-1],lyricsTwo[lyricsTwo.length-1],lyricsThree[lyricsThree.length-1],lyricsFour[lyricsFour.length-1]);

console.log(lastLetters);


const authorsNameHidden = [
    47,
    'saldytuvas',
    ['5877', [654, 'Danute'], 99, '', [88, 6547, 686, 'paprika', 1, [44, 'Neimontaite']]]
]
let authorsName = authorsNameHidden[2][1][1]+ " " + authorsNameHidden[2][4][5][1];
// Get authors name from array, make authorsName value to be string with authors name and surname
console.log(authorsName);


const numbersRandom = [0, 5, 6, 8, 1, 2, 3, 7]
const ascendingOrder = [4]
// Using .push() and .unshift() put numbers from numbersRandom to ascendingOrder in ascending order
// numbersRandom array should not be updated or edited
ascendingOrder.push (numbersRandom[1],numbersRandom[2],numbersRandom[7],numbersRandom[3]);
ascendingOrder.unshift (numbersRandom[0],numbersRandom[4],numbersRandom[5],numbersRandom[6]);

console.log(ascendingOrder);




const coldThings = ['hot', 'hot', 'cold', 'cold', 'cold']
const hotThings = ['hot', 'hot']
// get hot strings from coldThings array, using .shift() method, and .push() it to hotThings array
hotThings.push(coldThings.shift(),coldThings.shift());

console.log(hotThings);
console.log(coldThings);



const arrayVariable = [2, 0, "any", [687, 'any', true, ['Black Cat', 0, false]]]
let myCat = `arrayVariable has ${arrayVariable.length} items inside, i have ${arrayVariable[3][3].shift()}`
// remove 'Black Cat' from arr, make myCat value to be "arrayVariable has (number) items inside, i have Black Cat"

console.log(myCat);
console.log(arrayVariable);
