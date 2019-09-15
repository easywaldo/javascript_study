let arr = [1,2,3];
let num = arr[0];
console.log(num);

let [a,b,c] = [0,2,4];
console.log(a,b,c);

let [foo,,bar] = [100, 200, 300];
console.log(foo,bar);

let [chally, bravo = 100, delta = 200] = [2,4];
console.log(chally, bravo, delta);

let [q, w, e, ...z] = [0,2,3,4,6,8,10];
console.log(q, w, e, z);


let obj = {name: "waldo", age: 39};
let {name, age, location = "seoul"} = obj;
console.log(name, age, location);


function foobar([a, b, c=300] = [100, 200], {k1 = 400, k2 } = {k1:undefined, k2:500}) {
    console.log(a,b,c, k1, k2);
}
foobar();