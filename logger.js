

	console.log(__filename);
	console.log(__dirname);
	var url = 'http://logger.io/log';

	function log(message){
		// Sending and HTTP request
		console.log(message);
	}

	module.exports = log;
	// module.exports.log = log;
	// exports.log = log;



// We don't need this, keep url private
// module.exports.endPoint = url;