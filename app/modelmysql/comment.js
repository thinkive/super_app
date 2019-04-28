'use strict'

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE,
  } = app.Sequelize

  const Comment = app.modelmysql.define('comment', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: STRING,
    },
    created_at: DATE,
    updated_at: DATE,
  })

  Comment.associate = function () {
    app.modelmysql.Comment.belongsTo(app.modelmysql.User)
    app.modelmysql.Comment.belongsTo(app.modelmysql.Blog)
  }

  return Comment
}
