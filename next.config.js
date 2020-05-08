const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules');

module.exports = withFonts(
  withTM({
    transpileModules: ['gsap'],
  })
);
