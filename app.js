// function displayHello(nickName) {
// 	console.log('Hello There ' + nickName);
// }

// displayHello('Jeff');

// This won't work because node doesn't have window or document object
// console.log(window);

// console.log(); // global object, able to access anywhere

// setTimeout(); // Call a function with a delay like 1 or 2 seconds.
// ClearTimeout();

// setInterval();
// clearInterval();

// window.console.log

// var message = ''; // not global

// console.log(global.message); undfined because not global

// Should not make a function global because they might rewrite another same name function
// var sayHello = function(){
// }
// window.sayHello();

// console.log(module); // module is not a global object // every file is a module

// // mostly use const instead of var
// const logger1 = require('./logger');

// // console.log(logger1);

// // when it is not a function
// // logger1.log('message');

// // Another way to do it if it is a function
// logger1('message1');

// const path = require('path');

// var pathOjbect = path.parse(__filename);

// console.log(pathOjbect);

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('total memory: ' + totalMemory);

// On the server, to get the operator, javascript couldn't do it
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);





