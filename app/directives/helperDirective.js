define(['angularAMD'], function (angularAMD) {
	angularAMD.directive('helperNgIf', function () {
		return {
			restrict: 'A',
		    link:function (scope, element, attrs) {
		    	scope.$on("$destroy", function () {
		    		// console.log(element)
		    		// console.log(element.data())
		    		// console.log(element.removeData())
		    		// console.log(element.children())
		    		// console.log(element.children().remove())
			    	// element.remove()
		    		// console.log(element = null)
		    		element.removeData()
		    		element.children().remove()
			    	element.remove()
		    		element = null
				})
		    }
		};
	});

});