let num= 10;
let factor =num;
//mientras que factor sea mayor que 1 
while(factor > 1 ){
//factor se resta 1 
    factor --;
 //num(10)=num(10)*factor(10-1)
    num= num * factor;

    console.log(num);
}
console.log(num)