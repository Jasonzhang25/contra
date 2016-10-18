define(['angularAMD'], function (angularAMD) {
	
	angularAMD.directive('zFilter', function ($compile,$modal) {

		var link = function (scope, element, attrs) { 

	    	var out = '<ul>';
	    	var res = scope.zInput.split("|");
	    	var length =  res.length
		    for (var i = 0; i < length; i++) {
		    	out += '<li>' + res[i] + '</li>'
		    }
		    out += '</ul>'
		    element.eq(0).append(out)
	    	//compile the element content so that angular can parse the angular directive in it
	        $compile(element.contents())(scope.$new());
		};

		return {
			restrict: 'AE',
            scope : {
            	zInput : '='
            },
		    link:link
		};
	});

});