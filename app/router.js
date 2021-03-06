'use strict'
// http://sunshinelzb.coding.me/#cae2c78a4d534a15a75609aa6e1072dd
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/blog')(app)
  require('./router/user')(app)
  require('./router/comment')(app)
  require('./router/catalog')(app)
  require('./router/collect')(app)
  require('./router/post')(app)
  // require('./router/multipart-stream')(app);
  require('./router/multipart-file')(app)
  app.get('/jwt', app.jwt, 'render.index') // use old api app.jwt
  app.get('/login', 'login.index')
  app.get('/success', app.jwt, 'success.index') // is setting in config.jwt.match

  // app.io.of('/chat')
  app.io.of('/').route('chat', app.io.controller.chat.ping)
  // app.io.route('disconnect', app.io.controller.chat.disconnect);

}
