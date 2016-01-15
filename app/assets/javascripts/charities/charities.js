(function(){

  angular
    .module('givingYear')
    .factory("charities", [
      '$http',
      function($http){
        var o = {
          charities: []
        };
        o.getAll = function() {
          return $http.get('/charities.json').success(function(data){
            angular.copy(data, o.charities);
          });
        };
        o.create = function(charity) {
          return $http.post('/charities.json', charity).success(function(data){
            o.charities.push(data);
          });
        };
        o.get = function(id) {
          return $http.get('/charities/' + id + '.json').then(function(response){
            return response.data;
          });
        };
        o.addDonation = function(id, donation) {
          return $http.post('/charities/' + id + '/donations.json', donation);
        };
        return o;
      }
  ]);

})();
