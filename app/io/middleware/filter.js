'use strict';

module.exports = () => {
	// 这个中间件的作用是将接收到的数据再发送给客户端

	return async (ctx, next) => {
		console.log('~~~~~filter~~~~~~~')
		ctx.socket.emit('res', 'packet received!');
		console.log('packet:', this.packet);
		await next();
  };
};
