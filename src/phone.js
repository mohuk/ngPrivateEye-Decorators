(function(){

	'use strict';

	angular.module('app')
		.factory('commDevice', commDevice);

	function commDevice(){

		return {
			send: send
		};

		function send(sender, message, receiver){
			console.log('message sent');
		}

	}

}());