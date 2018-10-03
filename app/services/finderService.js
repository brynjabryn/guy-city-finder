app.service('finderService', ['$http', function($http) {
    var service = this;
    
    service.getStates = function() {
        $http({
          method: 'GET',
          url: 'http://www.geonames.org/childrenJSON?geonameId=6252001'
        }).then(function successCallback(response) {
            var data = response.data.geonames;
            if (data.length > 0 && data !== undefined) {
                console.log('request successful: getStates', response);
                var statesData = [];
                for (var i = 0; i < data.length; i++) {
                    var state = {
                        name: data[i].name,
                        geonameId: data[i].geonameId
                    };
                    statesData.push(state);
                }
                console.log('states data:', statesData);
                return statesData;
            } else {
                console.log('request failed: getStates is empty.', reponse);
                alert("Sorry! Geonames has no states for us.");
                return;
            }
        }, function errorCallback(response) {
            console.log('request failed: getStates', reponse);
            alert("Sorry! Geonames has no states for us.");
            return;
        }); 
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
