// Run some tasks in parallel to speed up the build process
module.exports = {
  server: [
    'sass:server',
    'copy:styles'
  ],
  test: [
    'copy:styles'
  ],
  dist: [
    'sass',
    'copy:styles',
    'imagemin',
    'svgmin'
  ]
};
