'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'institutions',
      'images', {
      type: Sequelize.ARRAY(Sequelize.STRING),
    }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('institutions', 'images')
  }
};
