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