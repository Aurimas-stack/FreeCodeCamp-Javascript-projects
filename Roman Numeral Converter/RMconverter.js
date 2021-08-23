function convertToRoman(num) {
  let numerals = [{"I" : 1}, {"II" : 2}, {"III" : 3}, {"IV" : 4}, {"V" : 5}, {"VI" : 6}, {"VII" : 7}, {"VIII" : 8}, {"IX" : 9}, {"X" : 10}, {"XX" : 20}, {"XXX" : 30},  {"XL" : 40}, {"L" : 50},  {"LX" : 60}, {"LXX" : 70},  {"LXXX" : 80}, {"XC" : 90}, {"XC" : 90},{"C" : 100}, {"CC" : 200}, {"CCC" : 300}, {"CD" : 400},  {"D" : 500},  {"DC" : 600}, {"DCC" : 700},  {"DCCC" : 800}, {"CM" : 900}]
  let breaked = breakNumbers(num);
  // FUNCTION TO SPLIT ORIGINAL NUMBER INTO SMALLERS PARTS
  function breakNumbers(num){
  var nums = num.toString().split('');
  var len = nums.length;
  var answer = nums.map(function(n, i) {
    return n + (Array(len - i - 1).fill(0)).join('');
  });
    return answer.map(Number).filter(function(n) {return n !== 0;});
};
  //FUNCTION TO GET ROMAN NUMERAL FROM THE NUMBERS (LESS THAN 1K)
 function getNumeral(brk) {
  for(let i = 0; i < numerals.length; i++) {
     let a = numerals[i];
     for(let b in a) {
       if(brk === a[b]) {
         return b;
         }
       }
     };
 };
 //FUNCTION TO GET ROMAN NUMERALS FROM THE NUMBERS (ABOVE THAN 1k)
  function aboveK(brk) {
   let letterM = [];
   let counter = 0;
   while(counter < brk) {
     letterM += 'M';
     counter = counter + 1000;
    }
    return letterM;
  };
 

//GETS NUMERALS FROM NUMBERS USING FUNCTION FROM ABOVE
 let newArr = [];
  for(let i = 0; i < breaked.length; i++) {
    if(breaked[i] < 1000) {
      newArr.push(getNumeral(breaked[i]));
    } else {
      newArr.push(aboveK(breaked[i]))
      }
  };
  return newArr.join("");
}

convertToRoman(1023);
