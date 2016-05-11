// require the sequelize npm app
var Sequelize = require("sequelize"); 

// require the connection to the db
var sequelize = require("../config/connection.js"); 

// "group" model that matches up with DB
var group = sequelize.define("group", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	photo_url: {
		type: Sequelize.STRING
	},
	points: {
		type: Sequelize.INTEGER
	}
});

// Syncs with DB
group.sync({force: true}).then(function () {
  // Table created
  console.log('group table created')
});

// Makes the group Model available for other files (will also create a table)
module.exports = group;