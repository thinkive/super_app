'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE,
  } = app.Sequelize;

  const Authority = app.modelmysql.define('authority', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(30),
    },
    created_at: DATE,
    updated_at: DATE,
  });

  Authority.associate = function() {
    app.modelmysql.Authority.hasMany(app.modelmysql.User);
  };


  return Authority;
};
