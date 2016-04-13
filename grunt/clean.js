// Empties folders to start fresh
module.exports = {
  dist: {
    files: [{
      dot: true,
      src: [
        '<%= config.temp %>',
        '<%= config.dist %>/{,*/}*',
        '!<%= config.dist %>/.git{,*/}*'
      ]
    }]
  },
  server: '<%= config.temp %>'
};
