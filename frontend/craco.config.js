const cracoAlias = require('craco-alias');
const cracoLess = require('craco-less');

const { antdVars } = require('./src/themes/antdVars');

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
    {
      plugin: cracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: antdVars,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
