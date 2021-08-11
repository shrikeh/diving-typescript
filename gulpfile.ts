import { src, dest } from 'gulp';
import webpack from 'webpack-stream';

function build() {
  return src(['src/index.ts'])
    .pipe(webpack())
    .pipe(dest('dist/'));
}

export default build;
