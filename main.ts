import inquirer from "inquirer";

let totalblance = 10000; // DOLLAR
const pincode = 2005;

const answer = await inquirer.prompt([
  { name: "pin", message: "enter your pin number", type: "number" },
]);

if (answer.pin === pincode) {
  let atm = await inquirer.prompt([
    {
      name: "acounttype",
      message: "enter your acount type",
      type: "list",
      choices: ["current_acount", "saving_acount"],
    },
    {
      name: "transaction_method",
      message: "enter your transsaction_method",
      type: "list",
      choices: ["cash withdraw", "fast_cash"],
    },
  ]);

  if (atm.transaction_method === "cash withdraw") {
    let CWA = await inquirer.prompt([
      {
        message: "enter the amount you want to withdraw",
        name: "withdraw",
        type: "number",
      },
    ]);

    if (CWA.withdraw <= totalblance) {
      totalblance -= CWA.withdraw;
      console.log(`your remaning balance is ${totalblance}`);
    } else {
      console.log("insufficient balance");
    }
  } 
      
  if (atm.transaction_method === "fast_cash"){
    let FCA = await inquirer.prompt([
      {
        message: "enter the amount you want to fast cash",
        type: "list",
        choices: ["100", "1000", "2000", "3000", "10000", "20000"],
        name: "cash",
      },
    ]);
    if (FCA.cash <= totalblance) {
      totalblance -= FCA.cash
      console.log(`your remaning balances is ${totalblance}`);
    } else {
      console.log("insuffcient balances");
    }
  }
} else {
  console.log("please enter correct pin code");
}
