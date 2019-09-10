let person = {
};

let myFunc = () => {
};

function foo() {
};
foo.prototype.city = "seoul";
foo.prototype.nation = "korea";

let handler = {
    set: function (person, key, value, receiver) {
        console.log('set called');
        console.log(key, value);
        return Reflect.set(person, key, value, receiver);
    }
};

let proxy = new Proxy(person, handler);
proxy.name = 'My Proxy';
proxy.age = 39;

console.log(person);


let obj = new foo();
obj.city = "seoul";
obj.nation = "korea";

let proxy2 = new Proxy(obj, {
    getPrototypeOf: function (target) {
        console.log('trap called');
        return Reflect.getPrototypeOf(target);
    }
});

let proto = proxy2.__proto__;
console.log(proto.city);


class Student {
    constructor(name, age) {
        this.fullName = name;
        this.age = age;
    }
}
let stdProxy = new Proxy(Student, {
    getPrototypeOf: function (student) {
        console.log('std tarp called');
        return Reflect.getPrototypeOf(student);
    },
    setPrototypeOf: function (student, proto) {
        console.log('std set called' + proto);
        let result = Reflect.setPrototypeOf(student, proto);
        console.log(result);
        return result;
    },
    isExtensible: function (student) {
        console.log('std isExtensible called');
        return Reflect.isExtensible(student);
    },
    preventExtensions: function (student) {
        console.log('prevent property');
        return Reflect.preventExtensions(student);
    }
});
let stdProto = stdProxy.__proto__;
let jinam = new Student("jinam", 39);
console.log(jinam.fullName);

let setChecker = Object.setPrototypeOf(stdProxy, jinam);
jinam.fullName = "leejinam";
console.log(setChecker.fullName);

let isExtChecker = Object.isExtensible(stdProxy, jinam);
jinam.gender = "men";

let preventExtensionsCheker = Object.preventExtensions(stdProxy, jinam);
jinam.habit = "discover new tech";

let myObj = {};
let defineProxy = new Proxy(myObj, {
    defineProperty: function (student, prop, descriptor) {
        console.log('defined');
        Reflect.defineProperty(student, prop, descriptor);
        return true;
    },
    getOwnPropertyDescriptor: function (myObj, prop) {
        return Reflect.getOwnPropertyDescriptor(myObj, prop);
    }
});
myObj.writable = false;
myObj.enumerable = true;
myObj.configurable = 100;
myObj.value = 100;
let defineProperty = Object.defineProperty(defineProxy, 'key', myObj);
console.log(myObj);

let descriptor = Object.getOwnPropertyDescriptor(defineProperty, 'key');
console.log(descriptor);


let list = {a: 10, b: 20};
let hgProxy = new Proxy(list, {
    has: function (target, prop) {
        console.log('is has??')
        let result = Reflect.has(target, prop);
        return result;
    },
    get: function (target, prop, receiver) {
        if (prop === "a") {
            console.log('allowed property');
            let result = Reflect.get(target, prop);
            return result;
        }
        else {
            return "not allowed";
        }
    },
    deleteProperty: function (target, prop) {
        if (prop === "a") {
            console.log("not allowed")
            return false;
        }
        else {
            Reflect.deleteProperty(target, prop);
            return true;
        }
    }
});
let isHas = 'a' in hgProxy;
console.log(isHas);

console.log(hgProxy.a);

let deleteResult = delete hgProxy.a;
console.log(deleteResult);

deleteResult = delete hgProxy.b;
console.log(deleteResult);



const birthInfo = {
    name: "leejinam",
    birth: "19810204",
    gender: "men"
};

const birthProxy = new Proxy(birthInfo, {
    set: function (info, key, value, receiver) {
        if (key === "birth") {
            throw new Error('this is read-only property');
        }
        return Reflect.set(info, key, value, receiver);
    }
});

//birthProxy.birth = "19991010";
birthProxy.name = "waldo";
console.log(birthProxy);