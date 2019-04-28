'use strict'

module.exports = () => {
  // 这个中间件的作用是提示用户连接与断开的，连接成功的消息发送到客户端，断开连接的消息在服务端打印
  return async (ctx, next) => {
    console.log('~~~~~~~~auth~~~~~~~~~~')
    const say = await ctx.service.user.say()
    ctx.socket.emit('res', 'auth!' + say)
    await next()
    // execute when disconnect.
    console.log('disconnect!')
    console.log('断开连接')
  }
}
