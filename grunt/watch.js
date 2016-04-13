// Watches files for changes and runs tasks based on the changed files
module.exports = {

  bower: {
    files: ['bower.json'],
    tasks: ['wiredep']
  },
  js: {
    files: ['<%= config.app %>/app/{,*/}*.js'],
    tasks: ['newer:jshint:all', 'newer:jscs:all'],
    options: {
      livereload: '<%= connect.options.livereload %>'
    }
  },
  jsTest: {
    files: ['test/spec/{,*/}*.js'],
    tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
  },
  sass: {
    files: ['<%= config.app %>/**/*.{scss,sass}'],
    tasks: ['sass:server', 'autoprefixer']
  },
  config: {
    files: ['<%= config.app %>/config/*.json'],
    tasks: ['ngconstant:dev']
  },
  translate: {
    files: ['<%= config.app %>/**/*.js', '<%= config.app %>/**/*.html'],
    tasks: ['i18nextract']
  },
  gruntfile: {
    files: ['Gruntfile.js']
  },
  livereload: {
    options: {
      livereload: '<%= connect.options.livereload %>'
    },
    files: [
      '<%= config.app %>/**/*.html',
      '<%= config.temp %>/assets/css/{,*/}*.css',
      '<%= config.app %>/assets/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      '<%= config.app %>/resources/{,*/}*.json'
    ]
  }
};
