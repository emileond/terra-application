const { merge } = require('webpack-merge');
const {
  TerraDevSite,
  TerraDevSiteEntrypoints,
  DirectorySwitcherPlugin,
  LocalPackageAliasPlugin,
} = require('terra-dev-site');

const WebpackConfigTerra = require('@cerner/webpack-config-terra');
/**
* Generates the file representing app name configuration.
*/
const devSiteConfig = (env = {}, argv = { p: false }) => {
  const production = argv.p;

  return {
    entry: TerraDevSiteEntrypoints,
    plugins: [
      new TerraDevSite({ env }),
    ],
    resolve: {
      plugins: [
        new DirectorySwitcherPlugin({
          shouldSwitch: !production,
        }),
        new LocalPackageAliasPlugin(),
      ],
    },
  };
};

const webpackConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), devSiteConfig(env, argv))
);

module.exports = webpackConfig;
