'use strict'

const Service = require('egg').Service

class JwtService extends Service {
  /**
   * 生成 Token
   * @param {Object} data
   * @return {function} aa
   */
  createToken (data) {
    const { ctx } = this
    return ctx.app.jwt.sign(data, ctx.app.config.jwt.secret, {
      expiresIn: '12h',
    })
  }

  /**
   * 验证token的合法性
   * @param {String} token
   */
  verifyToken (token) {
    const { ctx } = this
    return new Promise((resolve, reject) => {
      ctx.jwt.verify(token, ctx.app.config.jwt.secret, function (err, decoded) {
        const result = {}
        if (err) {
          /*
						err = {
							name: 'TokenExpiredError',
							message: 'jwt expired',
							expiredAt: 1408621000
						}
					*/
          result.verify = false
          result.message = err.message
        } else {
          result.verify = true
          result.message = decoded
        }
        resolve(result)
      })
    })
  }

}

module.exports = JwtService
