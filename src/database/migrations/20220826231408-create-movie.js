'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('movies', {
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
        type: Sequelize.STRING, 
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

      evaluation: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      duration: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      comment: {
        type: Sequelize.STRING,
        allowNull: true,
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
