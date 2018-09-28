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