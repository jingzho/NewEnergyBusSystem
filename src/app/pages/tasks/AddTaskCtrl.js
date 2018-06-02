(function () {
  'use strict';

  angular.module('demo.pages.tasks')
    .controller('AddTaskCtrl', AddTaskCtrl);

  function AddTaskCtrl($scope) {
      // function AddTaskCtrl($scope, $stateParams) {
    $scope.taskTypeOptions = [
      {label: '一般巡视', value: 1},
      {label: '特殊巡视', value: 2}
    ];
    $scope.selectedTaskType = {};

    $scope.init = function () {
      console.log('initialized');
      // console.log($stateParams.taskId);
    }

    $scope.addTask = function () {

    }

    $scope.open = open;
    $scope.opened = false;
    $scope.options = {
        showWeeks: false
    };

    function open() {
        $scope.opened = true;
    }

    $scope.end = end;
    $scope.ended = false;
    $scope.options = {
        showWeeks: false
    };

    function end() {
        $scope.ended = true;
    }

  }

})();