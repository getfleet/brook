// App configuration
module.exports = {
  options: {
    name: 'app.config',
    dest: '<%= config.app %>/app/app.config.js',
    constants: {
      CONFIG: require('../src/config/config.json')
    }
  },
  dev: {
    constants: {
      CONFIG: require('../src/config/config_dev.json')
    }
  },
  pre: {
    constants: {
      CONFIG: require('../src/config/config_pre.json')
    }
  },
  prod: {
    constants: {
      CONFIG: require('../src/config/config_prod.json')
    }
  }
};
