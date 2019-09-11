let arr = [1,2,3,4];

let clone = [0, ...arr, 5];
console.log(arr);
console.log(clone);


function showElement(a, b, c) {
    console.log(a, b, c);
}

showElement(...clone);


let first = {
    car: "truck",
    house: "apartment"
};

let second = {
    labtop: "macbook",
    job: "developer"
}

let composition = {...first, ...second};

console.log(composition);
