app.service('finderService', ['$http', function($http) {
    var service = this;
    
    service.getStates = function() {
        console.log("got states!");
    };
    
    service.getCounties = function() {
        
    };
    
    service.getCities = function() {
        
    };
    
//    $http({
//      method: 'GET',
//      url: '/someUrl'
//    }).then(function successCallback(response) {
//
//    }, function errorCallback(response) {
//        console.log('request failed:', reponse);
//    }); 
}]); 
