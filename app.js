'use strict';
const RemoteErrorTransport = require('./app/transport/remoteErrorTransport.js');
module.exports = app => {
  // 注意：在 beforeStart 中不建议做太耗时的操作，框架会有启动的超时检测。
  app.beforeStart(async () => {
    // 启动的时候创建表force为true 每次都会删除表重建，false会检测代码中创建的model文件在程序执行时创建表
    await app.modelmysql.sync({
      force: false,
    })
    // 应用会等待这个函数执行完成才启动
    // 示例：请求一个 npm 模块信息
    const result = await app.curl('https://registry.npmjs.com/egg/latest', {
      // 自动解析 JSON response
      dataType: 'json',
      // 3秒超时
      timeout: 10000,
    });
    app.cities = result.data
    console.log('~~~~~~~~系统当前运行环境:~~~~~~~~~~~~~~~~~~~~~~~' + app.config.env)
    app.logger.error('~~~~~~~~~~~app.logger.error~~~~~~~~~~~~' + app.config.keys)
    app.logger.debug('~~~~~~~~~~~app.logger.debug~~~~~~~~~~~~' + app.config.keys)
    app.logger.warn('~~~~~~~~~~~app.logger.warn~~~~~~~~~~~~' + app.config.keys)
    app.logger.info('~~~~~~~~~~~app.logger.info~~~~~~~~~~~~' + app.config.keys)

    // 也可以通过以下方式来调用 Service
    // const ctx = app.createAnonymousContext();
    // app.cities = await ctx.service.cities.load();

    // app.runSchedule('update_cache'); // 启动的时候自动启动定时任务
  });

  app.once('server', server => {
    // websocket
    app.logger.info('~~~~~~~~~~~~~~~~~~server~~~~~~~~~~~~~~~~~~~~~~')
  });
  app.on('error', (err, ctx) => {
    // report error
    app.logger.info('~~~~~~~~~~~~~~~~~~error~~~~~~~~~~~~~~~~~~~~~~')
  });
  app.on('request', ctx => {
    // log receive request
    app.logger.info('~~~~~~~~~~~~~~~~~~request~~~~~~~~~~~~~~~~~~~~~~')
  });
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
    app.logger.info('~~~~~~~~~~~~~~~~~~response~~~~~~~~~~~~~~~~~~~~~~')
  });

  // app.js 中给 errorLogger 添加 transport，这样每条日志就会同时打印到这个 transport 了
  // app.getLogger('errorLogger').set('remote', new RemoteErrorTransport({ level: 'ERROR', app }));
  // 在中间件最前面统计请求时间
  app.config.coreMiddleware.unshift('report');
}
