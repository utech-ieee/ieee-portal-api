let Sequelize = require('sequelize');
let fs = require('fs');
let path = require('path');

let jsonData = JSON.parse(fs.readFileSync(path.resolve(__dirname,'./config.json')));

let username = json.development.username;
let database = json.development.database;
let password = json.development.password;


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