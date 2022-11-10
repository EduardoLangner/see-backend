const {Model, DataTypes} = require('sequelize')

class List extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            genre_id: DataTypes.INTEGER,
            parental_rating: DataTypes.STRING,
            duration: DataTypes.STRING,
            season_quantity: DataTypes.INTEGER,
            year: DataTypes.INTEGER,
            image: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = List