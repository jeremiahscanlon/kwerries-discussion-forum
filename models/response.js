// require the sequelize npm app
var Sequelize = require("sequelize"); 

// require the connection to the db
var sequelize = require("../config/connection.js"); 

// "response" model that matches up with DB
var response = sequelize.define("response", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	title: {
		type: Sequelize.STRING
	},
	content: {
		type: Sequelize.STRING
	},
	date_created: {
		type: Sequelize.DATE
	},
	user_fk: {
		type: Sequelize.INTEGER
	},
	kwerry_fk:{
		type: Sequelize.INTEGER
	},
	points: {
		type: Sequelize.INTEGER
	}
});

// Syncs with DB
response.sync({force: true}).then(function () {
  // Table created
  console.log('response table created')
});

// Makes the response Model available for other files (will also create a table)
module.exports = response;