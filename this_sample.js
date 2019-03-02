var identify = (context) => {
    return context.name.toUpperCase();
}

var speak = (context) => {
    var greeting = `hello i'm {identify.call(context)})`;
    console.log(greeting);
}

var me = {
    name: "john"
};
var you = {
    name: "reader"
};

// identify.call(me);
// identify.call(you);

// speak.call(me);
// speak.call(you);

function foo(num) {
    console.log("foo" + num);
    this.count++;
    data.count++;
    //foo.count++;
}
foo.count = 0;

var data = {
    count: 0
};

var i = 0;
for (i = 0; i<10; i++) {
    if (i > 5) {
        //foo(i);
        foo.call(foo, i);
    }
}
console.log(foo.count);
console.log(data.count);


function alpha() {
    var a = 2;
    this.bravo();
}

function bravo() {
    //console.log('bravo');
    console.log(this.a);
}

alpha();
