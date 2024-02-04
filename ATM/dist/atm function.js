import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { type: "input",
        name: "username",
        message: "Please enter your username.",
    },
    {
        type: "number",
        name: "userpin",
        message: "Please enter your pin."
    },
    {
        type: "list",
        name: "AccountType",
        message: "Please enter your AccountType.",
        choices: ["Current", "Saving"]
    },
    {
        type: "list",
        name: "PaymentMethod",
        message: "Please enter your payment method.",
        choices: ["FastCash", "Balance Inquiry"]
    },
    {
        type: "number",
        name: "Amount",
        message: "Please enter your amount.",
        when(answer) {
            return answer.PaymentMethod == "FastCash";
        }
    }
]);
let { AccountType, PaymentMethod, username, userpin, Amount } = answer;
let balance = Math.floor(Math.random() * 100000);
if (AccountType == "Saving") {
    if (PaymentMethod == "Balance Inquiry") {
        console.log(balance);
    }
    if (PaymentMethod == "FastCash") {
        console.log("Maximum withdrawl limit is 25000");
        if (Amount <= 25000) {
            let remaining = balance - Amount;
            console.log("Your Remaining Balance", remaining);
        }
        else {
            console.log("maximum limit exceeded");
        }
    }
}
if (AccountType == "Current") {
    if (PaymentMethod == "Balance Inquiry") {
        console.log(balance);
    }
    else if (PaymentMethod == "FastCash") {
        if (balance > Amount) {
            console.log("Previous Balance", balance);
            let remaining1 = balance - Amount;
            console.log("Remaining balance ", remaining1);
        }
        else {
            console.log("Insufficent Balance");
        }
    }
}
