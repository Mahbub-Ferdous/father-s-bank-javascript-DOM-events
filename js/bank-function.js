// this is a transaction related intaractive javascript calculation so you sould always add error handling by using 'alert' message
// our previous code were too much fency and unmaintainable
//if we write productive code for any production we must inherits code by using function. to avoid writing the same code multiple time and to put similar functionalities at the same place also organize the better code you must use function... always write (dry) do not repeat yourself

// so now we short our previous code what we write by using function and add error handling

// input field function:
function getInputField(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmount = inputField.value;
  inputField.value = "";
  return inputAmount;
}
// tatal section function:
function updateTotalField(totalFieldId, amount) {
  const totalSave = document.getElementById(totalFieldId);
  const totalSaveAmount = totalSave.innerText;
  const newTotalAmount = parseFloat(totalSaveAmount) + parseFloat(amount);
  totalSave.innerText = newTotalAmount;
}
// get current balance :
function getCurrentBalance() {
  const balanceAdd = document.getElementById("balance-count");
  const balanceSaveAmount = balanceAdd.innerText;
  return balanceSaveAmount;
}
//balance section function:
function updateTotalBalance(amount, isAdd) {
  const balanceAdd = document.getElementById("balance-count");
  const balanceSaveAmount = getCurrentBalance();
  if (isAdd == true) {
    balanceAdd.innerText = parseFloat(balanceSaveAmount) + parseFloat(amount);
  } else {
    balanceAdd.innerText = parseFloat(balanceSaveAmount) - parseFloat(amount);
  }
}

// 'click' event handler for deposit-button:
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // get and update input field
    const depositAmount = getInputField("deposit-field");
    // error handling for garbage input
    if (depositAmount > 0) {
      //get and update total field
      const depositTotalAmount = updateTotalField(
        "deposit-count",
        depositAmount
      );
      // get and update the balance field
      const updateBalance = updateTotalBalance(depositAmount, true);
    } else if (depositAmount != "number") {
      alert("Please Input A Positive Number");
    }
  });

// 'click' event handler for withdraw-button:
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //get and update input field
    const withdrawAmount = getInputField("withdraw-field");
    // get current balance
    const currentBalance = getCurrentBalance();
    // error handling for garbage input
    if (withdrawAmount > currentBalance) {
      alert("Insufficient Balance");
    } else if (withdrawAmount < 0 && withdrawAmount != "number") {
      alert("Please Input A Positive Number");
    } else {
      //get and update total field
      const withdrawTotalAmount = updateTotalField(
        "withdraw-count",
        withdrawAmount
      );
      // get and update balance field
      const updateBalance = updateTotalBalance(withdrawAmount, false);
    }
  });
