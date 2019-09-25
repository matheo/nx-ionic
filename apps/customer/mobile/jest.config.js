module.exports = {
  name: 'customer-mobile',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/customer/mobile',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
