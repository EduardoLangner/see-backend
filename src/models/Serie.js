const {Model, DataTypes} = require('sequelize')

class Serie extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            genre_id: DataTypes.INTEGER,
            parental_rating: DataTypes.STRING,
            evaluation: DataTypes.INTEGER,
            year: DataTypes.INTEGER,
            season_quantity: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = Serie