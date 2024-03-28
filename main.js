import inquirer from "inquirer";
let dollar = 10000;
const atmpin = 6000;
const answer = await inquirer.prompt([
    { name: "yourpin", message: "Enter your pin number", type: "number" },
    // {name : "operatoin" , message : "what you want to do ", type : "list", choices : ["withdraw" , "checkblance"]}
]);
// console.log(answer.yourpin);
if (answer.yourpin === atmpin) {
    console.log("your pin code is correct ");
    const action = await inquirer.prompt([
        {
            name: "operatoin",
            message: "what you want to do ",
            type: "list",
            choices: ["withdraw", "checkblance"],
        },
    ]);
    if (action.operatoin === "withdraw") {
        const money = await inquirer.prompt([
            {
                type: "list",
                message: "How much amount do you want to withdraw?",
                name: "yourwithdrawamount",
                choices: ["100", "1000", " 2000", "5000", "10000", "20000"],
            },
        ]);
        if (money.yourwithdrawamount > dollar) {
            console.log("Aukat pe aa");
        }
        else {
            dollar -= money.yourwithdrawamount;
            console.log(`your remaning blance is  ${dollar} `);
        }
    }
    else if (action.operatoin === "checkblance") {
        console.log(`your current balance is ${dollar}`);
    }
}
else {
    console.log("try again");
}
