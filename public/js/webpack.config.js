module.exports = {
  entry: {
    top: "./top",
    createRoom: "./createRoom",
    roomList: "./roomList"
  },
  output: {
    path: "./dist",
    filename: "[name].js"
  },
  watch: true,
  watchOptions: {
    poll: true
  }
};
