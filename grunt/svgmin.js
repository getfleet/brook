module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/assets/img',
      src: '{,*/}*.svg',
      dest: '<%= config.dist %>/assets/img'
    }]
  }
};
