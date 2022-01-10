'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notes', [
        { userId: 1, notebookId: 1, title: "The First Notebook Note", content: "The First Notebook Note Content", createdAt: new Date(), updatedAt: new Date()},
        { userId: 2, notebookId: 2, title: "The Second Notebook Note", content: "The Second Notebook Note", createdAt: new Date(), updatedAt: new Date() },
        { userId: 3, notebookId: 3, title: "Math Note", content: "The Math Notebook Note", createdAt: new Date(), updatedAt: new Date() },
        { userId: 4, notebookId: 4, title: "Coding Note", content: 'asdfasdfasd', createdAt: new Date(), updatedAt: new Date() },
        { userId: 5, notebookId: 5, title: "Art Note", content: 'asdfasdfasdffafsdf', createdAt: new Date(), updatedAt: new Date() },
        { userId: 6, notebookId: 6, title: "Personal Note", content: 'asdfasdfasdf', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Notes', null, {});
  }
};
