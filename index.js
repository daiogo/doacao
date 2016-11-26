/*
	Server startup file
*/

// Imports the implemented RESTful API
var doacao = require('./doacao');

// Starts server
doacao().listen(process.env.PORT || 3000);
console.log('Server up and running...');
