/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('demo.pages.devices', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('devices', {
          title: '设备台账',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'DevicesPageCtrl',
          sidebarMeta: {
            icon: 'ion-ios-book-outline',
            order: 100,
          },
        }).state('devices.bustopinfo', {
          url: '/devices/bustopinfo',
          title: '台账信息',
          templateUrl: 'app/pages/devices/bustopinfo.html',
          sidebarMeta: {
            order: 0,
          },
        }).state('devices.manage', {
          url: '/devices/manage',
          title: '台账管理',
          templateUrl: 'app/pages/devices/manage.html',
          sidebarMeta: {
            order: 1,
          },
        });
    $urlRouterProvider.when('/devices','/devices/manage');
  }
})();