(function () {
  'use strict';

  angular.module('demo.pages.tasks')
    .controller('AddTaskCtrl', AddTaskCtrl);

  function AddTaskCtrl($scope) {
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

    }
  }
})();