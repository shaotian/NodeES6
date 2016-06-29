/**
 * Created by shaotian on 16-6-29.
 */
'use strict';
console.log([[1, 2], [3, 4]].map((x,y) => x + y));

function move({x = 0, y = 0} = {}) {
    return [x, y];
}
move();