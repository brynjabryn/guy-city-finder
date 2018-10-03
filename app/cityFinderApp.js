//(function() {
//    // TODO: Build as node modules to avoid global
//    window.app = angular.module('CityFinderApp', []);
//})();

module.exports = (function(app) {
    'use strict';    
    require('./components')(app);
});