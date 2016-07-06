/**
 * Created by shaotian on 16-6-29.
 */

'use strict';

console.log('\uD842\uDFB7');
console.log('\u20BB7');
console.log('\u{20BB7}');
console.log('\u{41}\u{42}\u{43}');
let hello = 123;
// console.log(hell\u{6f});
console.log('\z' === 'z');
// console.log('\172' == 'z'); // 八进制 Octal literals are not allowed in strict mode
console.log('\x7A' === 'z');
console.log('\u007A' === 'z');
console.log('\u{7A}' === 'z');
var s = "𠮷a";
console.log(s.length);
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(1));
// console.log(s.charPointAt(0));
// console.log(s.charPointAt(1));
