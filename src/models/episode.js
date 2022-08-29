const {Model, DataTypes} = require('sequelize')

class Episode extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            duration: DataTypes.STRING,
            serie_id: DataTypes.INTEGER,
            season: DataTypes.INTEGER,
            comment: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Episode