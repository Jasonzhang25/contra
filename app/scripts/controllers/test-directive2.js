'use strict';

/**
 * @ngdoc function
 * @name contraApp.controller:MainCtrl
 * @description
 * # promoNewCtrl
 * Controller of the contraApp
 */

angular.module('contraApp')

.directive('sectionBar1', function() {
        return {
            restrict: 'AE',
            templateUrl: 'directives/detail-edit-toolbar/detail-edit-toolbar.html',
            replace: true
            }

})

