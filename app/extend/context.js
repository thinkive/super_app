module.exports = {
  returnBody(status, message, data = null) {
    this.status = status;
    this.body = {
      message,
      data,
    };
  },
};
