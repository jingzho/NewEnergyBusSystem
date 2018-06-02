/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('demo.pages.tasks', ['ui.select'])
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
        }).state('tasks.allTasks', {
          url: '/tasks/allTasks',
          title: '巡视任务',
          templateUrl: 'app/pages/tasks/allTasks.html',
          sidebarMeta: {
            order: 0,
          },
        }).state('tasks.addTask', {
            url: '/tasks/addTask',
            title: '添加巡视任务',
            controller: 'AddTaskCtrl',
            templateUrl: 'app/pages/tasks/addTask.html',
        }).state('tasks.results', {
          url: '/tasks/results',
          title: '巡视结果',
          templateUrl: 'app/pages/tasks/results.html',
          sidebarMeta: {
            order: 1,
          },
        }).state('tasks.subModule', {
          url: '/tasks/url',
          title: '编辑页面',
          templateUrl: 'app/pages/tasks/xxxx.html',
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
            order: 2,
          },
        });
    $urlRouterProvider.when('/tables','/tables/basic');
  }

})();
