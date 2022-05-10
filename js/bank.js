// deposit money submit and add with deposit money and total

// 'click' event handler for deposit-button:
document.getElementById("deposit-button").addEventListener("click", () => {
  // now we catch the deposite input field by using id
  const depositField = document.getElementById("deposit-field");
  const depositAmount = depositField.value; // for catch the input value
  // now we catch the deposit amount where input number save in
  const depositSave = document.getElementById("deposit-count");
  const depositSaveAmount = depositSave.innerText;
  // addition our past deposit amount and new deposit amount
  const newDepositAmount =
    parseFloat(depositSaveAmount) + parseFloat(depositAmount); // we know two string addition like '2' + '5' = '25' so we turn into floating number from string by using parseFloat().
  // now we catch the total balance div to save deposit amount in Balance
  const balanceAdd = document.getElementById("balance-count");
  const balanceSaveAmount = balanceAdd.innerText; // to catch the balace div ammount element
  // addition our past Balance amount and new deposit amount
  const newBalanceAmount =
    parseFloat(balanceSaveAmount) + parseFloat(depositAmount);
  // attach input amount in total Balance amount
  balanceAdd.innerText = newBalanceAmount;
  // attach input amount and total deposit amount
  depositSave.innerText = newDepositAmount; // put the input value in total deposit div
  //clear the deposit input field
  depositField.value = ""; // to erase the written amount in input field
});

// 'click' event handler for withdraw button:

document.getElementById("withdraw-button").addEventListener("click", () => {
  //catch withdraw input field for button click event by using input field id
  const withdrawField = document.getElementById("withdraw-field");
  // get withdraw input value
  const withdrawAmount = withdrawField.value;
  // catch the elements where withdraw transection amount record save in.
  const withdrawSave = document.getElementById("withdraw-count");
  // get the current withdraw transection record
  const withdrawSaveAmount = withdrawSave.innerText; // this is not input so we use innerText
  // addition previous withdraw record and new withdraw amount
  const newWithdrawAmount =
    parseFloat(withdrawSaveAmount) + parseFloat(withdrawAmount);
  // catch the balance element where total balance record save
  const balanceAdd = document.getElementById("balance-count");
  // get the total balance record
  const balanceSaveAmount = balanceAdd.innerText; // to catch the balace div ammount element
  // substraction from previous total balance to new withdraw balace
  const newBalanceAmount =
    parseFloat(balanceSaveAmount) - parseFloat(withdrawAmount);
  // so the current Total balance
  balanceAdd.innerText = newBalanceAmount;
  // so the current withdraw amount
  withdrawSave.innerText = newWithdrawAmount;
  // clear the withdraw input field time to time
  withdrawField.value = "";
});
