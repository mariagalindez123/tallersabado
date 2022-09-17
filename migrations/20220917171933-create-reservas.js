'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reservas_numero: {
        type: Sequelize.INTEGER
      },
      inicio_fecha: {
        type: Sequelize.DATE
      },
      fin_fecha: {
        type: Sequelize.DATE
      },

      idhabitaciones:{
        type:Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'habitaciones',
          },
          key: 'id'

        },
        allowNull:false
      },

      huesped_id:{
        type:Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'huespedes',
          },
          key: 'id'
        },
        allowNull:false
      },
      habitacion: {
        type: Sequelize.INTEGER
      },
      huesped: {
        type: Sequelize.INTEGER
      },

      

      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reservas');
  }
};