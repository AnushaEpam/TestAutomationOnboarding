//Print first n prime numbers       
//first 25 prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97



function isPrime(number){
    if(number<=1)
    return false
   for(let i=2;i<number;i++){
    if(number%i===0){
    return false;
    }
   }
return true
}

let n = 100
let primeArray =[]
let num =2;
while(primeArray.length<n)
{
    if(isPrime(num)) {
        primeArray.push(num);
    }
    num++; 
}

console.log(primeArray)