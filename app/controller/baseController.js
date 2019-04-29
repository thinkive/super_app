'use strict'

const Controller = require('egg').Controller

class baseController extends Controller {
  get user () {
    return this.ctx.session.user;
  }

  get session () {
    return this.ctx.session
  }
  success(data) {
    this.ctx.body = {
      success: true,
      data,
    };
  }

  fail (data) {
    this.ctx.body = {
      success: false,
      data,
    }
  }

  notFound(msg) {
    msg = msg || 'not found'
    this.ctx.throw(404, msg)
  }
}
module.exports = baseController
