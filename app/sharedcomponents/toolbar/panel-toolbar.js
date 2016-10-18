
'use strict';
angular.module('contraApp')
.directive('panelToolbar', function(){
    return {
        restrict: 'AE',
        templateUrl: 'sharedcomponents/toolbar/panel-toolbar.html',
        link: function($scope, element, attrs) {
            $scope.selectPanel = function(i) {
                $scope.panels.activePanels = [i];
            };

            $scope.expandAll = function() {
                var obj = [];
                var length = $scope.panels.length;
                for (var i = 0; i < length; i++) {
                    obj.push(i);
                }
                $scope.panels.activePanels = obj;
            };

            $scope.collapseAll = function() {
                $scope.panels.activePanels = [];
            };

            $scope.openItem = function(type) {
                switch(type) {
                    case 1: // email part
                        $scope.emailPanel = !scope.emailPanel;
                        break;
                    case 2: // pdf part
                      //  $state.go('pdfLink', {'moduleId': moduleId, 'content':content, 'callback':callback});
                       $scope.generatePdfFileDetail();
                        break;
                    case 3: // excel part
                        console.log('excel part');
                        break;
                    case 4: // word part
                       // console.log('word part');
                         $scope.generateWordFileDetail();
                        break;
                    case 5: // print part
                        console.log('print part');
                        break;
                    default:
                        console.log('default part');
                }
            };
        }
    };
});
