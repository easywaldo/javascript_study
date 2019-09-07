function* myGenerator() {
    for (let i = 0; i < 10; i++) {
        yield i;
    }
};

let gen = myGenerator();
for (let value of gen) {
    console.log(value);
}

function* myFriuts() {
    yield "apple";
    yield "watermelon";
    yield "strawberry";
    yield "grape";
    yield "orange";
    yield "tomato";
    yield "banana";
}

for (let f of myFriuts()) {
    console.log(f);
}