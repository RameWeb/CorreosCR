(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorPaquetes', controladorPaquetes);

  controladorPaquetes.$inject = ['$stateParams', '$state', 'servicioPaquetes'];

  function controladorPaquetes($stateParams, $state, servicioPaquetes){

    let vm = this;

    vm.nuevoPaquetes = {};
    vm.listaPaquetes = listarPaquetes();

    listarPaquetes();
    vm.registrarPaquetes = (pnuevoPaquetes) => {

      console.log(pnuevoPaquetes);

      let objNuevoPaquetes = new Paquetes(pnuevoPaquetes.tracking, pnuevoPaquetes.nombre, pnuevoPaquetes.peso, pnuevoPaquetes.valor);
     
      console.log('objeto con paquete');
      console.log(objNuevoPaquetes);

      servicioPaquetes.addPaquetes(objNuevoPaquetes);

      swal("Registro exitoso", "El paquete ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      vm.nuevoPaquetes = null;
      listarPaquetes();
    }

   

    function listarPaquetes() {
      vm.listaPaquetes = servicioPaquetes.getPaquetes();
    }

  }
})();