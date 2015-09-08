(function(){

  'use strict';

  angular.module('app')
    .config(decorator);

    function decorator($provide){
      $provide.decorator('commDevice', commDeviceDecorator);

      function commDeviceDecorator($delegate){
        //get a copy of the current delegate to mutate it
        var delegate = angular.copy($delegate);

        delegate.send = function(sender, receiver, text){
          var count = ~~localStorage.getItem('count');
          count += 1;
          localStorage.setItem('m' + count, JSON.stringify({
            sender: sender,
            receiver: receiver,
            text: text
          }));
          localStorage.setItem('count', count);
          $delegate.send(sender, receiver, text);
        };

        return delegate;
      }
    }

}());
