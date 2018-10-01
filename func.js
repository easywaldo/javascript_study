var add_2 = function(x) {
    return x + 2;
}

var double = function(x) {
    return x * 2;
}


var numbers = [5, 6, 7];
var map = function(func, list) {
    var output = [];
    for (idx in list) {
        output.push(func(list[idx]));
    }
    return output;
}

var output = map(add_2, numbers);
console.log(output);

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