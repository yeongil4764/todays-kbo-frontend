module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@api': './api',
            '@router': './app',
            '@features': './features',
            '@constants': './constants',
            '@assets': './assets',
            '@components': './components',
          },
        },
      ],
    ],
  };
};
