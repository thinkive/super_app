'use strict';

module.exports = app => {
	class SuccessController extends app.Controller {
		async index() {
			console.log(this.ctx.state)
			this.ctx.body = this.ctx.state.user;
		}
	}
	return SuccessController;
};