//register babel to transpile before tests
require('babel-register')();

// disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {};
