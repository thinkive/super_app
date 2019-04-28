'use strict'

module.exports = app => {
  app.get('/post', 'post.index')
  app.get('/post/:id', 'post.edit')
  app.get('/post/delete/:id', 'post.delete')
  app.post('/post/update/:id', 'post.update')
  app.post('/post/create', 'post.create')
}
