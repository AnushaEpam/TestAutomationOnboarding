//write function to output Fibonacci sequence. use memoization technique
//Memoization is a technique for speeding up applications by caching the results of expensive function calls and returning them when the same inputs are used again.
//The below program gives nth Fibonacci number
function nthFibonacciNumber(){
    let cache = {} //to store previously computed values

    function fibonacci(n){
        if(n in cache){
            return cache[n]
        }

        if(n<=2){
            return 1; //fibonacci series 1,1,2,3,5,8,13..
        }
        else{
            cache[n]=fibonacci(n-1)+fibonacci(n-2)
            return cache[n]
        }
    }
    return fibonacci

}
const result = nthFibonacciNumber()
console.log(result(10))