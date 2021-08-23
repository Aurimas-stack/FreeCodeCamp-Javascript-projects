function checkCashRegister(price, cash, cid) {
  let giveChange = [
    ["ONE HUNDRED", 0], 
    ["TWENTY", 0], 
    ["TEN", 0], 
    ["FIVE", 0], 
    ["ONE", 0], 
    ["QUARTER", 0], 
    ["DIME", 0], 
    ["NICKEL", 0], 
    ["PENNY", 0],
  ]; // ARRAY USED TO STORE NEEDED TO GIVE BACK CASH
  let money = (cash - price) * 100; //THE TOTAL NEEDED RETURN OF CASH
  let currency = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1]; //CURRENCY ARRAY FOR COMPARISONS, DEDUCTION
  let sortedDrawer = Object.keys(cid).sort(function(a, b) { return b - a}).map(key=>cid[key]); //SORTED CID ARRAY
  let newDrawer = sortedDrawer.map((a) => [a[0], a[1] * 100]) //SORTED ARRAY * 100
  let totalCurrency = sortedDrawer.reduce((a, b) => (a + b[1]),0); //TOTAL AMOUNT OF CURRENCY IN THE DRAWER
  if(totalCurrency === (money / 100) ) {
    return {status: "CLOSED", change: [...cid]}; //IF DRAWER = NEEDED CASH RETURN THIS
  } else if(totalCurrency != (money / 100)) { //ELSE LOOP OVER newDRAWER AND STORE NEEDED MONEY in giveCHANGE
    for(let i = 0; i < newDrawer.length; i++) {
      while(newDrawer[i][1] > 0 && currency[i] <= money) {
        giveChange[i][1] += currency[i];
        money -= currency[i];
        newDrawer[i][1] -= currency[i];

      }
    }
  };
  let giveBack = giveChange; //STORING giveCHANGE in VARIABLE
  let newMoney = cash - price; // UNCHANGE(ORIGINAL) NEEDED CASH VALUE
  let fGM = giveBack.filter((a) => a[1] != 0); // REMOVE IF THERES A 0 VALUE 
  let final = fGM.map((a) => [a[0], a[1] / 100]); //DIVIDE BY 100 FOR FINAL VALUE
  let giveBackTotal = (giveBack.reduce(((a, b) => a + b[1]), 0)) / 100; // TOTAL OF GIVE BACK CURRENCY FOR FINAL COMPARISON
  if(newMoney <= giveBackTotal) {
    return {status: "OPEN", change:[...final]};
  } else {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  
}
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
