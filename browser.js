module.exports = {
  extends: [
    'touch4it',
  ],
  env: {
    node: false,
    browser: true,
  },
  rules: {
    'unicorn/prefer-module': 'off',
  },
};
