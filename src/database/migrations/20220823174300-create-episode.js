'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('episodes', {
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

      duration: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      serie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'series', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      season: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      image: {
        type: Sequelize.STRING,
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
