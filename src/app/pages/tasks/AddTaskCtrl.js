(function () {
  'use strict';

  angular.module('demo.pages.tasks')
    .controller('AddTaskCtrl', AddTaskCtrl);

<<<<<<< .merge_file_YjYZrw
  function AddTaskCtrl($scope) {
      // function AddTaskCtrl($scope, $stateParams) {
=======

  function AddTaskCtrl($scope, $http, $stateParams) {
>>>>>>> .merge_file_OlVVND
    $scope.taskTypeOptions = [
      {label: '一般巡视', value: 1},
      {label: '特殊巡视', value: 2}
    ];
    $scope.selectedTaskType = {};

    $scope.init = function () {
      console.log('initialized');
<<<<<<< .merge_file_YjYZrw
      // console.log($stateParams.taskId);
    }

    $scope.addTask = function () {

    }

=======
      console.log($stateParams.taskId);
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
>>>>>>> .merge_file_OlVVND
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