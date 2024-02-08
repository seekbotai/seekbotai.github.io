/* eslint-disable quotes */
/* eslint-disable func-names */
// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push("transform-runtime");
  webpackConfig.babel.plugins.push([
    "import",
    {
      libraryName: "antd",
      style: "css",
    },
  ]);
  if (!webpackConfig.module.rules) {
    // eslint-disable-next-line no-param-reassign
    webpackConfig.module.rules = [];
  }
  webpackConfig.module.rules.push({
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  });

  return webpackConfig;
};
