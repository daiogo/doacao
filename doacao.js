/*
	DO(AÇÂO) webservice
*/

var express = require('express');					// Express.js

// Export API methods
module.exports = function() {
	// Creates and Express.js app
	var app = express();

	app.use(express.static(__dirname + '/public'));

	/* =====================FRONT END ROUTES=====================*/

	// Index page
	app.get('/', function(req, res) {
        res.sendFile('/public/index.html'); // load our public/index.html file
    });
	
	app.get('/cadastroDoador', function(req, res) {
        res.sendFile(__dirname + '/public/views/cadastroDoador.html');
    });
	
	app.get('/cadastroOng', function(req, res) {
        res.sendFile(__dirname + '/public/views/cadastroOng.html');
    });
	
	app.get('/obrigado', function(req, res) {
        res.sendFile(__dirname + '/public/views/obrigado.html');
    });
	
	return app;
}
