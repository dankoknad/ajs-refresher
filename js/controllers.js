var myControllers = angular.module('myControllers', ['myService', 'ngAnimate'])

myControllers.controller('ListCtrl', [
  '$scope',
  'serviceId',
  function($scope, serviceId) {
    $scope.loading = true
    $scope.selectOptions = serviceId.selectOptions
    $scope.orderByValue = 'last_name'
    $scope.orderByAsc = ''
    $scope.filterBy = 'first_name'

    serviceId.getData().then(function(data) {
      $scope.data = data.data
      $scope.loading = false
    })
  }
])

myControllers.controller('ItemCtrl', [
  '$scope',
  '$routeParams',
  'serviceId',
  function($scope, $routeParams, serviceId) {
    $scope.whichItem = $routeParams.itemId
    $scope.dataLength = null

    serviceId.getData().then(function(data) {
      $scope.data = data.data[$scope.whichItem]
      $scope.dataLength = data.data.length
    })

    $scope.getPrev = function() {
      if ($scope.whichItem === '0') {
        return $scope.dataLength - 1
      } else {
        return $scope.whichItem - 1
      }
    }

    $scope.getNext = function() {
      if ($scope.whichItem == $scope.dataLength - 1) {
        return 0
      } else {
        return Number($scope.whichItem) + 1
      }
    }
  }
])
