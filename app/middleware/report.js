'use strict'
module.exports = () => {
  return async function (ctx, next) {
    const startTime = Date.now();
    ctx.logger.info('~~~~~~~~~~~~~~执行report中间件时间戳~~~~~~~~' + startTime)
    await next();
    // 上报请求时间
    // reportTime(Date.now() - startTime);
  }
};