const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('src/js/app.js', 'dist/js/')
  .sass('src/sass/app.scss', 'css/')
  .copy('src/favicon.ico', 'dist/favicon.ico')
  .copy('src/images', 'dist/images')
  .copy('src/index.html', 'dist/index.html')
  .browserSync({
    proxy: false,
    server: {
      baseDir: './dist',
      index: 'index.html',
    },
    files: ['dist/**/*.*'],
  })
  .setPublicPath('dist')
