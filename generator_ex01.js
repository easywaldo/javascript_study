function* myGenerator() {
    for (let i = 0; i < 10; i++) {
        yield i;
    }
};

let gen = myGenerator();
for (let value of gen) {
    console.log(value);
}