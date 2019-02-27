function foo() {
    console.log( a ); // 3  (not 2!)
}

function bar() {
    let a = 3;
    foo();
}

let a = 2;

bar();