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


    $scope.isPromoListActive = true;
    $scope.myData = [{promo_id : "10017", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10017", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10017", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10017", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10017", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10017", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10017", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10017", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10017", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"},
                    {promo_id : "10017", promo_title: "Jason Testing", gbu: "HP Networking", fyq: "2017Q1", status: "Draft", last_modified:"10/21/2016 8:31 AM", approvol_status: "Approved", owner: "Jason Zhang"}
                    ];

    $scope.gridOptions = { 
        data: 'myData',
        enableCellSelection: true,
        enableRowSelection: true,
        enableCellEditOnFocus: true,
        columnDefs: [{field: 'promo_id', displayName: 'Prod. Id', minWidth:80}, 
                     {field:'promo_title', displayName:'POR Title', minWidth:120},
                     {field:'gbu', displayName:'BU', minWidth:120},
                     {field:'fyq', displayName:'FYQ', minWidth:100},
                     {field:'status', displayName:'Status', minWidth:100},
                     {field:'last_modified', displayName:'Last Modified', minWidth:120},
                     {field:'approvol_status', displayName:'Approval Status', minWidth:120},
                     {field:'owner', displayName:'Owner', minWidth:140}
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

    $scope.gridOptions1 = { 
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



    $scope.approverData = [{Sequence_ID : "1", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "2", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "3", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "4", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1"},
                    {Sequence_ID : "5", Approval_Group_Name: "Group1"}

                    ];

    $scope.gridOptions2 = { 
        data: 'approverData',
        enableCellSelection: true,
        enableRowSelection: true,
        enableCellEditOnFocus: true,
        columnDefs: [{field: 'reason_code', displayName: 'Reason Code', enableCellEdit: true}, 
                     {field:'promo_type', displayName:'Promo Type', enableCellEdit: true},
                    ]
    };
    
});


//For Tabs 
//***************************************************************
  'use strict';

  function extend( a, b ) {
    for( var key in b ) { 
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  function CBPFWTabs( el, options ) {
    this.el = el;
    this.options = extend( {}, this.options );
      extend( this.options, options );
      this._init();
  }

  CBPFWTabs.prototype.options = {
    start : 0
  };

  CBPFWTabs.prototype._init = function() {
    // tabs elems
    this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
    // content items
    this.items = [].slice.call( this.el.querySelectorAll( '.content-wrap > section' ) );
    // current index
    this.current = -1;
    // show current content item
    this._show();
    // init events
    this._initEvents();
  };

  CBPFWTabs.prototype._initEvents = function() {
    var self = this;
    this.tabs.forEach( function( tab, idx ) {
      tab.addEventListener( 'click', function( ev ) {
        ev.preventDefault();
        self._show( idx );
      } );
    } );
  };

  CBPFWTabs.prototype._show = function( idx ) {
    if( this.current >= 0 ) {
      this.tabs[ this.current ].className = this.items[ this.current ].className = '';
    }
    // change current
    this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
    this.tabs[ this.current ].className = 'tab-current';
    this.items[ this.current ].className = 'content-current';
  };

      (function() {

        [].slice.call( document.querySelectorAll( '.tabs' ) ).forEach( function( el ) {
          new CBPFWTabs( el );
        });

      })();