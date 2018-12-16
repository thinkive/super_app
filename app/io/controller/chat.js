'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async ping() {
      const message = this.ctx.args[0];
      console.log('chat :', message + ' : ' + process.pid);
      const say = await this.ctx.service.user.say();
      this.ctx.socket.emit('res', say);
    }
		async disconnect() {
    	console.log('~~~~~~~~disconnect~~~~~~~')
			const message = this.ctx.args[0];
			console.log(message);
		}
  }
  return Controller;
};
