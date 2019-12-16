/* eslint-disable no-case-declarations */
const path = require('path');
const fs = require('fs-extra');

const toDir = path.resolve(__dirname, '../../../demos/assets');
// TODO: Requires packages/patternfly-next to be built
// TODO: Remove `dist` once patternfly-next moves out
const fromDir = path.dirname(require.resolve('@patternfly/patternfly/dist/package.json'));

fs.copySync(
  path.join(fromDir, 'assets'),
  toDir
);
