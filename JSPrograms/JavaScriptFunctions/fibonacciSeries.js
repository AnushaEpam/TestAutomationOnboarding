//write function to output Fibonacci sequence. use memoization technique
//Memoization is a technique for speeding up applications by caching the results of expensive function calls and returning them when the same inputs are used again.
//The below program gives nth Fibonacci number
function fibonacciSeries(n){
    let cache = [0,1] //to store previously computed values

    function fibonacci(n){
        if (cache[n] !== undefined) {
            return cache[n];
        }
            cache[n]=fibonacci(n-1)+fibonacci(n-2)
            return cache[n]
    }
  for(let i=2;i<=n;i++){
    fibonacci(i)
  }
  return cache.slice(0,n)
}
let n =10;
console.log(fibonacciSeries(n))