require('dotenv').config()

module.exports = {

    dialect: process.env.POSTGRES_DIALECT,
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    port: process.env.POSTGRES_PORT,
    define: {
        timestamps: true,
        underscored: true,
    },
}