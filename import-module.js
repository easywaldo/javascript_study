import foo from './module.js';

foo();


import { area, round } from './module.js';
console.log(area());
console.log(round());


import { name as n , city as c} from './module.js';
console.log(n);
console.log(c);


import def, { name as n2, city as c2 } from './module.js';
def();
console.log(n2, c2);


import * as my_module from './module.js';
console.log(my_module);