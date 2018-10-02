(function() {
    function StateCtrl () {
        var vm = this;
    }
    
    app.component('state', {
        // Loading the template
        templateUrl: '/app/components/state/state.html',
        controller: StateCtrl,
        controllerAs: 'vm'
    });
    
})();


