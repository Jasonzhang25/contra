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

.controller('promoNewCtrl', function($scope) {

    $scope.isPromoNewActive = true;


  $scope.selectedDate = new Date();
  $scope.selectedDateAsNumber = Date.UTC(1986, 1, 22);
  // $scope.fromDate = new Date();
  // $scope.untilDate = new Date();
  $scope.getType = function(key) {
    return Object.prototype.toString.call($scope[key]);
  };

    $scope.clearDates = function() {
    $scope.selectedDate = null;
    };

    $scope.dateClick = function() {
                    scope.dpShow = !scope.dpShow;
                    check();
                };

    function check() {
                        element.next('span').remove();
                    };
                    
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

    $scope.myData1 = [{reason_code : "product_number", Description: "3rd Party Sofeware x86", Product_Category: "701587-A21"},
                    {reason_code : "product_number", Description: "3rd Party Sofeware x86", Product_Category: "701587-A21"},
                    {reason_code : "product_number", Description: "3rd Party Sofeware x86", Product_Category: "701587-A21"},
                    {reason_code : "product_number", Description: "3rd Party Sofeware x86", Product_Category: "701587-A21"},
                    {reason_code : "product_number", Description: "3rd Party Sofeware x86", Product_Category: "701587-A21"},
                    {reason_code : "product_number", Description: "3rd Party Sofeware x86", Product_Category: "701587-A21"},
                    {reason_code : "product_number", Description: "3rd Party Sofeware x86", Product_Category: "701587-A21"},
                    {reason_code : "product_number", Description: "3rd Party Sofeware x86", Product_Category: "701587-A21"},
                    {reason_code : "product_number", Description: "3rd Party Sofeware x86", Product_Category: "701587-A21"}
                    ];

    $scope.filterBtn = false;
    $scope.filterPanel = true;
    $scope.viewbyIconCtrl = false;

    if($scope.showViewBy === false){
        $scope.showViewBy = false;
    }else{
        $scope.showViewBy = true;
    }

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

        $scope.options = {
            chart: {
                type: 'cumulativeLineChart',
                height: 300,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 65
                },
                x: function(d){ return d[0]; },
                y: function(d){ return d[1]/100; },
                average: function(d) { return d.mean/100; },

                color: d3.scale.category10().range(),
                duration: 300,
                useInteractiveGuideline: true,
                clipVoronoi: false,

                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function(d) {
                        return d3.time.format('%m/%d/%y')(new Date(d))
                    },
                    showMaxMin: false,
                    staggerLabels: true
                },

                yAxis: {
                    axisLabel: 'Y Axis',
                    tickFormat: function(d){
                        return d3.format(',.1%')(d);
                    },
                    axisLabelDistance: 0
                }
            }
        };

        $scope.data = [
            {
                key: "Long",
                values: [ [ 1083297600000 , -2.974623048543] , [ 1085976000000 , -1.7740300785979] , [ 1088568000000 , 4.4681318138177] , [ 1091246400000 , 7.0242541001353] , [ 1093924800000 , 7.5709603667586] , [ 1096516800000 , 20.612245065736] , [ 1099195200000 , 21.698065237316] , [ 1101790800000 , 40.501189458018] , [ 1104469200000 , 50.464679413194] , [ 1107147600000 , 48.917421973355] , [ 1109566800000 , 63.750936549160] , [ 1112245200000 , 59.072499126460] , [ 1114833600000 , 43.373158880492] , [ 1117512000000 , 54.490918947556] , [ 1120104000000 , 56.661178852079] , [ 1122782400000 , 73.450103545496] , [ 1125460800000 , 71.714526354907] , [ 1128052800000 , 85.221664349607] , [ 1130734800000 , 77.769261392481] , [ 1133326800000 , 95.966528716500] , [ 1136005200000 , 107.59132116397] , [ 1138683600000 , 127.25740096723] , [ 1141102800000 , 122.13917498830] , [ 1143781200000 , 126.53657279774] , [ 1146369600000 , 132.39300992970] , [ 1149048000000 , 120.11238242904] , [ 1151640000000 , 118.41408917750] , [ 1154318400000 , 107.92918924621] , [ 1156996800000 , 110.28057249569] , [ 1159588800000 , 117.20485334692] , [ 1162270800000 , 141.33556756948] , [ 1164862800000 , 159.59452727893] , [ 1167541200000 , 167.09801853304] , [ 1170219600000 , 185.46849659215] , [ 1172638800000 , 184.82474099990] , [ 1175313600000 , 195.63155213887] , [ 1177905600000 , 207.40597044171] , [ 1180584000000 , 230.55966698196] , [ 1183176000000 , 239.55649035292] , [ 1185854400000 , 241.35915085208] , [ 1188532800000 , 239.89428956243] , [ 1191124800000 , 260.47781917715] , [ 1193803200000 , 276.39457482225] , [ 1196398800000 , 258.66530682672] , [ 1199077200000 , 250.98846121893] , [ 1201755600000 , 226.89902618127] , [ 1204261200000 , 227.29009273807] , [ 1206936000000 , 218.66476654350] , [ 1209528000000 , 232.46605902918] , [ 1212206400000 , 253.25667081117] , [ 1214798400000 , 235.82505363925] , [ 1217476800000 , 229.70112774254] , [ 1220155200000 , 225.18472705952] , [ 1222747200000 , 189.13661746552] , [ 1225425600000 , 149.46533007301] , [ 1228021200000 , 131.00340772114] , [ 1230699600000 , 135.18341728866] , [ 1233378000000 , 109.15296887173] , [ 1235797200000 , 84.614772549760] , [ 1238472000000 , 100.60810015326] , [ 1241064000000 , 141.50134895610] , [ 1243742400000 , 142.50405083675] , [ 1246334400000 , 139.81192372672] , [ 1249012800000 , 177.78205544583] , [ 1251691200000 , 194.73691933074] , [ 1254283200000 , 209.00838460225] , [ 1256961600000 , 198.19855877420] , [ 1259557200000 , 222.37102417812] , [ 1262235600000 , 234.24581081250] , [ 1264914000000 , 228.26087689346] , [ 1267333200000 , 248.81895126250] , [ 1270008000000 , 270.57301075186] , [ 1272600000000 , 292.64604322550] , [ 1275278400000 , 265.94088520518] , [ 1277870400000 , 237.82887467569] , [ 1280548800000 , 265.55973314204] , [ 1283227200000 , 248.30877330928] , [ 1285819200000 , 278.14870066912] , [ 1288497600000 , 292.69260960288] , [ 1291093200000 , 300.84263809599] , [ 1293771600000 , 326.17253914628] , [ 1296450000000 , 337.69335966505] , [ 1298869200000 , 339.73260965121] , [ 1301544000000 , 346.87865120765] , [ 1304136000000 , 347.92991526628] , [ 1306814400000 , 342.04627502669] , [ 1309406400000 , 333.45386231233] , [ 1312084800000 , 323.15034181243] , [ 1314763200000 , 295.66126882331] , [ 1317355200000 , 251.48014579253] , [ 1320033600000 , 295.15424257905] , [ 1322629200000 , 294.54766764397] , [ 1325307600000 , 295.72906119051] , [ 1327986000000 , 325.73351347613] , [ 1330491600000 , 340.16106061186] , [ 1333166400000 , 345.15514071490] , [ 1335758400000 , 337.10259395679] , [ 1338436800000 , 318.68216333837] , [ 1341028800000 , 317.03683945246] , [ 1343707200000 , 318.53549659997] , [ 1346385600000 , 332.85381464104] , [ 1348977600000 , 337.36534373477] , [ 1351656000000 , 350.27872156161] , [ 1354251600000 , 349.45128876100]]
                ,
                mean: 250
            },
            {
                key: "Short",
                values: [ [ 1083297600000 , -0.77078283705125] , [ 1085976000000 , -1.8356366650335] , [ 1088568000000 , -5.3121322073127] , [ 1091246400000 , -4.9320975829662] , [ 1093924800000 , -3.9835408823225] , [ 1096516800000 , -6.8694685316805] , [ 1099195200000 , -8.4854877428545] , [ 1101790800000 , -15.933627197384] , [ 1104469200000 , -15.920980069544] , [ 1107147600000 , -12.478685045651] , [ 1109566800000 , -17.297761889305] , [ 1112245200000 , -15.247129891020] , [ 1114833600000 , -11.336459046839] , [ 1117512000000 , -13.298990907415] , [ 1120104000000 , -16.360027000056] , [ 1122782400000 , -18.527929522030] , [ 1125460800000 , -22.176516738685] , [ 1128052800000 , -23.309665368330] , [ 1130734800000 , -21.629973409748] , [ 1133326800000 , -24.186429093486] , [ 1136005200000 , -29.116707312531] , [ 1138683600000 , -37.188037874864] , [ 1141102800000 , -34.689264821198] , [ 1143781200000 , -39.505932105359] , [ 1146369600000 , -45.339572492759] , [ 1149048000000 , -43.849353192764] , [ 1151640000000 , -45.418353922571] , [ 1154318400000 , -44.579281059919] , [ 1156996800000 , -44.027098363370] , [ 1159588800000 , -41.261306759439] , [ 1162270800000 , -47.446018534027] , [ 1164862800000 , -53.413782948909] , [ 1167541200000 , -50.700723647419] , [ 1170219600000 , -56.374090913296] , [ 1172638800000 , -61.754245220322] , [ 1175313600000 , -66.246241587629] , [ 1177905600000 , -75.351650899999] , [ 1180584000000 , -81.699058262032] , [ 1183176000000 , -82.487023368081] , [ 1185854400000 , -86.230055113277] , [ 1188532800000 , -84.746914818507] , [ 1191124800000 , -100.77134971977] , [ 1193803200000 , -109.95435565947] , [ 1196398800000 , -99.605672965057] , [ 1199077200000 , -99.607249394382] , [ 1201755600000 , -94.874614950188] , [ 1204261200000 , -105.35899063105] , [ 1206936000000 , -106.01931193802] , [ 1209528000000 , -110.28883571771] , [ 1212206400000 , -119.60256203030] , [ 1214798400000 , -115.62201315802] , [ 1217476800000 , -106.63824185202] , [ 1220155200000 , -99.848746318951] , [ 1222747200000 , -85.631219602987] , [ 1225425600000 , -63.547909262067] , [ 1228021200000 , -59.753275364457] , [ 1230699600000 , -63.874977883542] , [ 1233378000000 , -56.865697387488] , [ 1235797200000 , -54.285579501988] , [ 1238472000000 , -56.474659581885] , [ 1241064000000 , -63.847137745644] , [ 1243742400000 , -68.754247867325] , [ 1246334400000 , -69.474257009155] , [ 1249012800000 , -75.084828197067] , [ 1251691200000 , -77.101028237237] , [ 1254283200000 , -80.454866854387] , [ 1256961600000 , -78.984349952220] , [ 1259557200000 , -83.041230807854] , [ 1262235600000 , -84.529748348935] , [ 1264914000000 , -83.837470195508] , [ 1267333200000 , -87.174487671969] , [ 1270008000000 , -90.342293007487] , [ 1272600000000 , -93.550928464991] , [ 1275278400000 , -85.833102140765] , [ 1277870400000 , -79.326501831592] , [ 1280548800000 , -87.986196903537] , [ 1283227200000 , -85.397862121771] , [ 1285819200000 , -94.738167050020] , [ 1288497600000 , -98.661952897151] , [ 1291093200000 , -99.609665952708] , [ 1293771600000 , -103.57099836183] , [ 1296450000000 , -104.04353411322] , [ 1298869200000 , -108.21382792587] , [ 1301544000000 , -108.74006900920] , [ 1304136000000 , -112.07766650960] , [ 1306814400000 , -109.63328199118] , [ 1309406400000 , -106.53578966772] , [ 1312084800000 , -103.16480871469] , [ 1314763200000 , -95.945078001828] , [ 1317355200000 , -81.226687340874] , [ 1320033600000 , -90.782206596168] , [ 1322629200000 , -89.484445370113] , [ 1325307600000 , -88.514723135326] , [ 1327986000000 , -93.381292724320] , [ 1330491600000 , -97.529705609172] , [ 1333166400000 , -99.520481439189] , [ 1335758400000 , -99.430184898669] , [ 1338436800000 , -93.349934521973] , [ 1341028800000 , -95.858475286491] , [ 1343707200000 , -95.522755836605] , [ 1346385600000 , -98.503848862036] , [ 1348977600000 , -101.49415251896] , [ 1351656000000 , -101.50099325672] , [ 1354251600000 , -99.487094927489]]
                ,
                mean: -60
            },
            {
                key: "Gross",
                mean: 125,
                values: [ [ 1083297600000 , -3.7454058855943] , [ 1085976000000 , -3.6096667436314] , [ 1088568000000 , -0.8440003934950] , [ 1091246400000 , 2.0921565171691] , [ 1093924800000 , 3.5874194844361] , [ 1096516800000 , 13.742776534056] , [ 1099195200000 , 13.212577494462] , [ 1101790800000 , 24.567562260634] , [ 1104469200000 , 34.543699343650] , [ 1107147600000 , 36.438736927704] , [ 1109566800000 , 46.453174659855] , [ 1112245200000 , 43.825369235440] , [ 1114833600000 , 32.036699833653] , [ 1117512000000 , 41.191928040141] , [ 1120104000000 , 40.301151852023] , [ 1122782400000 , 54.922174023466] , [ 1125460800000 , 49.538009616222] , [ 1128052800000 , 61.911998981277] , [ 1130734800000 , 56.139287982733] , [ 1133326800000 , 71.780099623014] , [ 1136005200000 , 78.474613851439] , [ 1138683600000 , 90.069363092366] , [ 1141102800000 , 87.449910167102] , [ 1143781200000 , 87.030640692381] , [ 1146369600000 , 87.053437436941] , [ 1149048000000 , 76.263029236276] , [ 1151640000000 , 72.995735254929] , [ 1154318400000 , 63.349908186291] , [ 1156996800000 , 66.253474132320] , [ 1159588800000 , 75.943546587481] , [ 1162270800000 , 93.889549035453] , [ 1164862800000 , 106.18074433002] , [ 1167541200000 , 116.39729488562] , [ 1170219600000 , 129.09440567885] , [ 1172638800000 , 123.07049577958] , [ 1175313600000 , 129.38531055124] , [ 1177905600000 , 132.05431954171] , [ 1180584000000 , 148.86060871993] , [ 1183176000000 , 157.06946698484] , [ 1185854400000 , 155.12909573880] , [ 1188532800000 , 155.14737474392] , [ 1191124800000 , 159.70646945738] , [ 1193803200000 , 166.44021916278] , [ 1196398800000 , 159.05963386166] , [ 1199077200000 , 151.38121182455] , [ 1201755600000 , 132.02441123108] , [ 1204261200000 , 121.93110210702] , [ 1206936000000 , 112.64545460548] , [ 1209528000000 , 122.17722331147] , [ 1212206400000 , 133.65410878087] , [ 1214798400000 , 120.20304048123] , [ 1217476800000 , 123.06288589052] , [ 1220155200000 , 125.33598074057] , [ 1222747200000 , 103.50539786253] , [ 1225425600000 , 85.917420810943] , [ 1228021200000 , 71.250132356683] , [ 1230699600000 , 71.308439405118] , [ 1233378000000 , 52.287271484242] , [ 1235797200000 , 30.329193047772] , [ 1238472000000 , 44.133440571375] , [ 1241064000000 , 77.654211210456] , [ 1243742400000 , 73.749802969425] , [ 1246334400000 , 70.337666717565] , [ 1249012800000 , 102.69722724876] , [ 1251691200000 , 117.63589109350] , [ 1254283200000 , 128.55351774786] , [ 1256961600000 , 119.21420882198] , [ 1259557200000 , 139.32979337027] , [ 1262235600000 , 149.71606246357] , [ 1264914000000 , 144.42340669795] , [ 1267333200000 , 161.64446359053] , [ 1270008000000 , 180.23071774437] , [ 1272600000000 , 199.09511476051] , [ 1275278400000 , 180.10778306442] , [ 1277870400000 , 158.50237284410] , [ 1280548800000 , 177.57353623850] , [ 1283227200000 , 162.91091118751] , [ 1285819200000 , 183.41053361910] , [ 1288497600000 , 194.03065670573] , [ 1291093200000 , 201.23297214328] , [ 1293771600000 , 222.60154078445] , [ 1296450000000 , 233.35556801977] , [ 1298869200000 , 231.22452435045] , [ 1301544000000 , 237.84432503045] , [ 1304136000000 , 235.55799131184] , [ 1306814400000 , 232.11873570751] , [ 1309406400000 , 226.62381538123] , [ 1312084800000 , 219.34811113539] , [ 1314763200000 , 198.69242285581] , [ 1317355200000 , 168.90235629066] , [ 1320033600000 , 202.64725756733] , [ 1322629200000 , 203.05389378105] , [ 1325307600000 , 204.85986680865] , [ 1327986000000 , 229.77085616585] , [ 1330491600000 , 239.65202435959] , [ 1333166400000 , 242.33012622734] , [ 1335758400000 , 234.11773262149] , [ 1338436800000 , 221.47846307887] , [ 1341028800000 , 216.98308827912] , [ 1343707200000 , 218.37781386755] , [ 1346385600000 , 229.39368622736] , [ 1348977600000 , 230.54656412916] , [ 1351656000000 , 243.06087025523] , [ 1354251600000 , 244.24733578385]]
            },
            {
                key: "S&P 1500",
                values: [ [ 1083297600000 , -1.7798428181819] , [ 1085976000000 , -0.36883324836999] , [ 1088568000000 , 1.7312581046040] , [ 1091246400000 , -1.8356125950460] , [ 1093924800000 , -1.5396564170877] , [ 1096516800000 , -0.16867791409247] , [ 1099195200000 , 1.3754263993413] , [ 1101790800000 , 5.8171640898041] , [ 1104469200000 , 9.4350145241608] , [ 1107147600000 , 6.7649081510160] , [ 1109566800000 , 9.1568499314776] , [ 1112245200000 , 7.2485090994419] , [ 1114833600000 , 4.8762222306595] , [ 1117512000000 , 8.5992339354652] , [ 1120104000000 , 9.0896517982086] , [ 1122782400000 , 13.394644048577] , [ 1125460800000 , 12.311842010760] , [ 1128052800000 , 13.221003650717] , [ 1130734800000 , 11.218481009206] , [ 1133326800000 , 15.565352598445] , [ 1136005200000 , 15.623703865926] , [ 1138683600000 , 19.275255326383] , [ 1141102800000 , 19.432433717836] , [ 1143781200000 , 21.232881244655] , [ 1146369600000 , 22.798299192958] , [ 1149048000000 , 19.006125095476] , [ 1151640000000 , 19.151889158536] , [ 1154318400000 , 19.340022855452] , [ 1156996800000 , 22.027934841859] , [ 1159588800000 , 24.903300681329] , [ 1162270800000 , 29.146492833877] , [ 1164862800000 , 31.781626082589] , [ 1167541200000 , 33.358770738428] , [ 1170219600000 , 35.622684613497] , [ 1172638800000 , 33.332821711366] , [ 1175313600000 , 34.878748635832] , [ 1177905600000 , 40.582332613844] , [ 1180584000000 , 45.719535502920] , [ 1183176000000 , 43.239344722386] , [ 1185854400000 , 38.550955100342] , [ 1188532800000 , 40.585368816283] , [ 1191124800000 , 45.601374057981] , [ 1193803200000 , 48.051404337892] , [ 1196398800000 , 41.582581696032] , [ 1199077200000 , 40.650580792748] , [ 1201755600000 , 32.252222066493] , [ 1204261200000 , 28.106390258553] , [ 1206936000000 , 27.532698196687] , [ 1209528000000 , 33.986390463852] , [ 1212206400000 , 36.302660526438] , [ 1214798400000 , 25.015574480172] , [ 1217476800000 , 23.989494069029] , [ 1220155200000 , 25.934351445531] , [ 1222747200000 , 14.627592011699] , [ 1225425600000 , -5.2249403809749] , [ 1228021200000 , -12.330933408050] , [ 1230699600000 , -11.000291508188] , [ 1233378000000 , -18.563864948088] , [ 1235797200000 , -27.213097001687] , [ 1238472000000 , -20.834133840523] , [ 1241064000000 , -12.717886701719] , [ 1243742400000 , -8.1644613083526] , [ 1246334400000 , -7.9108408918201] , [ 1249012800000 , -0.77002391591209] , [ 1251691200000 , 2.8243816569672] , [ 1254283200000 , 6.8761411421070] , [ 1256961600000 , 4.5060912230294] , [ 1259557200000 , 10.487179794349] , [ 1262235600000 , 13.251375597594] , [ 1264914000000 , 9.2207594803415] , [ 1267333200000 , 12.836276936538] , [ 1270008000000 , 19.816793904978] , [ 1272600000000 , 22.156787167211] , [ 1275278400000 , 12.518039090576] , [ 1277870400000 , 6.4253587440854] , [ 1280548800000 , 13.847372028409] , [ 1283227200000 , 8.5454736090364] , [ 1285819200000 , 18.542801953304] , [ 1288497600000 , 23.037064683183] , [ 1291093200000 , 23.517422401888] , [ 1293771600000 , 31.804723416068] , [ 1296450000000 , 34.778247386072] , [ 1298869200000 , 39.584883855230] , [ 1301544000000 , 40.080647664875] , [ 1304136000000 , 44.180050667889] , [ 1306814400000 , 42.533535927221] , [ 1309406400000 , 40.105374449011] , [ 1312084800000 , 37.014659267156] , [ 1314763200000 , 29.263745084262] , [ 1317355200000 , 19.637463417584] , [ 1320033600000 , 33.157645345770] , [ 1322629200000 , 32.895053150988] , [ 1325307600000 , 34.111544824647] , [ 1327986000000 , 40.453985817473] , [ 1330491600000 , 46.435700783313] , [ 1333166400000 , 51.062385488671] , [ 1335758400000 , 50.130448220658] , [ 1338436800000 , 41.035476682018] , [ 1341028800000 , 46.591932296457] , [ 1343707200000 , 48.349391180634] , [ 1346385600000 , 51.913011286919] , [ 1348977600000 , 55.747238313752] , [ 1351656000000 , 52.991824077209] , [ 1354251600000 , 49.556311883284]]
            }
        ];

        $scope.dateOptions = {
            changeYear: true,
            changeMonth: true,
            yearRange: '1900:-0'
        };


  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };

  $scope.model = {
    name: 'Tabs'
  };
  


// add data for ui.select testing

    })



.controller('DemoCtrl', function ($scope, $http, $timeout, $interval) {
  var vm = this;

  vm.disabled = undefined;
  vm.searchEnabled = undefined;

  vm.setInputFocus = function (){
    $scope.$broadcast('UiSelectDemo1');
  };

  vm.enable = function() {
    vm.disabled = false;
  };

  vm.disable = function() {
    vm.disabled = true;
  };

  vm.enableSearch = function() {
    vm.searchEnabled = true;
  };

  vm.disableSearch = function() {
    vm.searchEnabled = false;
  };

  vm.clear = function() {
    vm.person.selected = undefined;
    vm.address.selected = undefined;
    vm.country.selected = undefined;
  };

  vm.someGroupFn = function (item){

    if (item.name[0] >= 'A' && item.name[0] <= 'M')
        return 'From A - M';

    if (item.name[0] >= 'N' && item.name[0] <= 'Z')
        return 'From N - Z';

  };

  vm.firstLetterGroupFn = function (item){
      return item.name[0];
  };

  vm.reverseOrderFilterFn = function(groups) {
    return groups.reverse();
  };

  vm.personAsync = {selected : "wladimir@email.com"};
  vm.peopleAsync = [];

  $timeout(function(){
   vm.peopleAsync = [
        { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
        { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
        { name: 'Nicolás',   email: 'nicole@email.com',    age: 43, country: 'Colombia' }
      ];
  },3000);

  vm.counter = 0;
  vm.onSelectCallback = function (item, model){
    vm.counter++;
    vm.eventResult = {item: item, model: model};
  };

  vm.removed = function (item, model) {
    vm.lastRemoved = {
        item: item,
        model: model
    };
  };

  vm.tagTransform = function (newTag) {
    var item = {
        name: newTag,
        email: newTag.toLowerCase()+'@email.com',
        age: 'unknown',
        country: 'unknown'
    };

    return item;
  };

  vm.peopleObj = {
    '1' : { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
    '2' : { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
    '3' : { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
    '4' : { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
    '5' : { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
    '6' : { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
    '7' : { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
    '8' : { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
    '9' : { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
    '10' : { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
  };

  vm.person = {};

  vm.person.selectedValue = vm.peopleObj[3];
  vm.person.selectedSingle = 'Samantha';
  vm.person.selectedSingleKey = '5';
  // To run the demos with a preselected person object, uncomment the line below.
  //vm.person.selected = vm.person.selectedValue;

  vm.people = [
    { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
    { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
    { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
    { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
    { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
    { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
    { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
    { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
    { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
    { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
  ];

  vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

  vm.singleDemo = {};
  vm.singleDemo.color = '';
  vm.multipleDemo = {};
  vm.multipleDemo.colors = ['Blue','Red'];
  vm.multipleDemo.colors2 = ['Blue','Red'];
  vm.multipleDemo.selectedPeople = [vm.people[5], vm.people[4]];
  vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
  vm.multipleDemo.selectedPeopleWithGroupBy = [vm.people[8], vm.people[6]];
  vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
  vm.multipleDemo.removeSelectIsFalse = [vm.people[2], vm.people[0]];

  vm.appendToBodyDemo = {
    remainingToggleTime: 0,
    present: true,
    startToggleTimer: function() {
      var scope = vm.appendToBodyDemo;
      var promise = $interval(function() {
        if (scope.remainingTime < 1000) {
          $interval.cancel(promise);
          scope.present = !scope.present;
          scope.remainingTime = 0;
        } else {
          scope.remainingTime -= 1000;
        }
      }, 1000);
      scope.remainingTime = 3000;
    }
  };

  vm.address = {};
  vm.refreshAddresses = function(address) {
    var params = {address: address, sensor: false};
    return $http.get(
      'http://maps.googleapis.com/maps/api/geocode/json',
      {params: params}
    ).then(function(response) {
      vm.addresses = response.data.results;
    });
  };

  vm.addPerson = function(item, model){
    if(item.hasOwnProperty('isTag')) {
      delete item.isTag;
      vm.people.push(item);
    }
  }

  vm.country = {};
  vm.countries = [ // Taken from https://gist.github.com/unceus/6501985
    {name: 'Afghanistan', code: 'AF'},
    {name: 'Åland Islands', code: 'AX'},
    {name: 'Albania', code: 'AL'},
    {name: 'Algeria', code: 'DZ'},
    {name: 'American Samoa', code: 'AS'},
    {name: 'Andorra', code: 'AD'},
    {name: 'Angola', code: 'AO'},
    {name: 'Anguilla', code: 'AI'},
    {name: 'Antarctica', code: 'AQ'},
    {name: 'Antigua and Barbuda', code: 'AG'},
    {name: 'Argentina', code: 'AR'},
    {name: 'Armenia', code: 'AM'},
    {name: 'Aruba', code: 'AW'},
    {name: 'Australia', code: 'AU'},
    {name: 'Austria', code: 'AT'},
    {name: 'Azerbaijan', code: 'AZ'},
    {name: 'Bahamas', code: 'BS'},
    {name: 'Bahrain', code: 'BH'},
    {name: 'Bangladesh', code: 'BD'},
    {name: 'Barbados', code: 'BB'},
    {name: 'Belarus', code: 'BY'},
    {name: 'Belgium', code: 'BE'},
    {name: 'Belize', code: 'BZ'},
    {name: 'Benin', code: 'BJ'},
    {name: 'Bermuda', code: 'BM'},
    {name: 'Bhutan', code: 'BT'},
    {name: 'Bolivia', code: 'BO'},
    {name: 'Bosnia and Herzegovina', code: 'BA'},
    {name: 'Botswana', code: 'BW'},
    {name: 'Bouvet Island', code: 'BV'},
    {name: 'Brazil', code: 'BR'},
    {name: 'British Indian Ocean Territory', code: 'IO'},
    {name: 'Brunei Darussalam', code: 'BN'},
    {name: 'Bulgaria', code: 'BG'},
    {name: 'Burkina Faso', code: 'BF'},
    {name: 'Burundi', code: 'BI'},
    {name: 'Cambodia', code: 'KH'},
    {name: 'Cameroon', code: 'CM'},
    {name: 'Canada', code: 'CA'},
    {name: 'Cape Verde', code: 'CV'},
    {name: 'Cayman Islands', code: 'KY'},
    {name: 'Central African Republic', code: 'CF'},
    {name: 'Chad', code: 'TD'},
    {name: 'Chile', code: 'CL'},
    {name: 'China', code: 'CN'},
    {name: 'Christmas Island', code: 'CX'},
    {name: 'Cocos (Keeling) Islands', code: 'CC'},
    {name: 'Colombia', code: 'CO'},
    {name: 'Comoros', code: 'KM'},
    {name: 'Congo', code: 'CG'},
    {name: 'Congo, The Democratic Republic of the', code: 'CD'},
    {name: 'Cook Islands', code: 'CK'},
    {name: 'Costa Rica', code: 'CR'},
    {name: 'Cote D\'Ivoire', code: 'CI'},
    {name: 'Croatia', code: 'HR'},
    {name: 'Cuba', code: 'CU'},
    {name: 'Cyprus', code: 'CY'},
    {name: 'Czech Republic', code: 'CZ'},
    {name: 'Denmark', code: 'DK'},
    {name: 'Djibouti', code: 'DJ'},
    {name: 'Dominica', code: 'DM'},
    {name: 'Dominican Republic', code: 'DO'},
    {name: 'Ecuador', code: 'EC'},
    {name: 'Egypt', code: 'EG'},
    {name: 'El Salvador', code: 'SV'},
    {name: 'Equatorial Guinea', code: 'GQ'},
    {name: 'Eritrea', code: 'ER'},
    {name: 'Estonia', code: 'EE'},
    {name: 'Ethiopia', code: 'ET'},
    {name: 'Falkland Islands (Malvinas)', code: 'FK'},
    {name: 'Faroe Islands', code: 'FO'},
    {name: 'Fiji', code: 'FJ'},
    {name: 'Finland', code: 'FI'},
    {name: 'France', code: 'FR'},
    {name: 'French Guiana', code: 'GF'},
    {name: 'French Polynesia', code: 'PF'},
    {name: 'French Southern Territories', code: 'TF'},
    {name: 'Gabon', code: 'GA'},
    {name: 'Gambia', code: 'GM'},
    {name: 'Georgia', code: 'GE'},
    {name: 'Germany', code: 'DE'},
    {name: 'Ghana', code: 'GH'},
    {name: 'Gibraltar', code: 'GI'},
    {name: 'Greece', code: 'GR'},
    {name: 'Greenland', code: 'GL'},
    {name: 'Grenada', code: 'GD'},
    {name: 'Guadeloupe', code: 'GP'},
    {name: 'Guam', code: 'GU'},
    {name: 'Guatemala', code: 'GT'},
    {name: 'Guernsey', code: 'GG'},
    {name: 'Guinea', code: 'GN'},
    {name: 'Guinea-Bissau', code: 'GW'},
    {name: 'Guyana', code: 'GY'},
    {name: 'Haiti', code: 'HT'},
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
    {name: 'Holy See (Vatican City State)', code: 'VA'},
    {name: 'Honduras', code: 'HN'},
    {name: 'Hong Kong', code: 'HK'},
    {name: 'Hungary', code: 'HU'},
    {name: 'Iceland', code: 'IS'},
    {name: 'India', code: 'IN'},
    {name: 'Indonesia', code: 'ID'},
    {name: 'Iran, Islamic Republic Of', code: 'IR'},
    {name: 'Iraq', code: 'IQ'},
    {name: 'Ireland', code: 'IE'},
    {name: 'Isle of Man', code: 'IM'},
    {name: 'Israel', code: 'IL'},
    {name: 'Italy', code: 'IT'},
    {name: 'Jamaica', code: 'JM'},
    {name: 'Japan', code: 'JP'},
    {name: 'Jersey', code: 'JE'},
    {name: 'Jordan', code: 'JO'},
    {name: 'Kazakhstan', code: 'KZ'},
    {name: 'Kenya', code: 'KE'},
    {name: 'Kiribati', code: 'KI'},
    {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
    {name: 'Korea, Republic of', code: 'KR'},
    {name: 'Kuwait', code: 'KW'},
    {name: 'Kyrgyzstan', code: 'KG'},
    {name: 'Lao People\'s Democratic Republic', code: 'LA'},
    {name: 'Latvia', code: 'LV'},
    {name: 'Lebanon', code: 'LB'},
    {name: 'Lesotho', code: 'LS'},
    {name: 'Liberia', code: 'LR'},
    {name: 'Libyan Arab Jamahiriya', code: 'LY'},
    {name: 'Liechtenstein', code: 'LI'},
    {name: 'Lithuania', code: 'LT'},
    {name: 'Luxembourg', code: 'LU'},
    {name: 'Macao', code: 'MO'},
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
    {name: 'Madagascar', code: 'MG'},
    {name: 'Malawi', code: 'MW'},
    {name: 'Malaysia', code: 'MY'},
    {name: 'Maldives', code: 'MV'},
    {name: 'Mali', code: 'ML'},
    {name: 'Malta', code: 'MT'},
    {name: 'Marshall Islands', code: 'MH'},
    {name: 'Martinique', code: 'MQ'},
    {name: 'Mauritania', code: 'MR'},
    {name: 'Mauritius', code: 'MU'},
    {name: 'Mayotte', code: 'YT'},
    {name: 'Mexico', code: 'MX'},
    {name: 'Micronesia, Federated States of', code: 'FM'},
    {name: 'Moldova, Republic of', code: 'MD'},
    {name: 'Monaco', code: 'MC'},
    {name: 'Mongolia', code: 'MN'},
    {name: 'Montserrat', code: 'MS'},
    {name: 'Morocco', code: 'MA'},
    {name: 'Mozambique', code: 'MZ'},
    {name: 'Myanmar', code: 'MM'},
    {name: 'Namibia', code: 'NA'},
    {name: 'Nauru', code: 'NR'},
    {name: 'Nepal', code: 'NP'},
    {name: 'Netherlands', code: 'NL'},
    {name: 'Netherlands Antilles', code: 'AN'},
    {name: 'New Caledonia', code: 'NC'},
    {name: 'New Zealand', code: 'NZ'},
    {name: 'Nicaragua', code: 'NI'},
    {name: 'Niger', code: 'NE'},
    {name: 'Nigeria', code: 'NG'},
    {name: 'Niue', code: 'NU'},
    {name: 'Norfolk Island', code: 'NF'},
    {name: 'Northern Mariana Islands', code: 'MP'},
    {name: 'Norway', code: 'NO'},
    {name: 'Oman', code: 'OM'},
    {name: 'Pakistan', code: 'PK'},
    {name: 'Palau', code: 'PW'},
    {name: 'Palestinian Territory, Occupied', code: 'PS'},
    {name: 'Panama', code: 'PA'},
    {name: 'Papua New Guinea', code: 'PG'},
    {name: 'Paraguay', code: 'PY'},
    {name: 'Peru', code: 'PE'},
    {name: 'Philippines', code: 'PH'},
    {name: 'Pitcairn', code: 'PN'},
    {name: 'Poland', code: 'PL'},
    {name: 'Portugal', code: 'PT'},
    {name: 'Puerto Rico', code: 'PR'},
    {name: 'Qatar', code: 'QA'},
    {name: 'Reunion', code: 'RE'},
    {name: 'Romania', code: 'RO'},
    {name: 'Russian Federation', code: 'RU'},
    {name: 'Rwanda', code: 'RW'},
    {name: 'Saint Helena', code: 'SH'},
    {name: 'Saint Kitts and Nevis', code: 'KN'},
    {name: 'Saint Lucia', code: 'LC'},
    {name: 'Saint Pierre and Miquelon', code: 'PM'},
    {name: 'Saint Vincent and the Grenadines', code: 'VC'},
    {name: 'Samoa', code: 'WS'},
    {name: 'San Marino', code: 'SM'},
    {name: 'Sao Tome and Principe', code: 'ST'},
    {name: 'Saudi Arabia', code: 'SA'},
    {name: 'Senegal', code: 'SN'},
    {name: 'Serbia and Montenegro', code: 'CS'},
    {name: 'Seychelles', code: 'SC'},
    {name: 'Sierra Leone', code: 'SL'},
    {name: 'Singapore', code: 'SG'},
    {name: 'Slovakia', code: 'SK'},
    {name: 'Slovenia', code: 'SI'},
    {name: 'Solomon Islands', code: 'SB'},
    {name: 'Somalia', code: 'SO'},
    {name: 'South Africa', code: 'ZA'},
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
    {name: 'Spain', code: 'ES'},
    {name: 'Sri Lanka', code: 'LK'},
    {name: 'Sudan', code: 'SD'},
    {name: 'Suriname', code: 'SR'},
    {name: 'Svalbard and Jan Mayen', code: 'SJ'},
    {name: 'Swaziland', code: 'SZ'},
    {name: 'Sweden', code: 'SE'},
    {name: 'Switzerland', code: 'CH'},
    {name: 'Syrian Arab Republic', code: 'SY'},
    {name: 'Taiwan, Province of China', code: 'TW'},
    {name: 'Tajikistan', code: 'TJ'},
    {name: 'Tanzania, United Republic of', code: 'TZ'},
    {name: 'Thailand', code: 'TH'},
    {name: 'Timor-Leste', code: 'TL'},
    {name: 'Togo', code: 'TG'},
    {name: 'Tokelau', code: 'TK'},
    {name: 'Tonga', code: 'TO'},
    {name: 'Trinidad and Tobago', code: 'TT'},
    {name: 'Tunisia', code: 'TN'},
    {name: 'Turkey', code: 'TR'},
    {name: 'Turkmenistan', code: 'TM'},
    {name: 'Turks and Caicos Islands', code: 'TC'},
    {name: 'Tuvalu', code: 'TV'},
    {name: 'Uganda', code: 'UG'},
    {name: 'Ukraine', code: 'UA'},
    {name: 'United Arab Emirates', code: 'AE'},
    {name: 'United Kingdom', code: 'GB'},
    {name: 'United States', code: 'US'},
    {name: 'United States Minor Outlying Islands', code: 'UM'},
    {name: 'Uruguay', code: 'UY'},
    {name: 'Uzbekistan', code: 'UZ'},
    {name: 'Vanuatu', code: 'VU'},
    {name: 'Venezuela', code: 'VE'},
    {name: 'Vietnam', code: 'VN'},
    {name: 'Virgin Islands, British', code: 'VG'},
    {name: 'Virgin Islands, U.S.', code: 'VI'},
    {name: 'Wallis and Futuna', code: 'WF'},
    {name: 'Western Sahara', code: 'EH'},
    {name: 'Yemen', code: 'YE'},
    {name: 'Zambia', code: 'ZM'},
    {name: 'Zimbabwe', code: 'ZW'}
  ];
});
