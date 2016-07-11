'use strict';

/**
 * @ngdoc function
 * @name contraApp.controller:MainCtrl
 * @description
 * # promoNewCtrl
 * Controller of the contraApp
 */

angular.module('contraApp')
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
cfpLoadingBarProvider.spinnerTemplate = '<div id="blocker"><div class="loading">Loading...</div><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>';

cfpLoadingBarProvider.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>';
}])

.controller('promoListCtrl', function($scope) {

    $scope.promoListStatus = "active";
    $scope.promoManagementStatus = "nav-active";
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

    $scope.myData1 = [{Sequence_ID : "1", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "2", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "3", Approval_Group_Name: "Group1", Approve_Group_Type: "Any", approver: "wen.zhang3@hpe.com", status: "Pending"},
                    {Sequence_ID : "4", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1", Approve_Group_Type: "All", approver: "wen.zhang3@hpe.com", status: "Approved"}

                    ];

    $scope.gridOptions = { 
        data: 'myData1',
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

});