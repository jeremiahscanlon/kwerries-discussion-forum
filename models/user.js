// require the sequelize npm app
var Sequelize = require("sequelize"); 

// require the connection to the db
var sequelize = require("../config/connection.js"); 

// "user" model that matches up with DB
var user = sequelize.define("user", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	first_name: {
		type: Sequelize.STRING
	},
	last_name: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	photo_url: {
		type: Sequelize.STRING
	},
	group_fk: {
		type: Sequelize.INTEGER
	},
	points: {
		type: Sequelize.INTEGER
	}
});

// Syncs with DB
user.sync({force: true}).then(function () {
  // Table created
  console.log('user table created')
});

// Makes the user Model available for other files (will also create a table)
module.exports = user;