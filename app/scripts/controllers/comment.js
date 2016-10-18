'use strict';

angular.module('contraApp')

.controller('commentCtrl', ['$scope', '$http', '$interval', 'uiGridGroupingConstants', function ($scope, $http, $interval, uiGridGroupingConstants ) {
  $scope.isCommentActive = true;
  $scope.warningFlag = false;


$scope.myData = [{reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"},                                                                                                                              
                     {reason_code : "Market", promo_type: "TPL NDP Local", business_segement: "3rd Party Sofeware x86", product_number: "701587-A21", description: "MS WS12 Ess ROK E/F/I/G/S SW", pl:"J3", country: "German", region: "EMEA", avg_list_price: "$411", std_discount: "20%", ndp: "NDP"}
                    ];

    $scope.gridOptions = { 
        data: 'myData',
        enableCellSelection: true,
        enableRowSelection: true,
        enableCellEditOnFocus: true,
        columnDefs: [{field: 'reason_code', displayName: 'Reason Code', enableCellEdit: true}, 
                     {field:'promo_type', displayName:'Promo Type', enableCellEdit: true},
                     {field:'business_segement', displayName:'Business Segement', enableCellEdit: true},
                     {field:'product_number', displayName:'Product Number', enableCellEdit: true},
                     {field:'description', displayName:'Description', enableCellEdit: true},
                     {field:'pl', displayName:'PL', enableCellEdit: true, width: 500},
                     {field:'country', displayName:'Country', enableCellEdit: true},
                     {field:'region', displayName:'Region', enableCellEdit: true},
                     {field:'avg_list_price', displayName:'Avg List Price', enableCellEdit: true},
                     {field:'std_discount', displayName:'STD List Price', enableCellEdit: true},
                     {field:'ndp', displayName:'NDP', enableCellEdit: true}
                    ]
    };


  $scope.setWarningFlag = function(){
    $scope.warningFlag = true;
  };

  $scope.setWarningFlagFlase = function(){
    $scope.warningFlag = false;
  };

  $scope.gridOptions = {
    enableFiltering: true,
    treeRowHeaderAlwaysVisible: false,
    columnDefs: [
      { name: 'name', width: '30%' },
      { name: 'gender', grouping: { groupPriority: 1 }, sort: { priority: 1, direction: 'asc' }, width: '20%', cellFilter: 'mapGender' },
      { name: 'age', treeAggregationType: uiGridGroupingConstants.aggregation.MAX, width: '20%' },
      { name: 'company', width: '25%' },
      { name: 'registered', width: '40%', cellFilter: 'date', type: 'date' },
      { name: 'state', grouping: { groupPriority: 0 }, sort: { priority: 0, direction: 'desc' }, width: '35%', cellTemplate: '<div><div ng-if="!col.grouping || col.grouping.groupPriority === undefined || col.grouping.groupPriority === null || ( row.groupHeader && col.grouping.groupPriority === row.treeLevel )" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div></div>' },
      { name: 'balance', width: '25%', cellFilter: 'currency', treeAggregationType: uiGridGroupingConstants.aggregation.AVG, customTreeAggregationFinalizerFn: function( aggregation ) {
        aggregation.rendered = aggregation.value;
      }
      
    }
    ],
    onRegisterApi: function( gridApi ) {
      $scope.gridApi = gridApi;
    }
  };
 
  $http.get('/data/500_complex.json')
    .success(function(data) {
      for ( var i = 0; i < data.length; i++ ){
        var registeredDate = new Date( data[i].registered );
        data[i].state = data[i].address.state;
        data[i].gender = data[i].gender === 'male' ? 1: 2;
        data[i].balance = Number( data[i].balance.slice(1).replace(/,/,'') );
        data[i].registered = new Date( registeredDate.getFullYear(), registeredDate.getMonth(), 1 );
      }
      delete data[2].age;
      $scope.gridOptions.data = data;
    });
 
  $scope.expandAll = function(){
    $scope.gridApi.treeBase.expandAllRows();
  };
 
  $scope.toggleRow = function( rowNum ){
    $scope.gridApi.treeBase.toggleRowTreeState($scope.gridApi.grid.renderContainers.body.visibleRowCache[rowNum]);
  };
 
  $scope.changeGrouping = function() {
    $scope.gridApi.grouping.clearGrouping();
    $scope.gridApi.grouping.groupColumn('age');
    $scope.gridApi.grouping.aggregateColumn('state', uiGridGroupingConstants.aggregation.COUNT);
  };
 
  $scope.getAggregates = function() {
    var aggregatesTree = [];
    var gender
 
    var recursiveExtract = function( treeChildren ) {
      return treeChildren.map( function( node ) {
        var newNode = {};
        angular.forEach(node.row.entity, function( attributeCol ) {
          if( typeof(attributeCol.groupVal) !== 'undefined' ) {
            newNode.groupVal = attributeCol.groupVal;
            newNode.aggVal = attributeCol.value;
          }
        });
        newNode.otherAggregations = node.aggregations.map( function( aggregation ) {
          return { colName: aggregation.col.name, value: aggregation.value, type: aggregation.type };
        });
        if( node.children ) {
          newNode.children = recursiveExtract( node.children );
        }
        return newNode;
      });
    }
 
    aggregatesTree = recursiveExtract( $scope.gridApi.grid.treeBase.tree );
 
    console.log(aggregatesTree);
  };
}])

.filter('mapGender', function() {
  var genderHash = {
    1: 'male',
    2: 'female'
  };
  return function(input) {
    var result;
    var match;
    if (!input){
      return '';
    } else if (result = genderHash[input]) {
      return result;
    } else if ( ( match = input.match(/(.+)( \(\d+\))/) ) && ( result = genderHash[match[1]] ) ) {
      return result + match[2];
    } else {
      return input;
    }
  };
});