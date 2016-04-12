// Make sure code styles are up to par
module.exports = {
  options: {
    config: '.jscsrc',
    verbose: true
  },
  all: {
    src: [
      'Gruntfile.js',
      '<%= config.app %>/app/{,*/}*.js'
    ]
  },
  test: {
    src: ['test/spec/{,*/}*.js']
  }
};
