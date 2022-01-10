'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo11@moose.io',
        username: 'Demo-moose',
        hashedPassword: bcrypt.hashSync('kellyschool'),
      },
      {
        email: 'matty@dapwerwer.io',
        username: 'sammy',
        hashedPassword: bcrypt.hashSync('whatever'),
      },
      {
        email: 'korina@bazdf.io',
        username: 'Demo-barry',
        hashedPassword: bcrypt.hashSync('tommy'),
      },
      {
        email: 'demo@aol.io',
        username: 'Demo-guy',
        hashedPassword: bcrypt.hashSync('aceventura'),
      },
      {
        email: 'Trikkerider2@gmail.com',
        username: 'Trikkerider',
        hashedPassword: bcrypt.hashSync('lgvx8300'),
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'Demo-moose', 'sammy', 'Demo-barry', 'Demo-guy', 'Trikkerider'] }
    }, {});
  }
};
