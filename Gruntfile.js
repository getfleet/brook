// Generated on 2016-03-22 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = require('./grunt/appConfig.js');

  require('load-grunt-config')(grunt, {
    data:{
      config: appConfig,
    },

    jitGrunt: {
      staticMappings: {
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates',
        ngconstant: 'grunt-ng-constant',
        cdnify: 'grunt-google-cdn',
        i18nextract: 'grunt-angular-translate'
      }
    }
  });

};
