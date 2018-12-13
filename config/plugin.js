'use strict';

// had enabled by egg
// exports.static = true;
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
// exports.alinode = {
//   enable: true,
//   package: 'egg-alinode',
// };
exports.sessionRedis = {
  enable: true,
  package: 'egg-session-redis',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};