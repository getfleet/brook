// Make sure there are no obvious mistakes
module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: {
    src: [
      'Gruntfile.js',
      '<%= config.app %>/app/{,*/}*.js'
    ]
  },
  test: {
    options: {
      jshintrc: 'test/.jshintrc'
    },
    src: ['test/spec/{,*/}*.js']
  }
};
