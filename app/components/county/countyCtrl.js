(function() {
    function CountyCtrl () {
        var vm = this;
    }
    
    app.component('county', {
        // Loading the template
        templateUrl: '/app/components/county/county.html',
        controller: CountyCtrl,
        controllerAs: 'vm'
    });
    
})();


