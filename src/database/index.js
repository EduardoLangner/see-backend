const Sequelize  = require('sequelize')
const dbConfig = require('../config/database')

const Genre = require('../models/Genre')
const Movie = require('../models/Movie')
const Serie = require('../models/Serie')
const Episode = require('../models/Episode')
const User = require('../models/User')
const List = require('../models/List')

const connection = new Sequelize(dbConfig)

Genre.init(connection)
Movie.init(connection)
Serie.init(connection)
Episode.init(connection)
User.init(connection)
List.init(connection)

console.log('\nDatabase connection successful!')

module.exports = connection