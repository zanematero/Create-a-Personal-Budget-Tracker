let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
// Weekly Expenses
for (let i = 0; i < weeklyExpenseQuestions.length; i++)  {
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i])
    console.log(stringAnswer)
    let numberAnswer = parseFloat(stringAnswer)
    weeklyExpenses += numberAnswer
    console.log(weeklyExpenses)
}
// Monthly Expenses
for (let i = 0; i < monthlyExpenseQuestions.length; i++)  {
    let stringAnswer = window.prompt(monthlyExpenseQuestions[i])
    console.log(stringAnswer)
    let numberAnswer = parseFloat(stringAnswer)
    monthlyExpenses += numberAnswer
    console.log(monthlyExpenses)
}
//Annual Expenses
for (let i = 0; i < annualExpenseQuestions.length; i++)  {
    let stringAnswer = window.prompt(annualExpenseQuestions[i])
    console.log(stringAnswer)
    let numberAnswer = parseFloat(stringAnswer)
    annualExpenses += numberAnswer
    console.log(annualExpenses)
}