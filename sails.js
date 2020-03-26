module.exports = {
  extends: 'touch4it/node',
  globals: {
    sails: true,
    async: true,
    _: true
  },
  rules: {
    'no-console': 'error',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        'whitelist': {
          'req': true,
          'res': true
        }
      }
    ],
  }
};
