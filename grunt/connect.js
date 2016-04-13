// The actual grunt server settings
var modRewrite = require('connect-modrewrite');
var appConfig = require('./appConfig.js');
module.exports = {
  options: {
    port: 9000,
    hostname: '0.0.0.0',
    livereload: 35729
  },
  livereload: {
    options: {
      open: true,
      middleware: function (connect) {
        return [
          modRewrite(['^[^\\.]*$ /index.html [L]']),
          connect.static('.tmp'),
          connect().use(
            '/bower_components',
            connect.static('./bower_components')
          ),
          connect().use(
            '/src/assets/scss',
            connect.static('./src/assets/scss')
          ),
          connect.static(appConfig.app)
        ];
      }
    }
  },
  test: {
    options: {
      port: 9001,
      middleware: function (connect) {
        return [
          connect.static('.tmp'),
          connect.static('test'),
          connect().use(
            '/bower_components',
            connect.static('./bower_components')
          ),
          connect.static(appConfig.app)
        ];
      }
    }
  },
  dist: {
    options: {
      open: true,
      base: '<%= config.dist %>'
    }
  }
};
