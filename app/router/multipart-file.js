'use strict';

module.exports = app => {
  app.router.get('/', 'home.render');

  app.router.get('/ajax', app.controller.multipartfile.ajax.show);
  app.router.post('/ajax', app.controller.multipartfile.ajax.upload);

  app.router.get('/form', app.controller.multipartfile.form.show);
  app.router.post('/form', app.controller.multipartfile.form.upload);

  app.router.get('/multiple-file', app.controller.multipartfile.multiple.show);
  app.router.post('/multiple-file', app.controller.multipartfile.multiple.upload);
};
