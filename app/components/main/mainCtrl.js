(function() {
    function MainCtrl () {
        var vm = this;

        vm.menu = [{
            name: "State",
            component: "state"
        }, {
            name: "County",
            component: "county"
        }, {
            name: "City",
            component: "city"
        }];
    }
    
    app.component('main', {
        // Loading the template
        templateUrl: '/app/components/main/main.html',
        controller: MainCtrl,
        controllerAs: 'vm'
    });
    
})();


