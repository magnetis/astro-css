const propertyOrder = require('./property-order');

module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-order'],
  rules: {
    'font-family-name-quotes': 'always-unless-keyword',
    'string-quotes': 'single',
    'rule-empty-line-before': 'always',
    'order/properties-order': propertyOrder,
    'no-descending-specificity': null,
  },
};
