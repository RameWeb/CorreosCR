(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorCasillero', controladorCasillero);

  controladorCasillero.$inject = ['$stateParams', '$state', 'servicioCasillero'];

  function controladorCasillero($stateParams, $state, servicioCasillero){

    let vm = this;

    vm.nuevoCasillero = {};
    
    vm.registrarCasillero = (pnuevoCasillero) => {

      console.log(pnuevoCasillero);

      let objNuevoCasillero = new Casillero(pnuevoCasillero.nombre);
     
      console.log('objeto con casillero');
      console.log(objNuevoCasillero);

      servicioCasillero.addCasillero(objNuevoCasillero);

      swal("Registro exitoso", "Se te ha asignado un casillero", "success", {
        button: "Aceptar",
      });

      vm.nuevoCasillero = null;
  
    }

  

   
    
  }
})();