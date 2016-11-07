'use strict';

angular.module('contraApp')
.controller('expandableGridCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
      $scope.gridOptions = {
        enableRowSelection: true,
        expandableRowTemplate: 'views/expandableRowTemplate.html',
        expandableRowHeight: 150
      }
 
      $scope.gridOptions.columnDefs = [
        { name: 'id', field:"id", width:100 },
        { name: 'id1', field:"id1",  width:100 },
        { name: 'id2', field:"id2",  width:100 },
        { name: 'id3', field:"id3",  width:100 },
        { name: 'id4', field:"id4",  width:100 },
        { name: 'id5', field:"id5",  width:100 },
        { name: 'id6', field:"id6",  width:100 },
        { name: 'id7', field:"id7",  width:100 },  
        { name: 'id8', field:"id8",  width:100 },
        { name: 'id9', field:"id9",  width:100 },
        { name: 'id10', field:"id10",  width:100 },
        { name: 'id11', field:"id11",  width:100 },                                     
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
        { name: 'id1', field:"id1",  width:50 },
        { name: 'id2', field:"id2",  width:100 },
        { name: 'id3', field:"id3",  width:100 },
        { name: 'id4', field:"id4",  width:100 },
        { name: 'id5', field:"id5",  width:100 },
        { name: 'id6', field:"id6",  width:100 },
        { name: 'id7', field:"id7",  width:100 },  
        { name: 'id8', field:"id8",  width:100 },
        { name: 'id9', field:"id9",  width:100 },
        { name: 'id10', field:"id10",  width:100 },
        { name: 'id11', field:"id11",  width:100 },                         
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
        { name: 'address.city',width:100}
              ],
              data: data[i].friends
            }
          }
          $scope.gridOptions.data = data;
        });
    }]);
 

