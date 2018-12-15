'use strict';

module.exports = app => {
	class RenderController extends app.Controller {
		async index() {
			this.ctx.body = "hello World";
		}
	}
	return RenderController;
};