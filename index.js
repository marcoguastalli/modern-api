const hapi = require('hapi');
const mongoose = require('mongoose');

const server = hapi.server({
	port: 4000,
	host: 'localhost'
});

mongoose.connect('mongodb://localhost/local');

mongoose.connection.once('open', () => {
	console.log('connected to database');
});

const init = async () => {
	server.route([
		{
			method: 'GET',
			path: '/',

			handler: (req, reply) => {
				return "<h1>My Modern API with mongoose</h1>";
			}
		}
	]);
	await server.start();
	console.log(`Server running at: ${server.info.uri}`);
}

init();