
'use strict';

angular
	.module('phoneList')
	.component('phoneList', {
		templateUrl: 'phone-list/phone-list.template.html',
		controller: ['Phone',
		function PhoneListController(phone) {
			this.phones = phone.query();
			this.orderProp = 'age';
		}

		]
	});
