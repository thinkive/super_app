'use strict'

module.exports = app => {
  class LoginController extends app.Controller {
    async index () {
      const ctx = this.ctx
      // 生成Token
      const token = ctx.service.jwt.createToken({ id: 10001 })
      console.log(token)
      this.ctx.body = 'hello admin'

      // 标准步骤
      // const { ctx, service } = this
      // // 校验参数
      // ctx.validate(this.UserCreateTransfer)
      // // 组装参数
      // const payload = ctx.request.body || {}
      // // 调用 Service 进行业务处理
      // const res = await service.user.create(payload)
      // // 设置响应内容和响应状态码
      // ctx.helper.success({ctx, res})
    }
  }

  return LoginController
}
