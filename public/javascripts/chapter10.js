/**
 * Created by shaotian on 16-7-5.
 */
/*
var s = Symbol();
console.log(typeof s);
var s1 = Symbol('foo');
console.log(s1);
*/
var mySymbol = Symbol();
// var a = {};
// a[mySymbol] = 'Hello';
var a = {
    [mySymbol]: 'Hello'
};
// var a = {};
// Object.defineProperty(a, mySymbol, {value: 'Hello'});
console.log(a[mySymbol]);

