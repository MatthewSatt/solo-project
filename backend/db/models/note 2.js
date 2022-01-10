'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {models: 'Users'}
    },
    notebookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {models: 'Notebooks'}
    },
    title: {
      type: DataTypes.STRING(45)
    },
    content: {
      type: DataTypes.TEXT
    },
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
    Note.belongsTo(models.User, {foreignKey: 'userId'})
    Note.belongsTo(models.Notebook, {foreignKey: 'notebookId'})
  };
  return Note;
};
