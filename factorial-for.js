
let num = 10;
let factorial = 1;
//i es = 1 y mientras i sea menor o igual al numero se sumara 1
for(let i = 1; i <= num; i++) {
    //el factorial 1 es igual factorial 1 multiplicado por i que ira subiendo cada vez 
    factorial = factorial * i;
    console.log(factorial);
} 
console.log(factorial)
//factorial(1)=factorial(1)*i++(1+1)
//factorial(2)=factorial(2)*i++(2+1)
//etc...