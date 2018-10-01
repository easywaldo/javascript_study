/**
 * 
 * @param {*} x 
 * @return x + 2
 */
var add_2 = function(x) {
    return x + 2;
}

var double = function(x) {
    return x * 2;
}

console.log('result :' + add_2(2, 7));


var numbers = [5, 6, 7];

/**
 * 
 * @param {*} func 
 * @param {*} list 
 */
var map = function(func, list) {
    var output = [];
    for (idx in list) {
        output.push(func(list[idx]));
    }
    return output;
}

var output = map(add_2, numbers);
console.log(output);

/**
 * 
 * @param {*} _name 
 * @param {*} _age 
 */
function Test(_name, _age) {
    return {
        name : _name,
        age : _age
    }
}

var result = Test('hello', 'world');
console.log(result);
console.log('result.age : ' + result.age);


console.log(true ? 0 : 1);
console.log(true ? 1 : 2);
var unnamed;
console.log(unnamed);
var emptyData = null;
console.log(emptyData);
console.log(unnamed == emptyData);
console.log(unnamed === emptyData);
console.log(null || "user");
console.log("foo" || "bar");

let ten = 10;
ten = ten + 10;
console.log(ten);
var declaredFirst = 10;
var declaredFirst = 20;
console.log(declaredFirst);

const two = 2;
//two = two + 1; //error
console.log(two);

console.log(Math.max(1,100));

//let theName = prompt("enter your name");
//console.log(theName);

for (let j = 0; j <= 10; j++) {
    var printStar = "";
    for (let i = 0; i <= j; i++) {
        printStar += "*";
    }
    console.log(printStar);
}


let x = 10;
if (true) {
    let y = 20;
    var z = 30;

    console.log(x + y + z);
}
console.log(x + z);
// y is not here
//console.log(y);



const humms = function (factor) {
    var ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
};

humms(5);


let safeMode = true;
let launchMissiles = function() {
    console.log('work');
};
if (safeMode) {
    launchMissiles = function() {};
}
launchMissiles();


console.log("The future says:", future());
console.log("The future says:", square(2));
function future() {
    return "You will never have flying cars";
}
function square(x) {
    return x * x;
}

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
const square1 = (x) => { return x * x; }
const square2 = x => x * x;

console.log('output', power(3, 3));
console.log('output', square1(3));
console.log('output', square2(3));

const horn = () => {
    console.log('Toot');
}
var hornResult = horn;
horn();
hornResult();


var buildMultiplier = function(x) {
    return function(y) {
        return x * y;
    }
}

var double = buildMultiplier(2);
var triple = buildMultiplier(3);

console.log('result', double(3));
console.log('result', triple(3));

var add1 = function (x) {
    return x + 1;
};

var negate = function(func) {
    return func * -1;
};

console.log('result :', negate(add1(5)));



// Call Stack
function greet(who) {
    console.log('Hello ' + who);
}
greet('Harry');
console.log('Bye');

function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
// console.log(chicken() + " came first."); // call stack error

// Optional Parameter
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

// optional parameter
function ability(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(ability(3));
console.log(ability(2, 4));


function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());
console.log(wrap1(3));

// Closure
function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));

// recursion
function repeatDoIt(base, exponent) {
    if (exponent == 0) {
        return 1;
    }
    else {
        return base * repeatDoIt(base, exponent - 1);
    }
}
console.log(repeatDoIt(2, 3));

const f = function(a) {
    console.log(a + 2);
};

function g(a, b) {
    return a * b * 3.5;
};

let h = a => a % 3;

f(2);
console.log(g(2,3));
console.log(h(5));