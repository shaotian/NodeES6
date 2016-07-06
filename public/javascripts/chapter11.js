/**
 * Created by Administrator on 2016/7/6.
 */
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


