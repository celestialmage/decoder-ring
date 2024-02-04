// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //the purpose of this function is to check the length of the new alphabet, and to see if any letters repeat
  //if either of these checks fail, the function returns false
  function checkRepeatsAndLength(alphabet) {
    //checks if the length of the new alphabet is 26 characters, if it is, check for repeats. if not, return false
    if (alphabet.split("").length === 26) {
      //defines a new array for checking values
      const checkArray = [];

      //splits the new alphabet into an array of single characters
      alphabet = alphabet.split("");

      //iterates throughout the new alphabet and checks previous letters against the current one, if any of the old letters match the index, returns false
      for (let i = 0; i < alphabet.length; i++) {
        if (!checkArray.includes(alphabet[i])) {
          checkArray.push(alphabet[i]);
        } else {
          return false;
        }
      }
    }
    //if the new alphabet is not 26 characters, returns false
    else {
      return false;
    }

    //if the function made it through all the previous checks without incident, returns true
    return true;
  }

  function translateCipher(alphabet, encode) {
    const resultAlphabet = {};
    const realAlphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let alphabetOne = [];
    let alphabetTwo = [];

    //if encode is true, the original alphabet is the key and the new alphabet is the values
    if (encode) {
      alphabetOne = realAlphabet;
      alphabetTwo = alphabet.split("");
    }
    //if encode is false, the new alphabet is the key and the original alphabet the values;
    else {
      alphabetOne = alphabet.split("");
      alphabetTwo = realAlphabet;
    }

    for (let i = 0; i < alphabetOne.length; i++) {
      resultAlphabet[alphabetOne[i]] = alphabetTwo[i];
    }

    return resultAlphabet;
  }

  function substitution(input, alphabet = "", encode = true) {
    // your solution code here
    //create a helper function that checks whether or not any of the letters in the substitution alphabet repeat, and if the new alphabet is 26 characters long;
    const checksPass = checkRepeatsAndLength(alphabet);

    if (checksPass) {
      //create a helper function that translates the input alphabet into an object
      const cipher = translateCipher(alphabet, encode);
      //create an empty array that will have the translated characters pushed
      const result = [];

      //split the input into an array and assign it to a new variable
      const splitInput = input.toLowerCase().split("");

      //iterate throughout the input to translate the message
      for (let i = 0; i < input.length; i++) {
        //if the current character is not a space, translate it into the new alphabet and push it to the result array
        if (splitInput[i] != " ") {
          result.push(cipher[splitInput[i]]);
        }

        //otherwise, simply push a space
        else {
          result.push(" ");
        }
      }

      //return the resulting string
      return result.join("");
    }
    //if the new alphabet failed the tests, return false
    else {
      return checksPass;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
