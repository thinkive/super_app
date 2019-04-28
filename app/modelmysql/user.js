'use strict'

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE,
  } = app.Sequelize

  const User = app.modelmysql.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING,
    },
    password: {
      type: STRING,
    },
    created_at: DATE,
    updated_at: DATE,
  })

  User.associate = function () {
    app.modelmysql.User.hasMany(app.modelmysql.Blog, {
      as: 'blogs',
    })
    app.modelmysql.User.hasMany(app.modelmysql.Catalog, {
      as: 'catalogs',
    })
    app.modelmysql.User.hasMany(app.modelmysql.Comment, {
      as: 'comments',
    })
    app.modelmysql.User.belongsTo(app.modelmysql.Authority)
  }

  return User
}
