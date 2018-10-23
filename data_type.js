const symbol = Symbol('BMW');
console.log(symbol);
console.log(typeof(symbol));

var symbol_a = Symbol('BMW');
console.log(symbol == symbol_a);

var obj = {};
obj[Symbol('a')] = 'a'
obj['c'] = 'c';
obj.d = 'd';

console.log(obj);

for (var i in obj) {
    console.log(i);
}

console.log(symbol.valueOf());
//console.log(symbol.toSource());

const globalSym = Symbol.for('foo');
console.log(globalSym);
console.log(Symbol.keyFor(globalSym));

class Array1 {
    static [Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }
}

console.log([] instanceof Array1);


const alpha = ['a', 'b', 'c'];
const numeric = [1,2,3];
let alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric);
let numericAdded = numeric.concat(5,6,7);
console.log(numericAdded);

numeric[Symbol.isConcatSpreadable] = true;
alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric);

const regexp1 = /foo/;
regexp1[Symbol.match] = false;

console.log('/foo/'.startsWith(regexp1));
console.log('/baz/'.endsWith(regexp1));

console.log(Symbol('desc').description);

class Search1 {
    constructor(value) {
        this.value = value;
    }
    [Symbol.search](string) {
        return string.indexOf(this.value);
    }
}
console.log('foobar_foorbar'.search(new Search1('bar')));


class Replace1 {
    constructor(value) {
        this.value = value;
    }
    [Symbol.replace](string) {
        return `s/${string}/${this.value}/g`;
    }
}

console.log('foo'.replace(new Replace1('bar')));


var myMap = new Map();
var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

console.log(myMap.size);

console.log(myMap.get(keyString));
console.log(myMap.get(keyObj));
console.log(myMap.get(keyFunc));

myMap.get('a string');

