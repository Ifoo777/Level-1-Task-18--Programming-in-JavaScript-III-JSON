//Create an Income object
function Income(name, amount, recur) {
  this.name = name;
  this.amount = amount;
  this.recurring = recur;
}

// create income objects with attributes
let income1 = new Income("Rental", 7000, true);
let income2 = new Income("Business", 25000, true);
let income3 = new Income("Investment", 5000, true);
let income4 = new Income("AfterHours", 2500, true);
let income5 = new Income("Bonus", 6000, false);

//create array of income
let myIncomeItems = [income1, income2, income3, income4, income5];

//initialise an empty string
let incomeString = "";

//create a for each loop and loop through the array and initialise it to the empty string
myIncomeItems.forEach((income) => {
  incomeString += `\n${income.name}, ${income.amount}`;
});

//display the income items
let displayIncomeItems = prompt(incomeString);
console.log(displayIncomeItems);

//Split a string into substrings using the specified separator and return them as an array.
let userIncomeInput = displayIncomeItems.split(",");
console.log(userIncomeInput);

//let the user add an income object entry
let income6 = new Income(
  userIncomeInput[0],
  userIncomeInput[1],
  userIncomeInput[2]
);
myIncomeItems.push(income6); // push new income entry into myIncomeItems
console.log(myIncomeItems);

//Create an expense object
function Expense(name, expenseAmount, recur) {
  this.name = name;
  this.expenseAmount = expenseAmount;
  this.recurring = recur;
}

// create an expense objects with attributes
let expense1 = new Expense("BusinessExpense", 10000, true);
let expense2 = new Expense("ElectricityExpense", 1000, true);
let expense3 = new Expense("WaterExpense", 500, true);
let expense4 = new Expense("ShoppingExpense", 2500, true);
let expense5 = new Expense("DailyExpense", 100, true);

let myExpenseItems = [expense1, expense2, expense3, expense4, expense5]; //create an array

let expensesString = ""; //initialise an empty string

myExpenseItems.forEach((expense) => {
  // create a for each loop and loop through the array and initialise it to the empty string
  expensesString += `\n${expense.name} , ${expense.expenseAmount}`;
});

let displayExpenseItems = prompt(expensesString); //display the expense items
console.log(displayExpenseItems);

let userExpenseInput = displayExpenseItems.split(","); //Split a string into substrings using the specified separator and return them as an array.
console.log(userExpenseInput);

//let the user add an expense object entry
let expense6 = new Expense(
  userExpenseInput[0],
  userExpenseInput[1],
  userExpenseInput[2]
);
myExpenseItems.push(expense6); //push new expense entry into myExpenseItems
console.log(myExpenseItems);

//create an array of total income
let totalAmountofDisposableIncome = [
  income1.amount +
    income2.amount +
    income3.amount +
    income4.amount +
    income5.amount,
];
console.log("The total amount of income is " + totalAmountofDisposableIncome);

//create an array of total expenses
let totalAmountOfDisposableExpense = [
  expense1.expenseAmount +
    expense2.expenseAmount +
    expense3.expenseAmount +
    expense4.expenseAmount +
    expense5.expenseAmount,
];
console.log("The total amount of expense is " + totalAmountOfDisposableExpense);

//return total amount of disposible income - expenses
let totalDisposableIncome =
  [totalAmountofDisposableIncome] - [totalAmountOfDisposableExpense];
console.log(
  "The total amount of disposable income is " + totalDisposableIncome
);

//ask the user how much of savings would he like to put away from total disposible income
let user = prompt("How much would you like to put into savings?");

let savings = parseInt(user);

//return total disposible income after savings
alert(
  "The total amount of disposible income is " +
    (totalDisposableIncome - savings)
);
