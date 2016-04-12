module.exports = {
  'default': [
    'newer:jshint',
    'newer:jscs',
    'test',
    'build'
  ],
  'serve': [
    'ngconstant:dev',
    'i18nextract',
    'clean:server',
    'wiredep',
    'concurrent:server',
    'postcss:server',
    'connect:livereload',
    'watch'
  ],
  'test': [
    'clean:server',
    'wiredep',
    'concurrent:test',
    'postcss',
    'connect:test',
    'karma'
  ],
  'build': [
    'i18nextract',
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'postcss',
    'ngtemplates',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ],
  'build:dev': [
    'ngconstant:dev',
    'build'
  ],
  'build:pre': [
    'ngconstant:pre',
    'build'
  ],
  'build:prod': [
    'ngconstant:prod',
    'build'
  ]
};
