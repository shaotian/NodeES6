/**
 * Created by Belief on 16/7/28.
 */

/*class RangeIterator {
    constructor(start, stop) {
        this.start = start;
        this.stop = stop;
    }
    [Symbol.iterator](){
        return this;
    }
    next(){
        if (this.start < this.stop) {
            return {done: false, value: this.start++};
        } else {
            return {done: true, value: undefined}
        }
    }
}

for (let v of new RangeIterator(2, 10)){
    console.log(v);
}*/
/*
function Obj(value) {
    this.value = value;
    this.next = null;
}
Obj.prototype[Symbol.iterator] = function () {
    let current = this;

    let iterator = {
        next(){
            if (current) {
                var value = current.value;
                var done = false;
                current = current.next;
                return {
                    done: done,
                    value:value
                };
            } else {
                return {
                    done: true
                };
            }
        }

    };
    return iterator;
};
let one = new Obj(1);
let two = new Obj(2);
let three = new Obj(3);
one.next = two;
two.next = three;
for (let i of one) {
    console.log(i);
}*/

/*
let obj = {
    data: ['Hello', 'World', 'I', 'am', 'shaotian', 'ma'],
    [Symbol.iterator]() {
        let i = 0;
        let self = this;
        return {
            next() {
                if (i < self.data.length) {
                    return {done:false, value:self.data[i++]};
                } else  {
                    return {done: true, value: undefined};
                }
            }
        }
    }
};
for (let s of obj) {
    console.log(s);
}*/

/*
let obj = {};
obj[Symbol.iterator] = function(){
    let i = 0;
    return {
        next() {
            if (i < 10) {
                return {value: i++, done: false};
            } else {
                return {value: undefined, done: true};
            }
        }
    }
};

// for (let i of obj) {
//     console.log(i);
// }

function iter(obj) {
    let iterator = obj[Symbol.iterator]();
    let result = iterator.next();
    while (!result.done) {
        console.log(result.value);
        result = iterator.next();
    }

}

iter(obj);*/

let set = new Set().add('a').add('b').add('c');
printArray([...set]);
let [first, ...reset] = set;
console.log("first:" + first);
printArray(reset);
function printArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        var r = arr[i];
        console.log(r);
    }
}
