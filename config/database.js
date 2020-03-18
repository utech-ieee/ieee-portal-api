let Sequelize = require('sequelize');
let fs = require('fs');
let path = require('path');
let host = 'localhost'
let credentialsJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname,'./config.json')));

let username = credentialsJSON.development.username;
let database = credentialsJSON.development.database;
let password = credentialsJSON.development.password;


module.exports = new Sequelize(database, username, password, {
	host: host,
	dialect: 'mysql',
	dialectOptions: {},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	define: {
		timestamps: false
	}
});