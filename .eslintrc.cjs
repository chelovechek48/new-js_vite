module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@js', './src/js'],
          ['@styles', './src/styles'],
        ],
      },
    },
  },
};
