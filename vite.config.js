let path = require('path');
console.log("cc: ", path.resolve(__dirname, './src'))
console.log("components: ", path.join(__dirname, './src/components'))
module.exports = {
  // alias a path to a fs directory
  // the key must start and end with a slash
  // alias: {
  //   '@src': path.join(__dirname, './src'),
  //   '@api/': path.join(__dirname, './src/api'),
  //   '~@assets/': path.join(__dirname, './src/assets'),
  //   '@plugins/': path.join(__dirname, './src/plugins'),
  //   '@views/': path.join(__dirname, './src/views'),
  //   '@components/': path.join(__dirname, './src/components'),
  //   '@utils/': path.join(__dirname, './src/utils'),
  //   '@compositions/': path.join(__dirname, './src/compositions')
  // }
};
