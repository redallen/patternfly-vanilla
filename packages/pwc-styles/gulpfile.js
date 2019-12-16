const path = require('path');
const { src, watch } = require('gulp');
const CleanCSS = require('clean-css');
const through2 = require('through2');
const fs = require('fs-extra');
// TODO: remove /dist when patternfly-next moves out of repo
const pfStylesDir = path.dirname(require.resolve('@patternfly/patternfly/package.json'));

const cleaner = new CleanCSS({
  format: 'beautify' // formats output in a really nice way
});

const config = {
  sourceFiles: [
    path.join(pfStylesDir, '/dist/**/*.css')
  ]
};

function transformCSS0(srcFiles) {
  return srcFiles
    .pipe(
      through2.obj((chunk, _, cb2) => {
        const cssString = chunk.contents.toString();

        const cleaned = cleaner.minify(cssString);
        // Not kosher, but prevents path problems
        const outPath = chunk.history[0].replace(pfStylesDir, chunk._cwd).replace(/.css$/, '.js');
        fs.ensureFileSync(outPath);
        fs.writeFileSync(outPath, `export default \`
${cleaned.styles}
\`;`);
        cb2(null, chunk);
      })
    )
}

function transformCSS() {
  return transformCSS0(src(config.sourceFiles));
}

function watchCSS() {
  const watcher = watch(config.sourceFiles, { delay: 0 });

  function transformWatchedCSS(file) {
    transformCSS0(src(file));
    console.log('Transformed', file.replace(pfStylesDir, ''));
  }

  watcher.on('change', transformWatchedCSS);
  watcher.on('add', transformWatchedCSS);
}


module.exports = {
  transformCSS,
  watchCSS,
};
