'use strict';

/**
 * @ngdoc function
 * @name contraApp.controller:MainCtrl
 * @description
 * # promoNewCtrl
 * Controller of the contraApp
 */

angular.module('contraApp')


.directive("runoobDirective", function() {
    return {
        restrict : "AE",
        templateUrl: "sharedcomponents/detailedittoolbar/leftmenu.html",
        replace: true
    };
})