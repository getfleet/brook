// Translation strings extraction
module.exports = {
  default_options: {
    src: ['<%= config.app %>/**/*.js', '<%= config.app %>/**/*.html'],
    lang: ['en', 'es'],
    suffix: '.json',
    prefix: 'locale-',
    dest: '<%= config.app %>/resources'
  }
};
