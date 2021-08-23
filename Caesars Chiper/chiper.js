function rot13(str) {
  let newStr = str.split("");
  let testChar = 0; //TO GET CIPHERED CHAR CODE
  let converted = []; //ARRAY TO GET CIPHERED(ORIGINAL) LETTERS
  let letterCodeArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]; //ARRAY OF CODES(OF UPPERCASE LETTERS)

  //FUNCTION TO TEST IF CHARACTER IS A LETTER
  function isCharLetter(char) {
    return (/[a-zA-Z]/).test(char);
  };
  //FUNCTION TO GET CIPHERED CHARACTER ORIGINAL CHAR CODE
  function getNewCharCode(char) {
    let x = 0;
    let y = 0;
    for(let i = 0; i < letterCodeArray.length; i++) {
      if(char === letterCodeArray[i]) {
        x = (((letterCodeArray.indexOf(char) - 13) + letterCodeArray.length));
        if(x >= letterCodeArray.length) {
          y = x - letterCodeArray.length;
          return letterCodeArray[y];
        } else {
          return letterCodeArray[x];
        };
      }
    }
  };
  // SHIFT CIPHER
  for(let i = 0; i < newStr.length; i++) {
    if(isCharLetter(newStr[i]) === true) {
      testChar = newStr[i].charCodeAt(0);
      converted.push(String.fromCharCode(getNewCharCode(testChar)));
    } else {
      converted.push(newStr[i]);
    }
  };
  return converted.join("");
}

rot13("SERR CVMMN!")
