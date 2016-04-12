// ng-annotate tries to make the code safe for minification automatically
// by using the Angular long form for dependency injection.
module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.temp %>/concat/assets/js',
      src: '*.js',
      dest: '<%= config.temp %>/concat/assets/js'
    }]
  }
};
