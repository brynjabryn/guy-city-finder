(function() {
    function StateCtrl (finderService) {
        var vm = this;
        
        vm.getStates = function() {
            finderService.getStates
            .then(function (resolve) {
                console.log('states data:', resolve);
            })
            .catch(function (reject) {
                console.log(reject);
            });
        };
        
        vm.getStates();
    }
    
    app.component('state', {
        // Loading the template
        templateUrl: '/app/components/state/state.html',
        controller: StateCtrl,
        controllerAs: 'vm'
    });
    
})();


