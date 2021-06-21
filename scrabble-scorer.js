// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
//TODO: Figure out function returns and calling
//TODO: case insensative

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};



function oldScrabbleScorer() {
  word = "word";  
  word = word.toUpperCase(); 
  let letterPoints = "";
 for (let i = 0; i < word.length; i++) {
 	  for (const pointValue in oldPointStructure) {
 		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${parseInt(pointValue)}\n`
      }
	  }
  }
   return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  let wordInput = input.question("Let's play Scrabble! \n Enter a word to score: ");
  return wordInput;
};


 
let simpleScore = simpleScoreFun(); 
 
function simpleScoreFun() {
//TODO: make word case insensative. Right now it is lower case
word = "word";
word = word.toLowerCase(); 
let simpleScored;
let scoreInc = 0;

//scoring board <simple>
  for (let i = 0; i < word.length; i++) {
      scoreInc += 1
      
    }
    simpleScored += `The word ${word} is worth ${scoreInc} points.`
  return simpleScored;
  }

//variables for vowel scorer
let standardScore = 0;
let vowelBonusScore = 0;
let bonusTally = 0;
const vowelBonus = ['A', 'E', 'I', 'O', 'U'];

function vowelBonusFun() {
  
  //TODO: case insensative
  word = "word";
  word = word.toUpperCase(); 

  for (let i = 0; i < word.length; i++) {
  //if vowel
  if (word[i] === vowelBonus[0] || word[i] === vowelBonus[1] || word[i] === vowelBonus[2]|| word[i] === vowelBonus[3] || word[i] === vowelBonus[4]) {
    bonusTally = bonusTally + 1;
    }else{
    standardScore = standardScore + 1;
      } 
    }
  let bonuses = (bonusTally * 3);
  vowelBonusScore += `Your score is ${standardScore + bonuses}`;
  return vowelBonusScore;
  }
let scrabbleScore;


// [simpleScoreFun(), vowelBonusFun(), oldScrabbleScorer()]
const scoringAlgorithms = [simpleScoreFun(), vowelBonusFun(), oldScrabbleScorer()];

function scorerPrompt() {

let simpleObject = {
           name: "Simple Score",
    description: "Each letter is worth 1 point.",
  functiontype: "A function with a parameter for user input that returns a score.",
    simpleScoreFun: scoringAlgorithms[0]
}

 let vowelObject = {
           name: "Bonus Vowels",
    description: "Vowels are worth 3 pts. Constanants are worth 1 pnt.",
  functiontype:   "A function that returns a score based on the number of vowels and constanants.",
  vowelBonusFun: scoringAlgorithms[1]

}
  let oldObject = {
           name: "Scrabble",
    description: "The traditional scoring algorithm.",
    functiontype: "Uses the oldScrabbleScorer() function to determine the score for a given word.", 
  oldScrabbleScorer: scoringAlgorithms[2]

}

let userSelect = input.question(`Select 0 for ${simpleObject.name}, 1 for ${vowelObject.name}.  Or 2 for ${oldObject.name}.  `);

if (userSelect == "0") {
  console.log(simpleObject.name);
  console.log(simpleObject.description);
  console.log(simpleObject.simpleScoreFun);
}
if (userSelect == "1") {
  console.log(vowelObject.name);
console.log(vowelObject.description);
console.log(vowelObject.vowelBonusFun);
}

if (userSelect == "2") {
  console.log(oldObject.name);
  console.log(oldObject.description);
  console.log(oldObject.oldScrabbleScorer);

}

}

let newPointStructure={};

//TODO: 2.C.4
function transform() {
  
  for (let keyPoints in oldPointStructure){
  

for (let letterVal of oldPointStructure[keyPoints]){

  letterVal = letterVal.toLowerCase();
  keyPoints = parseInt(keyPoints);
  newPointStructure[letterVal] = keyPoints;

}
}
console.log(newPointStructure);
userSelect = input.question("Enter a letter  ");
userSelect = userSelect.toLowerCase();
console.log(`${userSelect} is worth ${newPointStructure[userSelect]} points `);
};



function runProgram() {
   initialPrompt();
   scorerPrompt();
   transform();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};