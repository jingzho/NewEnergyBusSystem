/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('demo.pages.tasks', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tasks', {
          title: '巡视管理',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'TasksPageCtrl',
          sidebarMeta: {
            icon: 'ion-ios-clock-outline',
            order: 300,
          },
        }).state('tasks.alltasks', {
          url: '/tasks/alltasks',
          title: '巡视任务',
          templateUrl: 'app/pages/tasks/alltasks.html',
          sidebarMeta: {
            order: 0,
          },
        }).state('tasks.results', {
          url: '/tasks/results',
          title: '巡视结果',
          templateUrl: 'app/pages/tasks/results.html',
          sidebarMeta: {
            order: 1,
          },
        }).state('tasks.routes', {
          url: '/tasks/routes',
          title: '巡视轨迹',
          disabled: true,
          sidebarMeta: {
            order: 2,
          },
        }).state('tasks.forms', {
          url: '/tasks/forms',
          title: '巡视表单',
          disabled: true,
          sidebarMeta: {
            order: 3,
          },
        });
    $urlRouterProvider.when('/tables','/tables/basic');
  }

})();
