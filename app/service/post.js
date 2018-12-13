'use strict';
const Service = require('egg').Service;
class PostService extends Service {
  // 获取所有文章
  async findAll() {
    // 这里需要注意： 只有安装了 mongoose 后， model 才会挂载到 this.ctx 上。
    return this.ctx.model.mongo.Post.find().sort({_id:-1}).exec();
  }
  // 保存文章
  async create(post) {
    this.ctx.model.mongo.Post.create(post);
  }
  // 获取指定文章
  async findById(id) {
    return this.ctx.model.mongo.Post.findById(id).exec();
  }
  // 获取指定文章
  async findAndUpdate(id, post) {
    this.ctx.model.mongo.Post.findOneAndUpdate({_id: id}, post).exec();
  }
  // 删除指定文章
  async findAndRemove(id) {
    this.ctx.model.mongo.Post.remove({_id: id},function (err) {
      console.log(err);
    });
  }
}
module.exports = PostService;