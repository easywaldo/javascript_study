function myFunction(p1) {
    if (arguments[1]) {
        return p1 + arguments[1];
    }
    else {
        return p1;
    }
}

console.log(myFunction(100, 200));
console.log(myFunction(100));


function myFunction2(p1, ...args) {

    console.log(args);
    if (args[0]) {
        return p1 + args[0];
    }
    else {
        return p1;
    }
}

console.log(myFunction2(100, 200, 300));
console.log(myFunction2(200));


function myFunction3(p1 = 100, p2 = 200, p3 = p1 + p2) {
    console.log(p1, p2, p3);
}

myFunction3(undefined, 300);