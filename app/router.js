'use strict';
// http://sunshinelzb.coding.me/#cae2c78a4d534a15a75609aa6e1072dd
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/blog')(app);
  require('./router/user')(app);
  require('./router/comment')(app);
  require('./router/catalog')(app);
  require('./router/collect')(app);
};
