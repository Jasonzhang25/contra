'use strict';

angular.module('contraApp')
.controller('expandableGridCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
      $scope.gridOptions = {
        enableRowSelection: true,
        expandableRowTemplate: 'views/expandableRowTemplate.html',
        expandableRowHeight: 150
      }
 
      $scope.gridOptions.columnDefs = [
        { name: 'id', pinnedLeft:true, width:100 },
        { name: 'name', width:100},
        { name: 'age', width:100},
        { name: 'address.city'}
      ];
 
      $http.get('/data/500_complex.json')
        .success(function(data) {
          for(var i = 0; i < data.length; i++){
            data[i].subGridOptions = {
              columnDefs: [ 
              {name:"Id", field:"id", pinnedLeft:true, width:100},
              {name:"Name", width:100},
              { name: 'age', width:100},
              { name: 'address.city'}

              ],
              data: data[i].friends
            }
          }
          $scope.gridOptions.data = data;
        });
    }]);
 

