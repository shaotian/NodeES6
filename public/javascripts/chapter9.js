/**
 * Created by shaotian on 16-7-5.
 */

/*
var foo = 'bar';
// var baz = {foo};
// console.log(baz);
var baz = {foo:foo};
console.log(baz);

function f(x,y) {
    return {x,y};
}
console.log(f('ma', 'shaotian'));

var o = {
    testMethod(arg){
        console.log(arg + "haha");
    },
    testMethod2: function (arg) {
        console.log(arg + "hehe");
    },
    name: '老王'
};
o.testMethod(10);
o.testMethod2(20);
console.log(o.name);
o.testMethod3 = function (arg) {
    console.log(arg + 'hahe');
};
o.testMethod3(30);
o.oldName = "张三";
console.log(o.oldName);
o.testMethod4 = (arg) => console.log(arg + "heha");
o.testMethod4(40);
console.log(o);
*/
/*
function getPoint() {
    var x = 1;
    var y = 10;
    return {x,y};
}

console.log(getPoint());
*/
/*
var ms = {};
function getItem(key) {
    return key in ms ? ms[key] : null;
}

function setItem(key, value) {
    ms[key] = value;
}

function clear() {
    ms = {};
}

module.exports = {getItem, setItem, clear};

var cart = {
    _wheels: 4,
    get wheels() {
        return this._wheels;
    },
    set wheels(value) {
        if (value < this._wheels) {
            throw new Error('数值太小了！');
        }
        this._wheels = value;
    }
};

console.log(cart.wheels);

var obj = {
    * m() {
        yield 'hello world';
    }
};
obj['a' + 'bc'] = 123;
console.log(obj);

var obj2 = {
    ['foo']: true,
    ['a' + ' bc']: 123,
    ['h' + ' llow'](x){
        console.log("hello world " + x);
    }
};
console.log(obj2);
obj2['h llow']('fuck');
*/
'use strict';
/*
var person = {
    sayName: function () {
        console.log(this.name);
    },
    get firstName() {
        return 'Nicholas';
    }
};
console.log(person.firstName.name);
console.log(person.sayName.name);
console.log((new Function()).name);
*/
/*
console.log(Object.is('foo', 'foo'));
console.log(Object.is({}, {}));
console.log(Object.is(NaN, NaN));
console.log(Object.is(+0, -0));

console.log();

console.log('foo' === 'foo');
console.log({} === {});
console.log(NaN === NaN);
console.log(+0 === -0);

console.log();

console.log('foo' == 'foo');
console.log({} == {});
console.log(NaN == NaN);
console.log(+0 == -0);
*/
/*
var target = {a: 1};
var source1 = {b: 2};
var source2 = {c: 3};
Object.assign(target, source1, source2);
console.log(target);
*/

/*
var target = {a: 1,b: 3};
var source1 = {b: 2, c:5};
var source2 = {c: 3};
Object.assign(target, source1, source2);
console.log(target);
*/
/*
var obj = {};
Object.assign(obj, {
    test1(){
        console.log("test1 haha");
    },
    test2(){
        console.log("test2 hehe");
    }
});

obj.test1();
obj.test2();

class Person{}

Object.assign(Person.prototype, {
    test1(){
        console.log("test1 haha");
    },
    test2(){
        console.log("test2 hehe");
    }
});
var per = new Person();
per.test1();
per.test2();
*/
let obj = {foo: 123,abc:'haha',method2(){}};
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Reflect.ownKeys(obj));