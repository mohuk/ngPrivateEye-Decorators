(function(){

	'use strict';

	angular.module('app')
		.factory('commDevice', commDevice);

	function commDevice($log, $mdToast){

		return {
			send: send
		};

		function send(sender, receiver, text){
			$log.info('sender: ' + sender, 'receiver: ' + receiver, 'text: ' + text);
      $mdToast.show(
        $mdToast.simple()
          .content('Sent to: ' + receiver)
          .position('bottom right')
          .hideDelay(3000)
      );
		}

	}

}());
