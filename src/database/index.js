const Sequelize  = require('sequelize')
const dbConfig = require('../config/database')

const Genre = require('../models/Genre')
const Movie = require('../models/Movie')
const Serie = require('../models/Serie')
const Episode = require('../models/Episode')

const connection = new Sequelize(dbConfig)

Genre.init(connection)
Movie.init(connection)
Serie.init(connection)
Episode.init(connection)

module.exports = connection