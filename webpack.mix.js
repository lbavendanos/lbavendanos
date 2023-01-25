const mix = require('laravel-mix')

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
  .disableNotifications()
