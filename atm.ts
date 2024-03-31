
import inquirer from "inquirer";

interface UserInput{
uerID: string,
UserPin: number,
accountType: string,
transactiontype: string,
amount: number;
}
const userInput = await inquirer.prompt([
    {
type: "input",
name: "user ID",
message: "Enter User ID"
},
{
    type: "input",
    name: "user Pin",
    message: "Enter User Pin"
},
{
    type:"list",
    name:"accountType",
    choices:["current","Saving"],
    Message:"Select your Account Type"
},
{
    type:"list",
    name:"TransactionType",
    choices:["Fast Cash ","Cash withdraw","Balance Inquiry"],
    Message:"Select your transaction"
},   
{
    type:"number",
    name:"amount",
    message:"Enter amount you want to withdraw",
    when(userInput){
        return userInput.TransactionType === "cash Withdraw"
    }
},
{
    type:"number",
    name:"amount",
    Choices:[500,1000,2000,5000,10000,20000,25000],
    message: "select amount you want to withdraw",
    when (userInput){
        return userInput.TransactionType === "Fast cash"
}
},
]);
//making variable of user input data
const userID = userInput.userID;
const userPin = userInput.userPin;
const enteramount = userInput.amount;

if((userID&userPin)&&userInput.transactiontype === "balance Inquiry")
{
    const userbalance = Math.floor(Math.random()*100000);
    console.log('Your current balance is Rs ${userBalance}\n')}
    else  if(userID& userPin){
    const userbalance2 = Math.floor(Math.random()*100000);
    if(userbalance2>enteramount){
        console.log('Your account has been debited with Rs ${userbalance2 -enterAmount}');
    }else{
        console.log('\n unsufficient Balance');
    }
    }
