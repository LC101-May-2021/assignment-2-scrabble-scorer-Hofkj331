// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

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



function oldScrabbleScorer(word) {
  word = "word";
 
  word = word.toUpperCase(); 
  
  let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
  }

   console.log(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play Scrabble!");
  word = input.question("Enter a word to score: ");
   
   return word;
    
};

 
 
 let simpleScore = 0;
 
function simpleScoreFun(word) {
  word = "word";

//make word case insensative
word = word.toLowerCase(); 

//scoring board <simple>
  for (let i = 0; i < word.length; i++) {
      simpleScore += 1;
      
    }
    console.log("Word ", word, "'s Simple score is:  ", simpleScore);
  return simpleScore;

  }

let standardScore = 0;
let vowelBonusScore = 0;
let bonusTally = 0;
const vowelBonus = ['a', 'e', 'i', 'o', 'u'];


function vowelBonusFun(word) {
  word = "word";
  word = word.toLowerCase(); 

for (let i = 0; i < word.length; i++) {
 
 
 //if vowel

 if (word[i] === 'a','e','i','o','u'){
bonusTally +=1;

}else{
 //if constanant
 standardScore +=1;
}

}
bonusTally = (bonusTally * 3);
vowelBonusScore = (standardScore + bonusTally);
console.log("Word", word, "'s vowel bonus score is: ", vowelBonusScore);
return vowelBonusScore;

}


let scrabbleScore;

// [simpleScoreFun(), vowelBonusFun(), oldScrabbleScorer()]
const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   oldScrabbleScorer();
   simpleScoreFun();
   vowelBonusFun();

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