'use strict';

angular.module('contraApp')
.controller('expandableGridCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
      $scope.gridOptions = {
        enableRowSelection: true,
        expandableRowTemplate: 'views/expandableRowTemplate.html',
        expandableRowHeight: 150
      }
 
      $scope.gridOptions.columnDefs = [
        { name: 'id', field:"id", pinnedLeft:true, width:100 },
        { name: 'guid', width:100},   
        { name: 'isActive', width:100}, 
        { name: 'balance', width:100}, 
        { name: 'picture', width:100},  
        { name: 'gender', width:100},
        { name: 'company', width:100},
        { name: 'email', width:100},                                                    
        { name: 'name', width:100},
        { name: 'age', width:100},
        { name: 'company', width:100},
        { name: 'email', width:100},                                                    
        { name: 'name', width:100},
        { name: 'age', width:100},
        { name: 'phone', width:100}, 
        { name: 'address.street', width:100}, 
        { name: 'address.state', width:100}, 
        { name: 'address.zip', width:100},                                    
        { name: 'address.city', width:100}
      ];
 
      $http.get('/data/500_complex.json')
        .success(function(data) {
          for(var i = 0; i < data.length; i++){
            data[i].subGridOptions = {
            enableVerticalScrollbar: false,
            enableHorizontalScrollbar: false,
              columnDefs: [ 
              { name:"Id", field:"id", width:50},
        { name: 'guid', width:50},   
        { name: 'isActive', width:100}, 
        { name: 'balance', width:100}, 
        { name: 'picture', width:100},  
        { name: 'gender', width:100},
        { name: 'company', width:100},
        { name: 'email', width:100},                                                    
        { name: 'name', width:100},
        { name: 'age', width:100},
        { name: 'company', width:100},
        { name: 'email', width:100},                                                    
        { name: 'name', width:100},
        { name: 'age', width:100},
        { name: 'phone', width:100}, 
        { name: 'address.street', width:100}, 
        { name: 'address.state', width:100}, 
        { name: 'address.zip', width:100},                                    
        { name: 'address.city',width:100}

              ],
              data: data[i].friends
            }
          }
          $scope.gridOptions.data = data;
        });
    }]);
 

