'use strict';

angular.module('contraApp')
.controller('approvalCtrl', function($scope) {

    $scope.myData = [{Sequence_ID : "1", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "2", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "3", Approval_Group_Name: "Group1", Approve_Group_Type: "Any", approver: "wen.zhang3@hpe.com", status: "Pending"},
                    {Sequence_ID : "4", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"}

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

    $scope.filterBtn = false;
    $scope.filterPanel = true;


    $scope.clickFn = function(item) {
        switch(item){
            case 'filter' :
                //email
                $scope.emailBtn = true;
                $scope.emailPanel = false;
                //filter
                $scope.filterBtn = false;
                $scope.filterPanel = true;

                break;
            case 'filter-close' :
                //email
                $scope.emailBtn = true;
                $scope.emailPanel = false;
                //filter
                $scope.filterBtn = true;
                $scope.filterPanel = false;

                break;
            break;
            default : //nothing 
        }
    } 
});