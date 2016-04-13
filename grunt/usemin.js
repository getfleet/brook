// Performs rewrites based on filerev and the useminPrepare configuration
module.exports = {
  html: ['<%= config.dist %>/**/*.html'],
  css: ['<%= config.dist %>/assets/css/{,*/}*.css'],
  js: ['<%= config.dist %>/assets/js/{,*/}*.js'],
  options: {
    assetsDirs: [
      '<%= config.dist %>',
      '<%= config.dist %>/assets/img',
      '<%= config.dist %>/assets/css'
    ],
    patterns: {
      js: [
        [/(assets\/img\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']
      ]
    }
  }
};
