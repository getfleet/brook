// Copies remaining files to places other tasks can use
module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= config.app %>',
      dest: '<%= config.dist %>',
      src: [
        '*.{ico,png,txt}',
        '*.html',
        'assets/img/{,*/}*.{webp}',
        'assets/fonts/{,*/}*.*',
        'resources/{,*/}*.*'
      ]
    }, {
      expand: true,
      cwd: '<%= config.temp %>/assets/img',
      dest: '<%= config.dist %>/assets/img',
      src: ['generated/*']
    }, {
      expand: true,
      cwd: '.',
      src: 'bower_components/font-awesome/fonts/*',
      dest: '<%= config.dist %>'
    }, {
      expand: true,
      cwd: 'bower_components/angular-i18n/',
      src: '*.js',
      dest: '<%= config.dist %>/bower_components/angular-i18n'
    }]
  },
  styles: {
    expand: true,
    cwd: '<%= config.app %>/assets/scss',
    dest: '<%= config.temp %>/assets/css/',
    src: '{,*/}*.css'
  }
};
