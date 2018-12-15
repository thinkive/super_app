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
    middleware: ['errorHandler', 'gzip'],//gzip和compress不能同时使用
    keys: appInfo.name + '_1520690141955_3949',
    // 日志分为 NONE，DEBUG，INFO，WARN 和 ERROR 5 个级别 ,
    // 默认只会输出 INFO 及以上（WARN 和 ERROR）的日志到文件中。
    logger: {
      encoding: 'utf-8', // 默认
      level: 'INFO',// // 默认只会输出 INFO 及以上（WARN 和 ERROR的日志到终端中，NONE关闭日志 ，DEBUG 打印所有
      consoleLevel: 'DEBUG', // 默认只会输出 INFO 及以上（WARN 和 ERROR的日志到终端中
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
    compress: {
      threshold: 1024
    },
    sequelize: {
			delegate: 'modelmysql',
			baseDir: 'modelmysql',
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
      benchmark: true,
      define: {
        freezeTableName: false,
        underscored: true,
      }
    },
    security: {
      csrf: {
        enable: false,// 临时关闭csrf验证
      },
      domainWhiteList: [ 'http://127.0.0.1' ], // 跨域请求白名单
    },
    cors: {
      credentials: true,
    },
    session: { // 默认配置如下
      key: 'EGG_SESS',
      maxAge: 24 * 3600 * 1000, // 1 天
      httpOnly: true,
      encrypt: true,
      renew: true,// 延长会话，默认false
    },
    redis: {
      client: {
        host: '115.29.145.75',
        port: '6379',
        password: '217891qqqq',
        db: '1',// 默认0
      },
      agent:true
    },
    mongoose: {
      url: 'mongodb://115.29.145.75:27017/admin'
    },
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.nj': 'nunjucks',
      },
    },
    multipart: {
      // will append to whilelist
      fileExtensions: [
        '.foo',
        '.apk',
      ],
      // mode: 'file',// 默认是stream模式
      // whitelist: [ // 重写白名单，只允许png格式
      //   '.png ',
      // ]
    },
    alinode:{
      // 从 `Node.js 性能平台` 获取对应的接入参数
      appid: '77534',
      secret: 'e2300b3052f6ea8cba93b7629dd0e3307b3064d0',
    },
    i18n: {
      // 默认语言，默认 "en_US"
      defaultLocale: 'zh-CN',
      // URL 参数，默认 "locale"
      queryField: 'locale',
      // Cookie 记录的 key, 默认："locale"
      cookieField: 'locale',
      // Cookie 默认 `1y` 一年后过期， 如果设置为 Number，则单位为 ms
      cookieMaxAge: '1y',
    },
		jwt: {
			secret: '123456'
	    // match: '/jwt', // optional
		}
  };
};