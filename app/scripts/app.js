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
    'ui.bootstrap',
    'angular-loading-bar',
    'ui.grid.grouping',
    'phoneList',
    'phoneDetail',
    'core',
    'mgcrea.ngStrap',
    'ui.grid.expandable',
    'ui.grid.pinning',
  ])
  .config(['$locationProvider' ,'$routeProvider',

    function ($locationProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/promolist', {
        templateUrl: 'views/promoList.html',
        controller: 'promoListCtrl'
      })
      .when('/promonew', {
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
      .when('/approveredit', {                                                        
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
      .when('/promonew1', {
        templateUrl: 'views/promoNew1.html',
        controller: 'promoNew1Ctrl'
      })
      .when('/promonew2', {
        templateUrl: 'views/promoNew2.html',
        controller: 'promoNew2Ctrl'
      })  
      .when('/promonew3', {
        templateUrl: 'views/promoNew3.html',
        controller: 'promoNew3Ctrl'
      })
      .when('/promonew4', {
        templateUrl: 'views/promoNew4.html',
        controller: 'promoNew4Ctrl'
      })
      .when('/canvas', {
        templateUrl: 'views/canvas.html',
        controller: 'canvasCtrl'
      })       
      .when('/maps', {
        templateUrl: 'views/maps.html',
        controller: 'mapsCtrl'
      })
      .when('/phones', {
        template: '<phone-list></phone-list>'
      }).
      when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>'
      })
      .when('/viewmode', {
        templateUrl: 'views/viewmode.html',
        controller: 'viewModeCtrl'
      })
      .when('/comment', {
        templateUrl: 'views/comment.html',
        controller: 'commentCtrl'
      })
      .when('/expand', {
        templateUrl: 'views/expandablegrid.html',
        controller: 'expandableGridCtrl'
      })                                                          
      .otherwise({
        redirectTo: '/'
      });
  }
  ]);
