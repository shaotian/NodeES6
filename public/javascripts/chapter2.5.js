/**
 * Created by shaotian on 16-6-29.
 */
'use strict';
global.a = 1;
a = 2;

console.log(global.a);

var b = 3;
let c = 5;
console.log(this.b);
console.log(this.c);
