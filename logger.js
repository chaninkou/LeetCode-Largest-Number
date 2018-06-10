var url = 'http://logger.io/log';

function log(message){
	// Sending and HTTP request
	console.log(message);
}

module.exports.log = log;

// We don't need this, keep url private
// module.exports.endPoint = url;

// function log(message1){
// 	// Sending and HTTP request
// 	console.log(message1);
// }

// module.exports = log;