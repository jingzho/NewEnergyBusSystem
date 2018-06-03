
(function () {
    'use strict';

    angular.module('demo.pages.HR', ['ui.select'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('HR', {
                title: '人员管理',
                template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                controller: 'StaffCtrl',
                sidebarMeta: {
                    icon: 'ion-ios-clock-outline',
                    order: 300,
                },
            }).state('HR.allstaff', {
            url: '/HR/allstaff',
            title: '巡检人员绩效考核',
            templateUrl: 'app/pages/HR/allstaff.html',
            sidebarMeta: {
                order: 0,
            },

        // }).state('tasks.addTask', {
        //     url: '/tasks/addTask',
        //     title: '添加巡视任务',
        //     controller: 'AddTaskCtrl',
        //     templateUrl: 'app/pages/tasks/addTask.html',
        //
        // }).state('tasks.submitTask', {
        //     url: '/tasks/submitTask',
        //     // url: '/tasks/submitTask/:taskId',
        //     title: '填写巡视任务',
        //     controller: 'SubmitTaskCtrl',
        //     templateUrl: 'app/pages/tasks/submitTask.html',

        }).state('HR.hrIndex', {
            url: '/HR/hrIndex',
            title: '绩效考核指标管理',
            templateUrl: 'app/pages/HR/hrIndex.html',
            sidebarMeta: {
                order: 1,
            },
        // }).state('tasks.subModule', {
        //     url: '/tasks/url',
        //     title: '编辑页面',
        //     templateUrl: 'app/pages/tasks/xxxx.html',
        });
        $urlRouterProvider.when('/tables','/tables/basic');
    }
})();
