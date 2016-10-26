'use strict';

angular.module('contraApp')
.controller('gpmoCtrl', function($scope) {
 $scope.myData = [
    {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }
];

$scope.gridOptions1 = { 
        data: 'myData',
        columnDefs: [{field: 'firstName', displayName: 'POR#', width:80}, 
                     {field:'lastName', displayName:'POR Title', width:100},
                     {field:'company', displayName:'BU', width:60},
                     {field:'employed', displayName:'FYQ', width:80},
                    ]
    };

});