var myService = angular.module('myService', [])

myService.factory('serviceId', [
  '$http',
  function($http) {
    var shinyNewServiceInstance = this

    shinyNewServiceInstance.getData = function() {
      return $http.get('js/data.json')
    }

    shinyNewServiceInstance.selectOptions = {
      first_name: 'First name',
      last_name: 'Last name',
      job: 'Job'
    }

    return shinyNewServiceInstance
  }
])
