// require Sequelize
var Sequelize = require('sequelize');

// setup the mysql connection information
var source = {
            jaws: {
                port: 3306,
                host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
                user: 'nqi21w0c7vo4ala2',
                password: 'ssq3hxlsu0j28djr',
                database: 'jtvmwxjacrncmpiz'
            },
            jeremiah: {
                port: 8889,
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'kwerries'
            },
            jasmine:{
                port: 3306,
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'kwerries'
            },
            jerome:{
                port: 3306,
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'kwerries'
            }
        };

var db = source.jeremiah;

// connect to the database and log the error or connect as ID
var sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  port: db.port,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

// export the connection variable for accessing mysql database info
module.exports = sequelize;