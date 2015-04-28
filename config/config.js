var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'jadeautomated'
    },
    port: 3000,
    db: 'mongodb://localhost/jadeautomated-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'jadeautomated'
    },
    port: 3000,
    db: 'mongodb://localhost/jadeautomated-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'jadeautomated'
    },
    port: 3000,
    db: 'mongodb://localhost/jadeautomated-production'
  }
};

module.exports = config[env];
