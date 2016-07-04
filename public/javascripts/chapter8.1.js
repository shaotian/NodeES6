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
function log(x, y = 'World') {
    console.log(x,y)
}

log('Hello');
log('Hello', 'China');
log('Hello', '');