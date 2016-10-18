define(['angularAMD', 'sharedcomponents/utils','services/globalServices'], function (angularAMD,utils) {
    
    angularAMD.directive('zToolbar',['$compile','$state', '$modal', 'GlobalServices','$timeout','AppService', 'ExportService',
    function ($compile, $state, $modal, gs,$timeout, AppService, ExportService) {


        var link = function (scope, element, attrs) {
            scope.selectedLayout = 'default';

            scope.filterBtn = true;
            scope.filterPanel = false;

            scope.emailBtn = true;
            scope.emailPanel = false;

            scope.viewbyIconCtrl = false;
            scope.exportIconCtrl = false;
            
            if(scope.showLayout === false){
                scope.showLayout = false;
            }else{
                scope.showLayout = true;
            }
            if(scope.showViewBy === false){
                scope.showViewBy = false;
            }else{
                scope.showViewBy = true;
            }

            scope.checkStatus = function(item) {
                console.log(item)
            }

            scope.clickFn = function(item) {
                switch(item){
                    case 'filter' :
                        //email
                        scope.emailBtn = true;
                        scope.emailPanel = false;
                        //filter
                        scope.filterBtn = false;
                        scope.filterPanel = true;
                        gs.setDynamicFilterHeight(scope,true);
                        break;
                    case 'filter-close' :
                        //email
                        scope.emailBtn = true;
                        scope.emailPanel = false;
                        //filter
                        scope.filterBtn = true;
                        scope.filterPanel = false;
                        gs.setDynamicFilterHeight(scope,false);
                        break;
                    case 'email' :
                        //filter
                        scope.filterBtn = true;
                        scope.filterPanel = false;
                        //email
                        scope.emailBtn = false;
                        scope.emailPanel = true;
                    break;
                    case 'email-close' :
                        //filter
                        scope.filterBtn = true;
                        scope.filterPanel = false;
                        //email
                        scope.emailBtn = true;
                        scope.emailPanel = false;
                    break;
                    case 'export' :
                        scope.exportIconCtrl = !scope.exportIconCtrl;
                    break;
                    default : //nothing 
                }
            }

            scope.openItem = function(e, type){
                switch(type) {
                    case 1: // email part
                        // scope.emailIconCtrl = false;
                        // scope.emailPanel = true;
                        // scope.emailPanel = true;
                        // scope.filterPanel = false;
                        scope.sendEmail();
                        break;
                    case 2: // pdf part
                        scope.generatePDF();
                        break;
                    case 3: // excel part
                        // scope.exportIconCtrl = false;
                        console.log('excel part');
                        scope.exportExcelExecute();
                        // exportExcel(scope);
                        break;
                    case 4: // word part
                        // scope.exportIconCtrl = false;
                        //console.log('word part');
                        scope.generateWord();
                        break;
                    case 5: // print part
                        // scope.exportIconCtrl = false;
                        console.log('print part');
                        break;
                    default:
                        console.log('default part');
                }
            }

            scope.closeItem = function() {
               scope.clickFn('email-close');
            }


            scope.toggleToolPanel = function() {
                scope.viewbyIconCtrl = !scope.viewbyIconCtrl;
                var showing = scope.gridOptions.api.isToolPanelShowing();
                scope.gridOptions.api.showToolPanel(!showing);
                scope.gridOptions.api.sizeColumnsToFit();
            }

            scope.$on('dropdown-hide', function(){
                scope.exportIconCtrl = false;
                // scope.$apply()
            })
 
            // function exportExcel(scope) {
            //     var exportModal = $modal({
            //         scope: scope,
            //         template: 'sharedcomponents/toolbar/export.html',
            //         show: true,
            //         title: 'Excel file name',
            //         backdrop: 'static',
            //         id: 'export-excel'
            //     });
            // }

            scope.exportExcelExecute = function() {
                console.log(scope)
                var pageName = scope.$parent.$parent.pageName;
                if(!utils.isEmpty(pageName)){
                    //do nothing
                }else{
                    pageName = 'export';
                }
                // if(!utils.isEmpty(scope.excelfileName)){
                //     var name = scope.excelfileName + '.csv';
                // }
                var name = pageName + '.xls'
                console.log(scope.excelfileName)
                var params = {
                    skipHeader: scope.skipHeader === true,
                    skipFooters: scope.skipFooters === true,
                    skipGroups: scope.skipGroups === true,
                    fileName: name
                };

                if (scope.customHeader) {
                    params.customHeader = '[[[ This ia s sample custom header - so meta data maybe?? ]]]\n';
                }
                if (scope.customFooter) {
                    params.customFooter = '[[[ This ia s sample custom footer - maybe a summary line here?? ]]]\n';
                }

                scope.gridOptions.api.exportDataAsCsv(params);
            }
            

            // function exportExcel() {
            //     var ag = scope.gridOptions
            //     var ss = scope.gridOptions.columnDefs
            //     var jsonData = scope.gridOptions.rowData;
            //     var csv = '';
            //     var row = '';
            //     var indexTemp = ''
            //     for (var index in ss) {
            //         row += ss[index].headerName + ',';
            //         indexTemp += ss[index].field + ',';
            //     }
                
            //     if (jsonData.length > 0){
            //     _.each(jsonData, function(jsonData){
            //         tempEntityVM = mitem.entityVM;
            //         tempMitem = angular.copy(mitem)
                    
            //         delete jsonData.entityVM
            //         delete tempMitem.entityHM
            //         tempMitem.subEntityDesc = tempMitem.moduleDesc
            //         delete  tempMitem.moduleDesc
            //         finalArray.push(tempMitem)
            //     });
            // }

            //     row = row.slice(0, -1);
            //     csv += row + '\r\n';

            //     for (var i = 0; i < jsonData.length; i++) {
            //         row = '';
            //         for (indexTemp in jsonData[i]) {
            //             row += '"' + jsonData[i][indexTemp] + '",';
            //         }
            //         row.slice(0, -1);
            //         csv += row + '\r\n';
            //     }

            //     var uri = 'data:text/csv;charset=utf-8,' + escape(csv);
            //     var link = document.createElement("a");
            //     link.href = uri;
            //     link.style = "visibility:hidden";
            //     scope.filename = 'test'
            //     link.download = scope.filename.replace(/ /g, "_") + ".csv";
            //     document.body.appendChild(link);
            //     link.click();
            //     document.body.removeChild(link);
            // }

            // scope.exportDataToCsv = function() {
            //     var jsonData = scope.gridOptions.rowData;
            //     var csv = '';
            //     var row = '';
            //     for (var index in jsonData[0]) {
            //         row += index + ',';
            //     }

            //     row = row.slice(0, -1);
            //     csv += row + '\r\n';

            //     for (var i = 0; i < jsonData.length; i++) {
            //         row = '';
            //         for (var index in jsonData[i]) {
            //             row += '"' + jsonData[i][index] + '",';
            //         }
            //         row.slice(0, -1);
            //         csv += row + '\r\n';
            //     }

            //     var uri = 'data:text/csv;charset=utf-8,' + escape(csv);
            //     var link = document.createElement("a");
            //     link.href = uri;
            //     link.style = "visibility:hidden";
            //     scope.filename = 'test'
            //     link.download = scope.filename.replace(/ /g, "_") + ".xls";
            //     document.body.appendChild(link);
            //     link.click();
            //     document.body.removeChild(link);
            //     }

        };

        var controller = function($scope, $element, $attrs, $modal, $http, $q, $transclude) {

            $scope.icons = [{"value":"default","label":"<i class=\"marR5 icon-gear\"></i>Default Layout"},
                            {"value":"horizontal","label":"<i class=\"marR5 icon-arrows-h\"></i> Horizontal Layout"},
                            {"value":"vertical","label":"<i class=\"marR5 icon-arrows-v\"></i> Vertical Layout"}];

            var currentAcccesses = ZOOMCONST.CURRENTACCESSES;
            $scope.showToolbar = currentAcccesses.emailAccess 
                                || currentAcccesses.exportAccess 
                                || currentAcccesses.readAccess;              

            if (currentAcccesses.emailAccess){
                $scope.emailAccess = true;
            }
            if (currentAcccesses.exportAccess){
                $scope.exportAccess = true;
            }
            if (currentAcccesses.readAccess){
                $scope.readAccess = true;
            }
        };
        return {
            restrict: 'AE',
            templateUrl: 'sharedcomponents/toolbar/toolbar.html',
            controller : controller,
            link:link
        };
    }]);

});