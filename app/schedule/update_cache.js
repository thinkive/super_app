const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '10s', // 1 分钟间隔
      // // 每三小时准点执行一次
      // cron: '0 0 */3 * * *',
      type: 'all', // 指定所有的 worker 都需要执行
      // env: [ 'prod' ],
      // immediate: true,//启动立即执行一次
      disable: false // true定时任务不会被启动，默认false
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    this.logger.info('定时任务执行了')
    const res = await this.ctx.curl('http://127.0.0.1:7003/api/blog', {
      dataType: 'json',
    });
    this.ctx.app.cache = res.data;
  }
}

module.exports = UpdateCache;