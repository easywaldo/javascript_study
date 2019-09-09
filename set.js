let mySet = new Set('hello');

let setIter = mySet.entries();

//console.log(mySet);

for (let value of setIter) {
    console.log(value);
}

mySet.forEach((value, key) => {
    console.log(value);
    console.log(key);
});

console.log(mySet.has('h'));

mySet.delete('l');

console.log(mySet);

for(let key of mySet.keys()) {
    console.log(key);
}

for(let value of mySet.values()) {
    console.log(value);
}

let ws = new WeakSet();
let object1 = {};
let object2 = function() {};
let object3 = new Array();
let object4 = new Object();

ws.add(object1);
ws.add(object2);
ws.add(object4);
console.log(ws.has(object1));
console.log(ws.has(object2));
console.log(ws.has(object3));
console.log(ws.has(object4));


ws.delete(object2);

console.log(ws.has(object2));

