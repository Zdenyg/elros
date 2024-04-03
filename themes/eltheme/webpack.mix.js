let mix = require('laravel-mix');


mix.setPublicPath('./')
.js('src/js/scripts.js', 'assets/js/')
.sass('src/scss/style.scss', 'assets/css')


   .browserSync({
      proxy: 'http://localhost/elros/', //replace with your url
      files: [
          'layouts/**/*.htm',
          'pages/**/*.htm',
          'partials/**/*.htm',
          'assets/js/scripts.js',
          'assets/css/style.css'
      ]
  })
