
let myMap = new Map();
let jinam = {name: "jinam", age: 39};
myMap.set(jinam, 800);

console.log(myMap);
console.log(myMap.get(jinam));

let misun = {name : "misun", age: 38};
myMap.set(misun, 1000);

console.log(myMap);

myMap.set(jinam, 200);  //can't allocate same key


let entires = myMap.entries();
console.log('-------- entries -------');
console.log(entires.next());
console.log(entires.next());


console.log('----- forEach -----');
myMap.forEach((value, key) => {
    console.log(value);
    console.log(key);
});


console.log('---- values ----');
let values = myMap.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());


console.log('--- iterator ----');
let iterator = myMap[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


console.log('delete jinam')
myMap.delete(jinam);

console.log('---- has ----')
console.log(myMap.has(jinam));
console.log(myMap.has(misun));

console.log('---- keys ----')
let keys = myMap.keys();
console.log(keys.next());
console.log(keys.next());

console.log(myMap);

console.log('--- clear ----')
myMap.clear();

console.log(myMap);

let myWeakMap = new WeakMap();
let object1 = {};
let object2 = function() {};
let object3 = new Array();
let object4 = undefined;
myWeakMap.set(object1);
myWeakMap.set(object2);
myWeakMap.set(object3);

console.log(myWeakMap.has(object1));
console.log(myWeakMap.has(object2));
console.log(myWeakMap.has(object3));
console.log(myWeakMap.has(object4));
