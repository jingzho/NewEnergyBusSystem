/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'demo.pages.tasks',
    'demo.pages.devices'
    /*'BlurAdmin.pages.ui',
    'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.maps',
    'BlurAdmin.pages.profile',*/
  ]).config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    /*
    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'User Profile',
        stateRef: 'profile'
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
    */
    // baSidebarServiceProvider.addStaticItem({
    //   title: '设备台账',
    //   icon: 'ion-ios-book-outline',
    //   subMenu: [
    //   {
    //     fixedHref: '/dashboard',
    //     title: '台账信息',
    //     disabled: true
    //   },
    //   {
    //     title: '台账管理',
    //     disabled: true
    //   }]
    // });
    baSidebarServiceProvider.addStaticItem({
      title: '数据分析',
      icon: 'ion-android-bus',
      subMenu: [
      {
        title: '充电数据查询',
        disabled: true
      },
      {
        title: '公交数据分析',
        disabled: true
      },
      {
        title: '站点分析报告',
        disabled: true
      }]
    });
    baSidebarServiceProvider.addStaticItem({
      title: '人员管理',
      icon: 'ion-person',
      subMenu: [
      {
        title: '管理人员',
        disabled: true
      },
      {
        title: '外协人员',
        disabled: true
      },
      {
        title: '设备厂家人员',
        disabled: true
      },
      {
        title: '其它人员',
        disabled: true
      }]
    });
    baSidebarServiceProvider.addStaticItem({
      title: '系统管理',
      icon: 'ion-gear-b',
      subMenu: []
    });
  }

})();
