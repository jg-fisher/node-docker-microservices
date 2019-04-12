const Sequelize = require('sequelize')

// instance of database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: `${rootDir}/database.db`
})

// test connection
sequelize.authenticate()
    .then(() => {
        console.log("Database connection has been established.")
    })
    .catch(err => {
        console.log("Unable to connect to the database.")
    })

module.exports = sequelize