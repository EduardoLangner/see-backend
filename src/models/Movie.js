const {Model, DataTypes} = require('sequelize')

class Movie extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            genre_id: DataTypes.INTEGER,
            parental_rating: DataTypes.STRING,
            duration: DataTypes.STRING,
            year: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = Movie