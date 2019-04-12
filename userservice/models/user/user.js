const Sequelize = require('sequelize');
const sequelize = require('../../dataAccess/sequelize')

// table names are pluralized by default
// id, createdAt and updatedAt are also added to every model
class User extends Sequelize.Model {}
User.init({
   name: Sequelize.STRING,
   age: Sequelize.STRING,
   }, { sequelize, modelName:'user'})

module.exports = User

