function telephoneCheck(str) {
  let newStr =  str.replace(/ /g,''); //REMOVES WHITESPACE
  
  //FUNCTION TO CHECK IF ITS A NUMBER OR DASH
  function checkNumber(numb) {
    return (/^\d|\(([^)]+)\)|-|$/).test(numb)
  };
  //FUNCTION TO COUNT AMOUNT OF NUMBERS
  function countNumbers(numb) {
    return numb.replace(/[^0-9]/g,"").length ;
  };
  function isNumeric(value) {
    return /^-?\d+$/.test(value);
}
  //CHECK PARENTHESIS FUNCTION
  function checkParenthesis(numb) {
    let a = numb.slice(0, 5);
    let b = "(";
    let c = ")";
    if(a[0] == b && a[4] == c) {
      return true;
    } else if(a[0] == b && a[4] != c || a[0] != b && a[4] == c) {
      return false;
    } else if(a[0] == b && a[3] != c || a[0] != b && a[3] == c) {
      return false;
    } else if(isNumeric(a[0]) == false && isNumeric(a[4]) == true){
      return false;
    } else if(isNumeric(a[0]) == true && isNumeric(a[4]) == false){
      return false; 
    } else if(isNumeric(a[0]) == true && isNumeric(a[4]) == true) {
      return true;
    }
  }
  function checkOtherP(numb) {
    let a = numb.slice(5);
    let b = a.split("");
    for(let i = 0; i < b.length; i++) {
      if(b[1] == "(" || b[5] == ")" || b[i] == "?") {
        return false;
      } else {
        return true;
      }
    }
  }
  let bb = newStr.split("").slice(1).join("");
  //MAIN VALIDATOR
  if(countNumbers(newStr) == 11 && newStr[0] == 1 && checkNumber(newStr) == true) {
    if(checkParenthesis(bb) == true) {
      return true;
    } else {
      return false;
    }
    }else if(countNumbers(newStr) == 10 && checkNumber(newStr) == true && checkParenthesis(newStr) == true && checkOtherP(newStr) == true) {
      return true;
    } else {
      return false;
    }
  };
telephoneCheck("(555)5(55?)-5555")
