//(function() {
//    function MainCtrl () {
//        var vm = this;
//
////        vm.onInit = function(){
////            
////        }; 
//        
//        vm.menu = [{
//            name: "State",
//            component: "state"
//        }, {
//            name: "County",
//            component: "county"
//        }, {
//            name: "City",
//            component: "city"
//        }];
//        vm.activeComponent = vm.menu[0].component;
//    }
//    
//    app.component('main', {
//        // Loading the template
//        templateUrl: '/app/components/main/main.html',
//        controller: MainCtrl,
//        controllerAs: 'vm'
//    });
//    
//})();


module.exports = ['$scope', function($scope) {
    var vm = this;

//        vm.onInit = function(){
//            
//        }; 

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
    vm.activeComponent = vm.menu[0].component;
        
}];