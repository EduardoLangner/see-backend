const {Model, DataTypes} = require('sequelize')

class Serie extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            genre_id: DataTypes.INTEGER,
            parental_rating: DataTypes.STRING,
            year: DataTypes.INTEGER,
            season_quantity: DataTypes.INTEGER,
            image: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Serie