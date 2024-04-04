
const InterestCalculator = require('./InterestCalculator')

const interestCalculator = new InterestCalculator();

const principal = 4000 ;
console.log(interestCalculator.calculateTotalAmount(principal, 7));
console.log(interestCalculator.calculateTotalAmount(principal, 20));
