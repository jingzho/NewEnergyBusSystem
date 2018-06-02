(function () {
  'use strict';

  angular.module('demo.pages.tasks')
    .controller('AddTaskCtrl', AddTaskCtrl);

  function AddTaskCtrl($scope, $http) {
    $scope.taskTypeOptions = [
      {label: 'Option 1', value: 1},
      {label: 'Option 2', value: 2},
      {label: 'Option 3', value: 3},
      {label: 'Option 4', value: 4}
    ];
    $scope.selectedTaskType = {};

    $scope.init = function () {
      console.log('initialized');
    }

    $scope.addTask = function () {
      let requestData = {
        test: "test"
      };
      $http.post('http://localhost:3100/api/users/create', requestData).then(res => {
        console.log(res);
      });
    }

    window.scp = $scope;
  }
})();