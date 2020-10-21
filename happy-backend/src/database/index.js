const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Institution = require('../models/Institution')

const connection = new Sequelize(dbConfig)

Institution.init(connection)

module.exports = connection