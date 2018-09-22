'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-preact-app-starter:app', function () {
  beforeEach(() => {
    return helpers.run(path.join(__dirname, '../app'))
      .withPrompts({name: 'random-javascript-lib'})
      .toPromise();
  });

  it('creates files', function () {
    const tplPath = path.resolve(__dirname, '../app/templates');
    assert.file([
      '.babelrc',
      '.eslintrc',
      '.gitignore',
      'LICENSE',
      'package.json',
      'README.md',
      'webpack.config.js',
      '__tests__/index.js',
      'public/index.html',
      'src/app.js',
      'src/components/Main.js',
    ].map(f => path.join(tplPath, f)));
  });
});
