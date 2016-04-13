module.exports = {
  dist: {
    options: {
      collapseWhitespace: true,
      conservativeCollapse: true,
      collapseBooleanAttributes: true,
      removeCommentsFromCDATA: true
    },
    files: [{
      expand: true,
      cwd: '<%= config.dist %>',
      src: ['*.html'],
      dest: '<%= config.dist %>'
    }]
  }
};
