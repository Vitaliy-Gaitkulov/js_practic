'use strict';

const PROTOCOL = 'http://';
const SERVER_IP = '127.0.0.1:3000';
const path = '/path/';

function createQuery(path){
    const url = `${PROTOCOL}${SERVER_IP}${path}`;
    return url;
}

console.log(createQuery(path));