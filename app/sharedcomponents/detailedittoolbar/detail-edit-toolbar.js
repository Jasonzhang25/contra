
'use strict';
angular.module('contraApp')
.directive('detailEditToolbar', function(){
    return {
        restrict: 'AE',
        templateUrl: 'sharedcomponents/detailedittoolbar/detail-edit-toolbar.html',
        link: function(scope) {


            // marking : need improment email panel
            scope.closeItem = function() {
                scope.emailPanelDetail = false;
            }

            scope.selectPanel = function(i) {
                scope.panels.activePanels = [i];
            };

            scope.expandAll = function() {
                var obj = [];
                var length = scope.panels.length;
                for (var i = 0; i < length; i++) {
                    obj.push(i);
                }
                scope.panels.activePanels = obj;
            };

            scope.collapseAll = function() {
                scope.panels.activePanels = [];
            };

            scope.openItem = function(type) {
                switch(type) {
                    case 1: // email part
                        scope.emailPanelDetail = !scope.emailPanelDetail;
                        break;
                    case 2: // pdf part
                        if(scope.generatePdfFileDetail){
                            scope.generatePdfFileDetail();
                        }else if(scope.generatePDFForDetail) {
                            scope.generatePDFForDetail();
                        }
                        break;
                    case 3: // excel part
                        scope.exportExcel();
                        break;
                    case 4: // word part
                        if(scope.generateWordFileDetail){
                            scope.generateWordFileDetail();
                        }else if(scope.generateWordForDetail) {
                            scope.generateWordForDetail();
                        }
                        break;
                    case 5: // print part || feature holder
                        // console.log('print part');
                        break;
                    default:
                        // console.log('default part');
                }
            };

            scope.exportExcel = function() {
                ExportService.exportExcelGrid(scope)
            }
        }
    };
});
