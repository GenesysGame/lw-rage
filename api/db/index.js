// ORM Setting

const Sequelize = require('sequelize');
const dbConfig = require('./config');

const sequelize = new Sequelize('renade', dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'mysql'
});

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
module.exports.config = dbConfig;

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });

const AccountModel = require('./model/account');
module.exports.AccountModel = AccountModel;
const CharacterModel = require('./model/character');
module.exports.CharacterModel = CharacterModel;

//sequelize.sync({ force: false, alter: true });
sequelize.sync({ });
