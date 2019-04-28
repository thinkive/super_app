'use strict'

module.exports = app => {
  app.router.get('/', 'home.render')

  app.router.get('/ajax', app.controller.multipart.ajax.show)
  app.router.post('/ajax', app.controller.multipart.ajax.upload)

  app.router.get('/form', app.controller.multipart.form.show)
  app.router.post('/form', app.controller.multipart.form.upload)

  app.router.get('/multiple-file', app.controller.multipart.multiple.show)
  app.router.post('/multiple-file', app.controller.multipart.multiple.upload)

  app.router.get('/buffer', app.controller.multipart.buffer.show)
  app.router.post('/buffer', app.controller.multipart.buffer.upload)
}
