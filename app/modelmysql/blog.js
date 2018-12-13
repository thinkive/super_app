'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    TEXT,
    DATE,
  } = app.Sequelize;

  const Blog = app.modelmysql.define('blog', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
      validate: {
        min: 2,
        max: 50,
      },
    },
    summary: {
      type: STRING,
      validate: {
        min: 2,
        max: 255,
      },
    },
    content: {
      type: TEXT,
    },
    readSize: {
      type: INTEGER,
      defaultValue: 0,
    },
    commentSize: {
      type: INTEGER,
      defaultValue: 0,
    },
    tags: {
      type: STRING(100),
    },
    created_at: DATE,
    updated_at: DATE,

  });

  Blog.associate = function() {
    app.modelmysql.Blog.belongsTo(app.modelmysql.User);
    app.modelmysql.Blog.belongsTo(app.modelmysql.Catalog);
    app.modelmysql.Blog.hasMany(app.modelmysql.Comment, {
      as: 'comment',
    });
  };
  return Blog;
};
