// Compiles Sass to CSS and generates necessary files if requested
module.exports = {
  options: {
    includePaths: [
      'bower_components'
    ]
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/assets/scss',
      src: ['*.scss'],
      dest: '<%= config.temp %>/assets/css',
      ext: '.css'
    }]
  },
  server: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/assets/scss',
      src: ['*.scss'],
      dest: '<%= config.temp %>/assets/css',
      ext: '.css'
    }]
  }
};
