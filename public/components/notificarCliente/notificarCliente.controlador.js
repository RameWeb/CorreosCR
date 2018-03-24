(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorNotificar', controladorNotificar);

  controladorNotificar.$inject = ['$http','$stateParams', '$state','servicioPaquetes'];

  function controladorNotificar($http, $stateParams, $state, servicioPaquetes){
 

    let vm = this;

    function sendMail() {
      let link = "mailto:me@example.com"
               + "?cc=myCCaddress@example.com"
               + "&subject=" + escape("This is my subject")
               + "&body=" + escape('').)
      ;
  
      window.location.href = link;
  }
  }
})();