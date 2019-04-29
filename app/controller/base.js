'use strict'

const Controller = require('egg').Controller

class ViewController extends Controller {
  async index () {
    const { ctx } = this;
    const { email, password } = ctx.request.body;
    // 校验参数

    const validateResult = await ctx.validate('login.signIn', { email, password }); // 第一个参数对应于rules目录下目录或文件
    if (!validateResult) {
      return;
    }
    // 组装参数
    const author = ctx.session.userId;
    const req = Object.assign(ctx.request.body, { author });

    // const loginInfo = await ctx.service.user.login({ password, email });

    // 返回结果
    ctx.returnBody(200, '登录成功', req);
    // // 设置响应内容和响应状态码
    // ctx.body = { id: res.id };
    // ctx.status = 201;;

  }
}

module.exports = ViewController
