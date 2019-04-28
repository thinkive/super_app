'use strict'

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE,
  } = app.Sequelize

  const Catalog = app.modelmysql.define('catalog', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      validate: {
        min: 2,
        max: 50,
      },
    },
    created_at: DATE,
    updated_at: DATE,
  })

  Catalog.associate = function () {
    app.modelmysql.Catalog.belongsTo(app.modelmysql.User)
    app.modelmysql.Catalog.hasMany(app.modelmysql.Blog)
  }

  return Catalog
}
