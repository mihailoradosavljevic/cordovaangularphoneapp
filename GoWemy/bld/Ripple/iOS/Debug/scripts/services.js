var gowemyAppServices = angular.module('gowemyAppServices', ['ngResource']);

//phonecatServices.factory('Phone', ['$resource',
//  function ($resource) {
//      return $resource('phones/:phoneId.json', {}, {
//          query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
//      });
//  }]);


//angular.module('gowemyApp', [])
gowemyAppServices.service('User', function () {
    return {};
})


gowemyAppServices.factory("Post", function ($resource, $rootScope) {
    return $resource("http://dev.api.gowemy.com/user/stream", {}, {
        query: { method: "GET", isArray: false, headers: { 'GW-Token': $rootScope.USERTOKEN } }
        
    });
    
});


gowemyAppServices.factory("Ocena", function ($scope, $resource) {
    return $resource("http://188.166.27.237/vote/"+$scope.IDtrenutno, {}, {
        query: { method: "GET", isArray: false }

    });
});




gowemyAppServices.factory("Register", function ($resource) {

    

    return $resource("datoteka/USERS.json"
        //, { email: '@email', password: '@password', username: '@username' }
    //    , {
    //    save: { method: "POST"}

    //}
    );

    alert('DOSLO DOVDE');

});












