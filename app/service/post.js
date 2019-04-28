'use strict'
const Service = require('egg').Service

class PostService extends Service {
  // 获取所有文章
  async findAll () {
    // 这里需要注意： 只有安装了 mongoose 后， model 才会挂载到 this.ctx 上。
    return this.ctx.model.Post.find().exec()
  }

  // 保存文章
  async create (post) {
    this.ctx.model.Post.create(post)
  }

  // 获取指定文章
  async findById (id) {
    return this.ctx.model.Post.find().exec()
    // return this.ctx.model.Post.findById(id).exec();
  }

  // 获取指定文章
  async findAndUpdate (id, post) {
    this.ctx.model.Post.findOneAndUpdate({ _id: id }, post).exec()
  }

  // 删除指定文章
  async findAndRemove (id) {
    this.ctx.model.Post.remove({ _id: id }, function (err) {
      console.log(err)
    })
  }
}

module.exports = PostService
