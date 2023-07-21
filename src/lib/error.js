module.exports = class SyntaxError extends Error {
  constructor(msg, start, end) {
    super(msg);
    this.start = start;
    this.end = end;
  }
};
