// Renames files for browser caching purposes
module.exports = {
  dist: {
    src: [
      '<%= config.dist %>/assets/js/{,*/}*.js',
      '<%= config.dist %>/assets/css/{,*/}*.css',
      '<%= config.dist %>/assets/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      '<%= config.dist %>/assets/fonts/*'
    ]
  }
};
