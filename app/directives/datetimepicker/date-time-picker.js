'use strict';
angular.module('contraApp')
.directive('dateTimePicker', [function() {
    return {
        scope: {
            inputTime: '=',
            required: '=',
			change: '&'
        },
        link: function(scope, element, attrs) {
		    var hasChangeFn = attrs['change'] ? true : false;
            scope.dateTimeNow = function() {
                var currentTime = utils.getCurrentDate();
                scope.inputTime = currentTime;
                // remove the span
                element.next('span').remove();
            };

            scope.dateClick = function() {
                scope.dpShow = !scope.dpShow;
                check();
            };

            scope.timeClick = function() {
                scope.tpShow = !scope.tpShow;
                check();
            };

            function check() {
                element.next('span').remove();
            };

            scope.$watch('inputTime', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    if (hasChangeFn) {
                        scope.change();
                    }
                }
            }, true);
        },
        restrict: 'E',
        templateUrl: 'directives/datetimepicker/date-time-picker.html'
    };
}]);
