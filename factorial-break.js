
let num = 10;
let factor = 1;
let i = 1;

while (true) {
    if (i > num) {
        break;
    }
    factor = factor * i;
    i++;
}
console.log(factor);