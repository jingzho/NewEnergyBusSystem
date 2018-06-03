(function () {
    'use strict';

    angular.module('demo.pages.tasks')
        .controller('SubmitTaskCtrl', SubmitTaskCtrl);

    /** @ngInject */
    function SubmitTaskCtrl($scope) {

        $scope.BusInfo = {};
        $scope.CharingInfo = {};
        $scope.CompleteInfo = {};


    }

})();