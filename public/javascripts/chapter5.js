/**
 * Created by shaotian on 16-7-1.
 */
'use strict';
console.log(new RegExp("xyz", "i"));
// console.log((new RegExp(/xyz/i,'i')).flags);
console.log("\u{20BB7}");
//
var s = "aaa-aa-a";
var r1 = /a+/g;
// var r2 = /a+/y;
console.log(r1.exec(s));
console.log(r1.exec(s));
console.log(r1.exec(s));