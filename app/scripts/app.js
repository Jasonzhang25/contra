'use strict';

/**
 * @ngdoc overview
 * @name contraApp
 * @description
 * # contraApp
 *
 * Main module of the application.
 */
angular
  .module('contraApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'ui.grid.autoResize',
    'nvd3',
    'ui.date',
    'ui.bootstrap',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/promo', {
        templateUrl: 'views/promoList.html',
        controller: 'promoListCtrl'
      })
      .when('/promo/new', {
        templateUrl: 'views/promoNew.html',
        controller: 'promoNewCtrl'
      })      
      .when('/approval', {
        templateUrl: 'views/approval.html',
        controller: 'approvalCtrl'
      })
      .when('/approver', {
        templateUrl: 'views/approver.html',
        controller: 'approverCtrl'
      })
      .when('/approver/edit', {                                                        
        templateUrl: 'views/approverEdit.html',
        controller: 'approverEditCtrl'
      })
      .when('/financial', {
        templateUrl: 'views/financial.html',
        controller: 'financialCtrl'
      })       
      .when('/gpmo', {
        templateUrl: 'views/gpmo.html',
        controller: 'gpmoCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/mainbackup', {
        templateUrl: 'views/mainbackup.html',
        controller: 'mainbackupCtrl'
      })
      .when('/loading', {
        templateUrl: 'views/loading.html',
        controller: 'loadingCtrl'
      })       
      .otherwise({
        redirectTo: '/'
      });
  });
