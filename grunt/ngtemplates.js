module.exports = {
  dist: {
    options: {
      module: 'app',
      htmlmin: '<%= htmlmin.dist.options %>',
      usemin: 'assets/js/scripts.js'
    },
    cwd: '<%= config.app %>',
    src: 'app/**/*.html',
    dest: '<%= config.temp %>/templateCache.js'
  }
};
