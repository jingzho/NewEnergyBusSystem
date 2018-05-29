/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('demo.pages.devices')
      .controller('DevicesPageCtrl', DevicesPageCtrl);

  /** @ngInject */
  function DevicesPageCtrl($scope, $filter, editableOptions, editableThemes) {
    $scope.selectedIndex = 0;
    $scope.busStopNames = ['高科西路','金高路','临港东棕路','周浦','高行','成山路','川沙',
                           '上川路','曹路','双流路','武宁路','国江路','内江路','国江路二期','松江','金山枫泾','嘉定安亭',
                           '周浦','高行','成山路','川沙','上川路','曹路','双流路','武宁路','国江路'];
    $scope.busStopInfosData = [];
    +function() {
      $scope.busStopNames.forEach((butStopInfo) => {
        $scope.busStopInfosData.push({
          name : butStopInfo += '公交充电站'
        });
      })
    }();

    $scope.select = function(index) {
      $scope.selectedIndex = index;
    }

  }

})();
