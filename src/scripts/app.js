(function(){

	'use strict';

	angular
    .module('app', ['ngMaterial'])
    .controller('commConsoleCtrl', commConsoleCtrl);

  function commConsoleCtrl(commDevice){
    var vm = this;

    vm.send = send;
    vm.clear = clear;

    ///////////////

    function send(message){
      commDevice.send(message.sender, message.receiver, message.text);
      clear();
    }

    function clear(){
      vm.message.sender = '';
      vm.message.receiver = '';
      vm.message.text = '';
    }

  }

}());
