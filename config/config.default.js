'use strict';

// exports.keys = 'my keys';
// 配置 logger 文件的目录，logger 默认配置由框架提供
// module.exports = {
//     keys: 'my keys',
//     logger: {
//         dir: 'logs', // 默认目录
//     },
// };
const path = require('path');
module.exports = appInfo => {
  // console.log(appInfo.pkg)
  // console.log(appInfo.name)
  // console.log(appInfo.baseDir)
  // console.log(appInfo.HOME)
  // console.log(appInfo.root)

  return {
    middleware: [ 'gzip', 'compress' ],

    keys: appInfo.name + '_1520690141955_3949',
    // 日志分为 NONE，DEBUG，INFO，WARN 和 ERROR 5 个级别 ,
    // 默认只会输出 INFO 及以上（WARN 和 ERROR）的日志到文件中。
    logger: {
      encoding: 'utf-8', // 默认
      level: 'INFO',// 默认
      consoleLevel: 'NONE', // 打开终端日志 默认
      dir: path.join(appInfo.baseDir, 'logs'),
      appLogName: `${appInfo.name}-web.log`,
      coreLogName: 'egg-web.log',
      agentLogName: 'egg-agent.log',
      errorLogName: 'common-error.log',
    },
    // 日志大小切割 默认按天切割(在凌晨00:00)
    logrotator: {
      enable: true,
      // filesRotateBySize: [ //日志按照大小
      //     path.join(appInfo.root, 'logs', appInfo.name, 'egg-web.log'),
      // ],
      // maxFileSize: 2 * 1024 * 1024 * 1024, // 当文件超过 2G 时进行切割。
      // filesRotateByHour: [ // 日志按照小时
      //     path.join(appInfo.root, 'logs', appInfo.name, 'common-error.log'),
      // ],
    },

    // 配置 gzip 中间件的配置
    // enable：控制中间件是否开启。
    // match：设置只有符合某些规则的请求才会经过这个中间件。
    // ignore：设置符合某些规则的请求不经过这个中间件
    gzip: {
      match(ctx) {
        // 只有 ios 设备才开启
        const reg = /iphone|ipad|ipod/i;
        return reg.test(ctx.get('user-agent'));
      },

      threshold: 1024, // 小于 1k 的响应体不压缩
    },
    sequelize: {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      dialectOptions: {
        charset: 'utf8mb4',
      },
      database: 'blog',
      host: '115.29.145.75',
      port: '3306',
      username: 'root',
      password: '217891qqqq',
      timezone: '+08:00',
    },
    security: {
      csrf: {
        enable: false,
      },
      domainWhiteList: [ 'http://119.29.151.195' ],
    },
    cors: {
      credentials: true,
    }
  };
};