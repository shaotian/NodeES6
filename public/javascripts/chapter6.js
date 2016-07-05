/**
 * Created by shaotian on 16-7-1.
 */
'use strict';
/*
 console.log(0b100111 == 0o47); // use strict 加个o就可以了
 console.log(Number('0b100111') == Number('0o47'));

 console.log(Number.isFinite(15));
 console.log(Number.isFinite(0.8));
 console.log(Number.isFinite(NaN));
 console.log(Number.isFinite(Infinity));
 console.log(Number.isFinite(-Infinity));
 console.log(Number.isFinite('15'));
 console.log(Number.isFinite(true));

 console.log("");
 console.log(Number.isNaN(15));
 console.log(Number.isNaN(0.8));
 console.log(Number.isNaN(NaN));
 console.log(Number.isNaN(Infinity));
 console.log(Number.isNaN(-Infinity));
 console.log(Number.isNaN('15'));
 console.log(Number.isNaN(true));


 console.log("");
 console.log(Number.parseInt === parseInt);
 console.log(Number.parseFloat === parseFloat);
 */

/*

 console.log(Number.parseInt('12.34'));
 console.log(Number.parseInt('12.34#'));
 console.log(Number.parseInt('1234saf6778'));
 console.log(Number.parseFloat('12.34#'));

 console.log(Number.isInteger(25));
 console.log(Number.isInteger(25.0));
 console.log(Number.isInteger(25.1));
 console.log(Number.isInteger('15'));
 console.log(Number.isInteger(true));
 */

/*
console.log(Number.EPSILON);
console.log(0.1 + 0.2 - 0.3);
console.log(0.1 + 0.2 - 0.3 < Number.EPSILON);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Math.pow(2, 53));
console.log(Math.pow(2, 53) - 1);
console.log(Math.pow(2, 53) + 1000);
console.log(Number.MAX_SAFE_INTEGER + 2 - 990);
console.log(Number.MAX_SAFE_INTEGER + (2 - 990));
console.log(Number.MAX_SAFE_INTEGER + 2 - 990 == Number.MAX_SAFE_INTEGER + (2 - 990));
console.log("");
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 1));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER + 1));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));
*/
/*
console.log(Math.ceil(1.1));
console.log(Math.ceil(0.1));
console.log(Math.ceil(0));
console.log(Math.ceil(-0.1));
console.log(Math.ceil(-1.1));
console.log("");
console.log(Math.floor(1.1));
console.log(Math.floor(0.1));
console.log(Math.floor(0));
console.log(Math.floor(-0.1));
console.log(Math.floor(-1.1));
console.log(-0 === 0);
console.log(Math.trunc(1.1));
console.log(Math.trunc(0.1));
console.log(Math.trunc(0));
console.log(Math.trunc(-0.1));
console.log(Math.trunc(-1.1));
console.log(Math.trunc('-1.1'));
console.log(Math.trunc('true'));
console.log(Math.trunc('1.1sfd'));
console.log(0>-0);
console.log(0<-0);
*/

/*
console.log(Math.cbrt(20) == Math.pow(20, 1 / 3));
console.log([1, 2, 3].map(x => x * x));
console.log(Array.from([1, 2, 3], x => typeof x));
console.log(Array());
console.log(Array(3));
console.log(Array(3,11,8));
console.log(Array.of());
console.log(Array.of(3));
console.log(Array.of(3,11,8));
*/

/*
console.log([1, 4, -5, 10].find(x => x < 0));
console.log([1, 4, -5, 10].findIndex(x => x < 0));
console.log(['a','b','c'].fill(7));
console.log(new Array(10).fill(7,3,9));

for (let i of ['a','b','c'].keys()) {
    console.log(i);
}

for (let i of ['a','b','c'].values()) {
    console.log(i);
}
var entries = ['ma','shao','tian'].entries();
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);
console.log([1, 2, 3].includes(3, 3));
console.log([1, 2, 3].includes(3, -1));
*/

/*
var a = [1,2,3,4];
console.log([for (i of a) i * 2]);
*/
/*
console.log(Array(3));
console.log(0 in [undefined, undefined, undefined]);
console.log(0 in [, , ]);
console.log("");
[, 'a'].forEach((x, i) => console.log(i) );
console.log(['a',, 'b'].filter((x) => true ));
console.log(['a',,'b'].filter((x) => x !=='a'));
console.log(['a', , 'b'].map((x) => 1));
console.log([, 'a', undefined, null].join("#"));
console.log([, 'a', undefined, null].toString());
console.log([, 'a', undefined, null]);
console.log(Array.from(['a',,'b']));
console.log([,'a','b',,].copyWithin(2,10))
*/
var customers = [
    {
        name: 'Jack',
        age: 25,
        city: 'New Yourk'
    },
    {
        name: 'Peter',
        age: 30,
        city: 'Seattle'
    }
];

console.log(customers);