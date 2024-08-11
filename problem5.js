function monthlySavings(arr, livingCost) {
  const sahedsIncome = 5000;
  const tax = 20;

  for (cost of arr) {
    let taxMoney = 0;
    let storeTaxMoney = 0;

    if (cost >= 3000) {
      taxMoney = cost / tax;
      storeTaxMoney += taxMoney
    }
    console.log(storeTaxMoney)
  }
}

const arr = [2000, 3000, 5000, 500];
const livingCost = 200;
console.log(monthlySavings(arr, livingCost));
