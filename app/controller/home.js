'use strict'

const Controller = require('egg').Controller

class Home extends Controller {
  async render () {
    const ctx = this.ctx
    this.logger.info('~~~~~~~~~~~~~~页面get参数~~~~~~~~' + ctx.request.query.id + '|' + ctx.query.id)
    this.logger.info('~~~~~~~~~~~~~~helper~~~~~~~~~~~~~~' + ctx.helper.formatUser(ctx.query.id))
    this.logger.info('~~~~~~~~~~~~~~this.config~~~~~~~~~~~~~~' + this.config.keys)
    this.logger.debug('debug info')
    this.logger.info('some request data: %j', ctx.request.body)
    this.logger.warn('WARNNING!!!!')
    // this.logger.error(new Error('whoops'));

    this.logger.info('~~~~~~~~~~~ service/control this.logger.info ~~~~~~~~~~~~~~~~~~~~~')

    console.log(ctx.__('email'))
    console.log(ctx.__('createdAt', [ '杨迪' ]))
    // ctx.body = `<ul>
    //   <li>Download <a href="/public/hi.txt">hi.txt</a>.</li>
    //   <li>Download <a href="/public/404.txt">404.txt</a>.</li>
    //   <li>Download <a href="/public/蛋蛋Web框架.txt">蛋蛋Web框架.txt</a>.</li>
    //   <li>Download <a href="/public/foo.js">foo.js</a>.</li>
    // </ul>`;
    await this.ctx.render('home')

  }
}

module.exports = Home
