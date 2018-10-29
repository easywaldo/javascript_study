let fruits = ['apple', 'banana', 'watermelon', 'pineapple'];
Object.assign(fruits, {name : 'tower', floor : 22});
console.log(fruits);

let fruitJuice = fruits.map(f => f + 'juice');
console.log(fruitJuice);


let array = Array.from('foo');
console.log(array);
console.log(Array.from([1,2,3], x => x + x));


console.log(Array.of(1,2,3));
console.log(Array(3));

console.log(Array.of(10, "9", 8));

console.log(fruitJuice.concat(fruits));

console.log([1,2,3,4,5].copyWithin(1));
console.log([1,2,3,4,5].copyWithin(0, -1));
console.log([1,2,3,4,5].copyWithin(0));
console.log([1,2,3,4,5].copyWithin(0, -2));
console.log([1,2,3,4,5].copyWithin(2, -2));