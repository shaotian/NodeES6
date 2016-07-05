/**
 * Created by Administrator on 2016/7/5.
 */

/*
var shapeType = {
    triangle: Symbol()
};

function getArea(shape, options) {
    var area = 0;
    switch (shape) {
        case shapeType.triangle:
            area = options.width * options.height * .5;
            break;
    }
    return area;
}

console.log(getArea(shapeType.triangle, {width: 100, height: 100}));
*/
/*
var obj = {};
var foo = Symbol("foo");
Object.defineProperty(obj, foo, {value: 'foobar'});
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
*/
"use strict";
/*
var size = Symbol('size');
class Collection {
    constructor() {
        this[size] = 0;
    }
    add(item) {
        this[this[size]++] = item;
    }
    static sizeOf(instance) {
        return instance[size];
    }
}

var x = new Collection();
console.log(Collection.sizeOf(x));
x.add('foo');
console.log(Collection.sizeOf(x));

console.log(Object.keys(x));
console.log(Object.getOwnPropertyNames(x));
console.log(Object.getOwnPropertySymbols(x));
*/
/*
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2);
*/
/*
console.log(Symbol('foo') === Symbol('foo'));
console.log(Symbol.for('foo') === Symbol.for('foo'));
console.log(Symbol.keyFor(Symbol('bar')));
console.log(Symbol.keyFor(Symbol.for('bar')));
*/
/*
class MyClass {
    [Symbol.instances](foo) {
        return true;
    }
}

var o = new MyClass();
console.log(o instanceof Array);
*/
/*
let arr1 = ['c', 'd'];
console.log(['a', 'b'].concat(arr1, 'e', 'f'));
let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
console.log(['a', 'b'].concat(arr2, 'e', 'f'));
*/
/*
let obj = {length: 2, 0: 'c', 1: 'd'};
console.log(['a', 'b'].concat(obj, 'e', 'f'));
obj[Symbol.isConcatSpreadable] = true;
console.log(['a', 'b'].concat(obj, 'e', 'f'));
*/
class A1 extends Array {
    [Symbol.isConcatSpreadable]() {
        return true;
    }
}
class A2 extends Array {
    [Symbol.isConcatSpreadable]() {
        return false;
    }
}
let a1 = new A1();
a1[0] = 3;
a1[1] = 4;
let a2 = new A2();
a2[0] = 5;
a2[1] = 6;
console.log([1, 2].concat(a1).concat(a2));
console.log(JSON[Symbol.toStringTag]);
console.log(Map.prototype[Symbol.toStringTag]);
