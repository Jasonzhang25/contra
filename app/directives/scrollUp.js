define(['angularAMD'], function (angularAMD) {
	
    angularAMD.directive('scrolly', function () {

    	return {
		        restrict: 'A',
		        link: function (scope, element, attrs) {
	            var element = element[0];
	            scope.$parent.$parent.showScroll = false;
	            angular.element(element).on('scroll', function () { 
	                if(element.scrollTop + element.offsetHeight > element.scrollTop) {
	                	scope.$parent.$parent.showScroll = true
	                	scope.$apply();
	                }
	                if(element.scrollTop === 0) {
	                	scope.$parent.$parent.showScroll = false
	                	scope.$apply();
	                }
	            });

				$('.container-scroll-up-wrapper').on('mousedown', function(e) {
			        $('.container-scroll-up-wrapper').addClass('draggable').parents().on('mousemove', function(e) {
			            $('.draggable').offset({
			                top: e.pageY - $('.draggable').outerHeight() / 2,
			                left: e.pageX - $('.draggable').outerWidth() / 2
			            }).on('mouseup', function() {
			                $(this).removeClass('draggable');
			            });
			        })
			    }).on('mouseup', function() {
			        $('.draggable').removeClass('draggable');
			    });

	            scope.$parent.$parent.scrolltoTop = function() {                                              
		            $(element).animate({ scrollTop: 0 }, "fast");
			    };

			    scope.$on("$destroy", function () {
			    	scope.$parent.$parent.showScroll = false
			    	console.log($('.draggable'))
			    	$('.draggable').off('mouseup')
			    	$('.container-scroll-up-wrapper').parents().off('mousemove')
			    	$('.container-scroll-up-wrapper').off('mousedown')
			    	$('.container-scroll-up-wrapper').off('mouseup')
			    	$('.container-scroll-up-wrapper').off('mouseup')
			    	angular.element(element).off('scroll')
				})
				
			}
	    };

	});
});