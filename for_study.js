let dataList = [
    {
        "name": "waldo",
        "age": 39
    },
    {
        "name": "joker",
        "age": 40
    },
    {
        "name": "martin",
        "age": 55
    }
];

for (let elem of dataList) {
    console.log(elem);
}

for (let property in dataList[0]) {
    console.log(property);
}