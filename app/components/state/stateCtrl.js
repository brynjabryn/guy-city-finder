(function() {
    function StateCtrl (finderService) {
        var vm = this;
        finderService.getStates();
    }
    
    app.component('state', {
        // Loading the template
        templateUrl: '/app/components/state/state.html',
        controller: StateCtrl,
        controllerAs: 'vm'
    });
    
})();


