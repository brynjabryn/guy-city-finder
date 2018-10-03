module.exports = (function(app) {
    app.component('main', {
        templateUrl: 'components/main/main.html',
        controller: require('./mainCtrl.js'),
        controllerAs: 'vm',
        bindings: {}
    });
});