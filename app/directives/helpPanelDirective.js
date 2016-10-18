define(['app'], function (app) {
    'use strict';
    app.directive('helpPanel', [function() {
        return {
            templateUrl: 'dashboard/help.html'
        };
    }]);
});