'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('series', {
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

      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      season_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    
  }
};
