Package.describe({
  name: 'jeffpatzer:jquery-payment',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Payment library by Stripe. A general purpose library for building credit card forms, validating inputs and formatting numbers.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('jeffpatzer:jquery-payment.js');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('jeffpatzer:jquery-payment');
//   api.addFiles('jeffpatzer:jquery-payment-tests.js');
// });
