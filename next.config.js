const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules');

module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});