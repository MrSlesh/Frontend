console.log('Hello world!');

// undefined

let x;
console.log(x);

x = 7;
x = 'bye';
console.log(x);

const pi = 3.1415926;
// pi = 3.14 пример ошибки!

let y = x;

console.log(y);

console.log('pi = ' +pi);

const exp = pi;



console.log(`exp = ${exp} or ${pi}`);
// console.log('exp = ' + exp + ' or ' + pi);

x = true;
console.log(x);

x = null;
console.log(x);

let res = 7 % 2;
console.log(`res = ${res}`);

res = 'true' + 5;
console.log(`res = ${res}`);

res = true + 5; // false - 0, true - 1
console.log(`res = ${res}`);

x = '2' === 2 
console.log(`x = ${x}`);

x = '2' == 2 
console.log(`x = ${x}`);

res = String(5); // String(5)
console.log(typeof res);

res = 5 + ''; // String(5)
console.log(typeof res);

res = Number('5'); // Number(5)
console.log(typeof res);

res = +'5'; // Number(5)
console.log(res);

res = +'5ab'; // Number(5)
console.log(typeof res);

console.log(10 + 5 + res);

switch (res) {
    case 5:
        console.log('number: ${res}')
        break;
        case '5':
            console.log('string: ${res}')
            break;
    default:
        console.log("Its not a 5");
}

let age = 16;
let vol = age > 16 ? 42 : 1.5
console.log(`vol = ${vol}`);

console.log(pi.toFixed(2));

++age;
age++;

x = 10;
res = x++ + ++x;  // 10 + 12 = 22
console.log(`res = ${res}`);

x = 10;
y = 5;

res = add(x, y);
console.log(`res = ${res}`);

function add (a, b) {
    return a + b;
}

x = !!x; // неявное приведение переменной к boolean значению 
console.log(x); 

let example = 'hello';
console.log(!!example);
// false = 0, -0, '', false, null, Nan, undefined

let userName = null;
let nickName = userName || 'Anonymous';

greeting();
greeting('Rabindranat');

function greeting(nickName1 = 'Anonymous') {
    console.log(`Hello ${nickName1}`);
}

// Home work

// res = sumDigits(1234);
// console.log(`res = ${res}`);

function sumDigits(x) {
    let sum = 0;
    while (x) {
        sum += x % 10;
        x = (x - x % 10) / 10
    }
    return sum;
    
}
console.log(`res = ${res}`);

res = luckyNumber(123871);  // 1 + 2 + 3 === 8 + 7 +1
console.log(res ? 'Lucky' : 'Unlucky');

function luckyNumber(x) {
    // TODO
    let secondHalf = x % 1000;
    let (firstHalf = x - secondHalf) / 1000;
    return sumDigits(firstHalf) === sumDigits(secondHalf);

}

function banana() {
    let a = 'a';
    let b = 'b';
    // TODO 
    // 'b', 'a' => banana
    console.log((b + a + +a +a).toLowerCase());
}

