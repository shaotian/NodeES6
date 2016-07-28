/**
 * Created by Administrator on 2016/7/6.
 */
/*
var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log('setting ${key}');
        return Reflect.set(target, key, value, receiver);
    }
});


var proxy = new Proxy({}, {
    get: function(target, property) {
        return 35;
    }

});
console.log(proxy.time);
console.log(proxy.name);
console.log(proxy.title);

*/

/*
var target = {};
var handler = {};
var proxy = new Proxy(target,handler);
proxy.a = 100;
console.log(target.a);
*/

/*
var handler = {
    get: function(target, name) {
        if (name == 'prototype') return Object.prototype;
        return 'Hello ' + this.hasTheKey;
    },
    apply: function(target, thisBinding, args) {return args[0]; },
    construct: function (target, args) {
        return args[1];
    },
    has: function(target, propKey) {
        return true;
    },
    'hasTheKey':'has_the_keys'
};
var fproxy = new Proxy(function(x,y) {
    return x+y;
}, handler);

console.log(fproxy(1, 2));
// console.log(new fproxy(1, 2));
console.log(fproxy.prototype);
console.log(fproxy.foo);
console.log('aaa' in fproxy);
console.log(fproxy.hasTheKey);
console.log(delete fproxy['hasTheKey']);
console.log(fproxy.hasTheKey);
*/

/*
var person = {
    name: "张三"
};
var proxy = new Proxy(person, {
    get: function(target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new ReferenceError("Property\"" + property + "\" does not exist.");
        }
    }
});

console.log(proxy.name);
console.log(proxy.age);
*/

/*
function createArray(...elements) {
    let handler = {
        get(target, propKey, receiver){
            let index = Number(propKey);
            propKey = String((target.length + index) % target.length);
            return Reflect.get(target, propKey, receiver);
        }
    };
    let target = [];
    target.push(...elements);
    return new Proxy(target, handler);
}
let arr = createArray('a', 'b', 'c');
console.log(arr[-1]);
*/

/*
var pipe = (function () {
    var pipe;
    return function (value) {
        pipe = [];
        return new Proxy({}, {
            get: function (pipeObject, fnName) {
                if (fnName == 'get') {
                    return pipe.reduce(function (val, fn) {
                        return fn(val);
                    }, value)
                }
                pipe.push(global[fnName]);
                return pipeObject;
            }
        });

    }
}());

var double = n => n * 2;
var pow = n => n * n;
var reverseInt = n => n.toSource().split('').reverse().join('') | 0;

console.log(pipe(3).double.pow.reverseInt.get);
*/

/*
let validator = {
    set: function (obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw TypeError('The age is not a integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid')
            }
        }
        obj[prop] = value;
    }
};
let person = new Proxy({}, validator);
person.age = 100;
console.log(person.age)
// person.age = 'young';
console.log(person.age)
// person.age = 300;
console.log(person.age)
*/

/*
var handler = {
    get(target, key) {
        this.invarient(key,'get');
        return target[key];
    },
    set(target, key, value) {
        this.invarient(key, 'set');
        return true;
    },
    invarient(key, action) {
        if (key[0] === '_') {
            throw new Error(`Invalid attempt to ${action} private "${key}" property`);
        }
    }
};

var target = {};
var proxy = new Proxy(target, handler);
console.log(proxy._prop);
proxy._prop = 'c';
*/

/*
var target = function () {
    return 'I am the target';
};
var handler = {
    apply: function() {
        return 'I am the proxy';
    }
};

var p = new Proxy(target, handler);
console.log(p());*/

/*
var twice = {
    apply: function (target, ctx, args) {
        return Reflect.apply(...arguments) * 2;
    }
};
function sum(left, right) {
    return left + right;
}
var proxy = new Proxy(sum, twice);
console.log(proxy(1, 2));
console.log(proxy.call(null, 5, 6));
console.log(proxy.apply(null, [7, 8]));
console.log(Reflect.apply(proxy, null, [9, 10]));
*/

/*
var handler = {
    has (target, key) {
        if (key[0] === '_') {
            return false;
        }
        return key in target;
    }
};
var target = {_prop: 'foo', prop: 'foo'};
var proxy = new Proxy(target, handler)
console.log('prop' in proxy);
console.log('_prop' in proxy);
*/

var obj = {a: 10};
Object.preventExtensions(obj);
var p = new Proxy(obj, {
    has: function (target, prop) {
        return false;
    },
    get: function (target, key) {

    }
});
// 'a' in p;
console.log(p.a);