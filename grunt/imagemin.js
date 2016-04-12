module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/assets/img',
      src: '{,*/}*.{png,jpg,jpeg,gif}',
      dest: '<%= config.dist %>/assets/img'
    }]
  }
};
