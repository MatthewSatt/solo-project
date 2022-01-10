"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notebooks",
      [
        { userId: 1, title: "The First Notebook", createdAt: new Date(), updatedAt: new Date() },
        { userId: 2, title: "The Second Notebook", createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, title: "Math", createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, title: "Coding", createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, title: "Art", createdAt: new Date(), updatedAt: new Date() },
        { userId: 6, title: "Personal", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notebooks", null, {});
  },
};
