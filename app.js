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

console.log(module); // module is not a global object // every file is a module

//22:50