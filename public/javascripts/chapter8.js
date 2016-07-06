/**
 * Created by shaotian on 16-7-4.
 */
/*
function log(x, y) {
    y = y || 'World';
    console.log(x,y)
}
*/
'use strict';
/*
function log(x, y = 'World') {
    console.log(x,y)
}

log('Hello');
log('Hello', 'China');
log('Hello', '');
*/
/*
function foo({x = 1,y = 5}) {

}
*/

/*
console.log((function(a,b,c){}).length);
// console.log((function(...a){}).length);
let func = (x)=> {
    console.log(x);
};

func(10);
*/

/*
function add(...values) {
    let sum = 0;
    for (let v of values) {
        sum += v;
    }
    return sum;
}
*/
/*
let sum = 0;
for (let v of [1,2,3]) {
    sum += v;
}
console.log(sum);

let func1 = function () {
    let sum = 0;
    for (let x of arguments) {
        sum += x;
    }
    console.log(arguments.sort());
};
func1(2, 3, 4, 5);
*/

/*
function add() {
    let sum = 0;
    for (let v of arguments) {
        sum += v;
    }
    console.log(sum);
}

add.apply(10);
add.apply(null, [1, 10, 100, 1000]);

let arr1 = ['a','b'];
let arr2 = ['c'];
let arr3 = ['d', 'e'];
console.log(arr1.concat(arr2, arr3));
// console.log([...arr1,...arr2,...arr3]);

let map = new Map([
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three']
]);

console.log(map.values());
*/

/*
let func2 = function foo() {
};
// console.log(foo.name);
let func = function () {

};
console.log(func.name);
console.log(func2.name);
*/

/*
let f = function (num1, num2) {
    return num1 + num2;
};
console.log(f(10, 200));

// let f2 = (num1, num2) => {return num1 + num2};
let f2 = (num1, num2) => num1 + num2;
// let f3 = x => x * x;
let f3 = (x) => {
    return x * x;
};
console.log(f2(10, 200));
console.log(f3(10));

let f4 = () => {
    var arr = [];
    for (let i in arguments) {
        arr[i] = arguments[i];
    }
    return arr;
};

console.log(f4(1, 2, 3, 4, 5));
*/

/*
console.log([2, 3, 4, 5].map(x => x * x));
console.log([2, 3, 4, 5].map(function (x) {
    return x * x;
}));
*/
/*
function foo() {
    console.log("id0:", this.id);
    return () => {
        console.log("id1:", this.id);
        return () => {
            console.log("id2:", this.id);
        }
    }
}

foo.call({id:43})()();
foo.call({id:42});
console.log((function () {
    return (()=>this.x).bind({x: 'inner'});
}).call({x:'outer'}));
*/

/*
var handler = {
    id: '123456',
    init: function () {
        setTimeout('this.doSomething()',1000);

    },
    doSomething: function (type) {
        console.log('Handling ' + type + ' for ' + this.id);
    }
};
handler.init();*/

/*
let insert1 = function (value) {
    return {
        into: function (array) {
            return {
                after: function (afterValue) {
                    array.splice(array.indexOf(afterValue) + 1, 0, value);
                    return array;
                }
            };
        }
    };
};
console.log(insert1(2).into([1, 3]).after(1));

let insert2 = (value) => {
    return {
        into: (array) => {
            return {
                after: (afterValue) => {
                    array.splice(array.indexOf(afterValue) + 1, 0, value);
                    return array;
                }
            };
        }

    };
};
console.log(insert2(2).into([1, 3]).after(1));

let insert3 = (value) => ({
    into: (array)=>({
        after: (afterValue)=> {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }
    })
});
console.log(insert3(2).into([1, 3]).after(1));

let insert4 = value => ({
    into: array => ({
        after: afterValue => {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }
    })
});
console.log(insert4(2).into([1, 3]).after(1));
*/
/*
const add1 = x => x + 1;
const mult2 = x => x * 2;
const andThenMult = mult2(add1);
andThenMult(5);
*/
/*
var ab;
ab.bind(Math.abs);
console.log(ab(-100));
*/

function tailFactorial(n, total) {
    if (n === 1) {
        return total;
    }
    return tailFactorial(n - 1, total * n);
}
function currying(fn, n) {
    return function (m) {
        return fn.call(this, m, n);
    }
}
console.log(tailFactorial(5, 1));
let factorial = currying(tailFactorial, 1);

console.log(factorial(5));

