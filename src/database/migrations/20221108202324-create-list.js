'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('lists', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      title: {
        type: Sequelize.STRING, 
        allowNull: false,
      }, 

      description: {
        type: Sequelize.STRING(1000), 
        allowNull: false,
      }, 

      genre_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'genres', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      parental_rating: {
        type: Sequelize.STRING,
        allowNull: false, 
      },

      duration: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      season_quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    
  }
}
