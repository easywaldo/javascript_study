let object1 = { value : 10};
let object2 = object1;
let object3 = { value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);

const score = { visitors : 10, home : 5};
score.visitors = 8;
console.log(score.visitors);

score = { visitors: 11, home : 10};
console.log(score);