// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function cipherKey(encode) {
    let cipher = {};

    if (encode) {
      cipher = {
        a: "11",
        b: "21",
        c: "31",
        d: "41",
        e: "51",
        f: "12",
        g: "22",
        h: "32",
        i: "42",
        j: "42",
        k: "52",
        l: "13",
        m: "23",
        n: "33",
        o: "43",
        p: "53",
        q: "14",
        r: "24",
        s: "34",
        t: "44",
        u: "54",
        v: "15",
        w: "25",
        x: "35",
        y: "45",
        z: "55",
      };
    } else {
      cipher = {
        11: "a",
        21: "b",
        31: "c",
        41: "d",
        51: "e",
        12: "f",
        22: "g",
        32: "h",
        42: "(i/j)",
        52: "k",
        13: "l",
        23: "m",
        33: "n",
        43: "o",
        53: "p",
        14: "q",
        24: "r",
        34: "s",
        44: "t",
        54: "u",
        15: "v",
        25: "w",
        35: "x",
        45: "y",
        55: "z",
      };
    }

    return cipher;
  }

  function splitLettersForDecode(input) {
    //splitCharacters divides all the characters into individual elements of the array
    const splitCharacters = input.split("");
    //coupler is a storage variable that will hold, at most, a pair of elements in an array
    let coupler = [];
    //the final return variable
    let result = [];

    for (let i = 0; i < splitCharacters.length; i++) {
      //if the current character is a space, it will simply push it into the result array
      if (splitCharacters[i] != " ") {
        //pushes the current element into the coupler array
        coupler.push(splitCharacters[i]);

        //if the coupler array currently holds 2 elements, it will join them into a single element in the result array, and then reset coupler
        if (coupler.length === 2) {
          result.push(coupler.join(""));

          coupler = [];
        }
      } else {
        result.push(" ");
      }
    }

    //if there was an odd number of numbers in the message, it means the message was incomplete. this checks to see if the message was incomplete
    //and if it was, it returns false instead of the result
    if (coupler.length === 1) {
      return false;
    } else {
      return result;
    }
  }

  function polybius(input, encode = true) {
    // your solution code here
    //first, figure out whether the message is being encoded or decoded, and assign the cipher key based on that information
    const cipher = cipherKey(encode);
    let result = [];
    let characterKey = "";

    //if the current message is being encoded, it will simply split all the letters into an array
    if (encode) {
      input = input.toLowerCase().split("");
    }
    //if it isn't being encoded, it calls the splitLettersForDecode function, which will group the numbers into double digit pairs
    else {
      input = splitLettersForDecode(input);
    }

    //if the input of the message being decoded was incomplete, the code won't run
    if (input != false) {
      //next, begin a for loop thats purpose is to translate the letters letter by letter and push those letters into an array
      for (let i = 0; i < input.length; i++) {
        characterKey = input[i];

        if (characterKey === " ") {
          result.push(characterKey);
        } else {
          result.push(cipher[characterKey]);
        }
      }

      result = result.join("");

      return result;
    } else {
      return input;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
