const path = require('path');
const alias = {
    // alias for imports
    '@src': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@enum': path.resolve(__dirname, 'src/enum'),
    '@interfaces': path.resolve(__dirname, 'src/interfaces'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@redux': path.resolve(__dirname, 'src/redux')
};

const environmentConfig = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return require('./config/dev');
    case 'production':
      return require('./config/prod');
    case 'test':
      return require('./config/test');
    default:
      return require('./config/prod');
  }
};

module.exports = {
  webpack:{
    alias: alias,
    ...environmentConfig()
  }
};
