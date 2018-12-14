'use strict';

const Controller = require('egg').Controller;
class ViewController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    console.log('调用了api/blog')
    console.log(ctx.session);
    const data = { testData: 'egg', testData2: {test: 1} };

    // render a template, path relate to `app/view`
    // await ctx.render('home.nj', data);

    await ctx.render('base.html', data);

    // // or manually set render result to ctx.body
    // ctx.body = await ctx.renderView('child/home.nj', data);

    // // or render string directly
    // ctx.body = await ctx.renderString('hi, {{ name }}', data, {
    //   viewEngine: 'nunjucks',
    // });
  }
}
module.exports = ViewController;
