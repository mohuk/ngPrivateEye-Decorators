(function(){

	'use strict';

	angular.module('app')
		.factory('commDevice', commDevice);

	function commDevice($log){

		return {
			send: send
		};

		function send(sender, message, receiver){
			$log.info('sender: ' + sender, 'receiver: ' + receiver, 'message: ' + message);
		}

	}

}());