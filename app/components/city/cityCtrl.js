(function() {
    function CityCtrl () {
        var vm = this;
    }
    
    app.component('city', {
        // Loading the template
        templateUrl: '/app/components/city/city.html',
        controller: CityCtrl,
        controllerAs: 'vm'
    });
    
})();


