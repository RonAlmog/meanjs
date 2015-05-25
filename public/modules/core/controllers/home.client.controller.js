'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts=[
			{
				icon:'glyphicon-user',
				color:'btn-success',
				total:'20,480',
				description: 'Total Customers'
			},
			{
				icon:'glyphicon-calendar',
				color:'btn-primary',
				total:'8000',
				description: 'Upcoming Events'
			},
			{
				icon:'glyphicon-edit',
				color:'btn-success',
				total:'400',
				description: 'New Customers'
			},
			{
				icon:'glyphicon-record',
				color:'btn-warning',
				total:'735',
				description: 'Follow Ups'
			},
			{
				icon:'glyphicon-eye-open',
				color:'btn-info',
				total:'20,480',
				description: 'Total Customers'
			},
			{
				icon:'glyphicon-flag',
				color:'btn-danger',
				total:'481',
				description: 'Referals'
			}
		];

	}
]);
