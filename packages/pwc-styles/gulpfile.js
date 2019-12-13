const path = require('path');
const { src, watch } = require('gulp');
const CleanCSS = require('clean-css');
const through2 = require('through2');
const fs = require('fs-extra');
// TODO: remove /dist when patternfly-next moves out of repo
const pfStylesDir = path.dirname(require.resolve('@patternfly/patternfly/dist/patternfly.css'));

const cleaner = new CleanCSS({
  format: 'beautify' // formats output in a really nice way
});

const config = {
  sourceFiles: [
    path.join(pfStylesDir, 'patternfly-base.css'),
    pfStylesDir + '/**/*.css'
  ]
};

console.log(config.sourceFiles);

function transformCSS0(srcFiles) {
  return srcFiles
    .pipe(
      through2.obj((chunk, _, cb2) => {
        console.log('chunk', chunk._cwd);
        const cssString = chunk.contents.toString();

        const cleaned = cleaner.minify(cssString);

        // Not kosher, but prevents path problems
        const relativePath = path.relative(
          path.join(chunk._cwd, '/src/patternfly'),
          chunk.history[0]
        );
        console.log(pfStylesDir, chunk.history[0])
        const outPath = path.join(
          chunk._cwd,
          'dist',
          relativePath.replace(/\.scss$/, '.css')
        );
        // fs.ensureFileSync(outPath);
        // fs.writeFileSync(outPath, cleaned);
        cb2(null, chunk);
      })
    )
}

function transformCSS() {
  return transformCSS0(src(config.sourceFiles));
}

function watchCSS() {
  // Initial build
  module.exports.transformCSS();

  const watcher = watch(config.sourceFiles, { delay: 0 });

  function transformWatchedCSS(file) {
    const fullPath = path.join(__dirname, file);
    transformCSS0(src(fullPath));
    console.log('Transformed', file);
  }

  watcher.on('change', transformWatchedCSS);
  watcher.on('add', transformWatchedCSS);
}


module.exports = {
  transformCSS,
  watchCSS,
};
