/* eslint-disable no-case-declarations */
const { copySync } = require('fs-extra');
const { resolve, dirname, join } = require('path');

const toDir = resolve(__dirname, '../../../demos/assets');
// TODO: Requires packages/patternfly-next to be built
// TODO: Remove `dist` once patternfly-next moves out
const fromDir = dirname(require.resolve('@patternfly/patternfly/dist/package.json'));

copySync(join(fromDir, 'assets'), toDir);
