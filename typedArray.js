const buffer = new ArrayBuffer(16);
console.log(buffer.byteLength);

let numbers = new Uint32Array(buffer);
console.log(numbers);

const bf = new ArrayBuffer(32);
let floatNumbers = new Float32Array(bf);
console.log(floatNumbers);