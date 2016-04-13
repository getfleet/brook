// Add vendor prefixed styles
module.exports = {
  options: {
    processors: [
      require('autoprefixer-core')({
        browsers: ['last 1 version']
      })
    ]
  },
  server: {
    options: {
      map: true
    },
    files: [{
      expand: true,
      cwd: '<%= config.temp %>/assets/css/',
      src: '{,*/}*.css',
      dest: '<%= config.temp %>/assets/css/'
    }]
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.temp %>/assets/css/',
      src: '{,*/}*.css',
      dest: '<%= config.temp %>/assets/css/'
    }]
  }
};
