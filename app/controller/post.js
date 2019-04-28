'use strict'
const Controller = require('egg').Controller

class EditPostController extends Controller {
  // 跳转到编辑页时执行的方法
  async index () {
    // 这种写法是 ES6 中的解构赋值
    const { ctx } = this
    // 渲染编辑页并传参
    await ctx.render('edit', {
      status: 'add',
    })
  }

  // 跳转到编辑页时执行的方法
  async edit () {
    const { ctx } = this
    const aId = ctx.params.id
    const article = await this.service.post.findById(aId)
    // 如果找到这篇文章
    if (article) {
      // 这里渲染的时候一定要传一个id 到页面，不然跳转后就没法通过 this.ctx.params 来获取到 id 的值
      await ctx.render('edit', {
        id: aId,
        status: 'edit',
        title: article.title,
        content: article.content,
      })
    } else {
      console.log('文章不存在或者已删除')
    }
  }

  // 更新一篇文章
  async update () {
    const { ctx, service } = this
    const id = ctx.params.id
    // 通过 ctx 上下文拿到请求的相关字段
    const title = ctx.request.body.title
    const content = ctx.request.body.content
    const post = {
      title,
      content,
    }
    await service.post.findAndUpdate(id, post)
    // 跳转到首页
    ctx.redirect('/')
  }

  // 删除一篇文章
  async delete () {
    const { ctx, service } = this
    const id = ctx.params.id
    await service.post.findAndRemove(id)
    ctx.redirect('/')
  }

  // 创建一篇文章
  async create () {
    const {
      ctx,
      service,
    } = this
    // 通过ctx上下文拿到请求的相关字段
    const title = ctx.request.body.title
    const content = ctx.request.body.content
    const post = {
      title,
      content,
    }
    await service.post.create(post)
    ctx.redirect('/')
  }
}

module.exports = EditPostController
