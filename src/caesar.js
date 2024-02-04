// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function shiftAlphabet(shift) {
    const alphabet = [
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
    const shifted = {};

    //iterates throughout the entire alphabet to create the shifted alphabet
    for (let i = 0; i < alphabet.length; i++) {
      //if the shift goes RIGHT
      if (shift > 0) {
        //if the current shift DOESN'T loop around
        if (i + shift < alphabet.length) {
          shifted[alphabet[i]] = alphabet[i + shift];
        }
        //if the current shift DOES loop around
        else {
          shifted[alphabet[i]] = alphabet[i - 26 + shift];
        }
      }
      //if the shift goes LEFT
      else {
        //if the current shift DOESN'T loop around
        if (i + shift > -1) {
          shifted[alphabet[i]] = alphabet[i + shift];
        }
        //if the current shift DOES loop around
        else {
          shifted[alphabet[i]] = alphabet[i + 26 + shift];
        }
      }
    }

    return shifted;
  }

  function caesar(input, shift = 0, encode = true) {
    // your solution code here

    //first, depending on if the shift value is within allowable scopes, this code will run
    if (shift <= 25 && shift >= -25 && shift != 0) {
      //if encode is false, switch turn the positive shift negative, and vice versa
      if (encode != true) {
        shift = -shift;
      }

      //create a helper function that will shift the entirety of the alphabet array to match the current shift value
      const cipher = shiftAlphabet(shift);
      const splitInput = input.toLowerCase().split("");
      let result = [];

      //use a for loop to run through the alphabet and find the index of the current letter
      for (let i = 0; i < splitInput.length; i++) {
        //if the current index is a letter, translate it into the cipher
        if (Object.keys(cipher).includes(splitInput[i])) {
          result.push(cipher[splitInput[i]]);
        }

        //else simply push the element
        else {
          result.push(splitInput[i]);
        }
      }
      //join the result array into a new string
      const newMessage = result.join("");

      return newMessage;
    } else {
      return false;
    }
  }

  console.log(caesar("This is a secret message!", 8));

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
