'use strict';

angular.module('contraApp')

.controller('promoNew4Ctrl', ['$scope', '$http', '$interval', 'uiGridGroupingConstants', function ($scope, $http, $interval, uiGridGroupingConstants ) {
  $scope.isPromoNew4Active = true;
  $scope.warningFlag = false;

  $scope.setWarningFlag = function(){
    $scope.warningFlag = true;
  };

  $scope.setWarningFlagFlase = function(){
    $scope.warningFlag = false;
  };


  $scope.gridOptions = {
    columnDefs: [
      {field: 'In',  width: 80, cellTemplate: '<span class="bg-green">opt-in</span>',  pinnedLeft:true},      
      {field: 'Out',  width: 80, cellTemplate: '<span class="bg-red">opt-out</span>'},
      {field: 'Updated',  width: 80, cellTemplate: '<span class="bg-green">updated</span>'},   
      {field: 'Added',  width: 80, cellTemplate: '<span class="bg-green">added</span>'},   
      {field: 'None',  width: 80, cellTemplate: '<span class="bg-gray">none</span>'}, 

      {field: 'In/Out',  width: 80, cellTemplate: '<a href="" title="<div class=\'tooltips-header\'><label>Tooltip Name</label></div><div class=\'tooltips-content\'>Description: This guardrail checks the Adjusted Net Price against the BD net price of the SKU present in all \'No Touch\' deals that will be active across EMEA during the duration of the event.</div><div class=\'tooltips-content top-padding5\'>Rule:<br /><span class=\'tooltips-green\'>GREEN:</span> If 0% <= ROI <= 10% <br /><span class=\'tooltips-yellow\'>AMBER:</span> If 10% < ROI <= 20% <br /><span class=\'tooltips-red\'>RED:</span> If ROI <0% or ROI > 20%</div>"><i class="fa fa-check-circle table-icon-green" aria-hidden="true"></i></a> <a href="" title="<div class=\'tooltips-header\'><label>Tooltip Name</label></div><div class=\'tooltips-content\'>Description: This guardrail checks the Adjusted Net Price against the BD net price of the SKU present in all \'No Touch\' deals that will be active across EMEA during the duration of the event.</div><div class=\'tooltips-content top-padding5\'>Rule:<br /><span class=\'tooltips-green\'>GREEN:</span> If 0% <= ROI <= 10% <br /><span class=\'tooltips-yellow\'>AMBER:</span> If 10% < ROI <= 20% <br /><span class=\'tooltips-red\'>RED:</span> If ROI <0% or ROI > 20%</div>"><i class="fa fa-check-circle table-icon-gray" aria-hidden="true"></i></a>'},
      {field: 'In/Out',  width: 80, cellTemplate: '<i class="fa fa-check-circle table-icon-gray" aria-hidden="true"></i>'},        
      {field: 'Revert',  width: 80, cellTemplate: '<i class="fa fa-undo table-icon-green" aria-hidden="true"></i>'},   
      {field: 'Follow',  width: 80, cellTemplate: '<i class="fa fa-clone table-icon-green" aria-hidden="true"></i>'},                                  
      
      { name: 'name', cellTooltip: '<div class="tooltips-header"><label>Tooltip Name</label></div><div class="tooltips-content">This guardrail checks the Adjusted Net Price against the BD net price of the SKU present in all \'No Touch\' deals that will be active across EMEA during the duration of the event</div>',  width: 200 },
      { name: 'gender', width: 100},
      { name: 'age', width: 100 },
      { name: 'company', width: 200 },
      { name: 'registered', width: 300 },
      { name: 'state',  width: 100 },
      { name: 'balance', minWidth: 160}
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
        data[i].registered = new Date( registeredDate.getFullYear(), registeredDate.getMonth(), 1 )
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
    var gender;
 
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
