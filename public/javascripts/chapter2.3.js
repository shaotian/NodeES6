/**
 * Created by shaotian on 16-6-29.
 */
'use strict';
{
    const PI = 3.1415;
}
// console.log(PI);
// var message = "hello";
// let message = "haha";
// const message = "Goodbay";
const foo = Object.freeze({});
foo.prop = 123;
// foo = {};
console.log(foo.prop);

