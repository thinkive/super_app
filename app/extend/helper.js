
exports.formatUser = function (user) {
		let dataMap = {'a': 1}
		return dataMap[user]
};
   // 获取 Token
exports.getAccessToken = ctx => {
	let bearerToken = ctx.request.header.authorization;
	return bearerToken && bearerToken.replace("Bearer ", "");
};

// 校验 Token
exports.verifyToken = async (ctx, userId) => {
	let token = this.getAccessToken(ctx);
	let verifyResult = await ctx.service.user.verifyToken(token);
	if (!verifyResult.verify) {
		ctx.helper.error(ctx, 401, verifyResult.message);
		return false;
	}
	if (userId != verifyResult.message.id) {
		ctx.helper.error(ctx, 401, "用户 ID 与 Token 不一致");
		return false;
	}
	return true;
};

// 处理成功响应
exports.success = (ctx, result = null, message = "请求成功", status = 200) => {
	ctx.body = {
		code: 0,
		message: message,
		data: result
	};
	ctx.status = status;
};