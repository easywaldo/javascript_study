var add = function(a,b) {
    return a + b;
}

let add2 = (a, b) => {
    return a + b;
}

console.log(add(10, 20));
console.log(add2(20, 30));

let addNumber = (a, b) => a + b;
console.log(addNumber(100, 200));

let print = message => `hello`;
console.log(print());

let defaultAdd = (a = 100, b = 200) => {
    return a + b;
}

console.log(defaultAdd(undefined, 300));


const calculation = {
    add: (a,b) => {
        return a + b;
    }
};

let sum = calculation.add(100, 200);
console.log(sum);



var obj = {
    foo: function(a,b) {
        console.log(this);
        console.log(arguments);
    }
};

let arrowObj = {
    foo: (a,b) => {
        console.log(this);
        //console.log(arguments);
    }
};

obj.foo(1, 2);
arrowObj.foo(2, 3);


let proto = function() {
    foo = () => {
        return 'foooo';
    };
};
proto.prototype.foo = function() {
    return 'fooo';
}

let oldProto = new proto();
console.log(oldProto.foo());


let fooBar = () => {};
//impossible
//let f = new fooBar();

//impossible
let arrowP = fooBar.prototype;
console.log(arrowP);
