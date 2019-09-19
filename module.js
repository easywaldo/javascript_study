export default function () {
    console.log("module import");
}

export { area, round };
let x = 10;
let y = 20;

function area() {
    return x * y;
}
function round() {
    return x + y;
}


export { name, city };
let name = "waldo";
let city = "seoul";