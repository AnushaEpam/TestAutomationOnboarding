//implement add, subtract, multiply, divide and other calculation methods in "calculator" class and use them in a different class "interest calculator" 

const Calculator = require('./Calculator');
class InterestCalculator {
    constructor() {
        this.calculator = new Calculator();
    }

    calculateTotalAmount(principal, months) {
        if (months <= 12) {
            // if number of months is less than 12, calculate simple interest at 6% 
            //Simple Interest = Principle × Rate × Time = PTR/100
            const simpleInterest = this.calculator.divide(this.calculator.multiply(this.calculator.multiply(principal, 6), months), 100);
            return this.calculator.add(principal, simpleInterest);
        } else {
            //if number of months greater than 12 then calculate compound interest at 5.5%
            //Compound Interest = Principal × (1 + Rate)Time − Principal
            const ratePerMonth = 5.5 / 12 / 100;
            const compoundInterest = principal * (Math.pow((1 + ratePerMonth), months) - 1);
            return this.calculator.add(principal, compoundInterest);
        }
    }
}
module.exports = InterestCalculator;