function monthlySavings(payments, livingCost) {
  if (!Array.isArray(payments) || typeof livingCost !== "number") {
    return "invalid input";
  }

  let totalIncome = payments.reduce(function(total, payment){
    if(payment >= 3000) {
      return total + payment * 0.8;
      
    }
    else {
      return total + payment
    }
  }, 0);

  let savings = totalIncome - livingCost;

  if (savings >= 0) {
    return savings;
} else {
    return "earn more";
}


}

console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
