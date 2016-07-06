/**
 * Created by Administrator on 2016/6/30.
 */
'use strict';
var ha = 129;
console.log(`In JavaScript 
${ha}

'\n' is a line-feed`);

/*
let str = 'return `Hello ${name}`';
let func = new Function('name', str);
console.log(func('Jack'));
*/
let str = '(name) => `Hello ${name}`';
let func = eval.call(null, str);
console.log(func('Jack'));