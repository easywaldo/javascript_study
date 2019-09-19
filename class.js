class Display {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log(this.x, this,y);
    }

    foo() {
        console.log(this);
        console.log('foo....');
    }

    static bar() {
        console.log(this);
        console.log('bar');
    }
}
const display = new Display(100, 200);
display.foo();

var proto = function() {
    console.log('proto');
};
proto.prototype.foo = function() {
    console.log('foo');
};
var proto1 = new proto();
proto1.foo();

Display.bar();




// Inheritance
var Parent = function() { };
Parent.prototype.move = function() {
    console.log('parent move');
};
var Child = function() { };
var parent = new Parent();
Child.prototype = parent;

var child = new Child();
child.move();


class Car {
    constructor() {

    }
    move() {
        console.log('car move..');
    }
};

class Truck extends Car {
    constructor() {
        super();
    }
    truckMove() {
        super.move();
    }
    move() {
        console.log('truck move..');
        super.move();
    }
};

const poterTruck = new Truck();
poterTruck.truckMove();
poterTruck.move();