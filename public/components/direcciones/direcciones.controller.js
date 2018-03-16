(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorDirecciones', controladorDirecciones);

  controladorDirecciones.$inject = ['$stateParams', '$state', 'servicioDirecciones'];

  function controladorDirecciones($stateParams, $state, servicioDirecciones){

    let vm = this;

    vm.nuevaDireccion = {};
    vm.listaDirecciones = listarDirecciones();

    listarDirecciones();
    // Función que es llamada desde el html para registra una nueva direccion
    vm.registrarDireccion = (pnuevaDireccion) => {

      console.log(pnuevaDireccion);

      // Tomamos el objeto sin formato y lo convertimos en una instancia de la clase direccion
      let objNuevaDireccion = new Direccion(pnuevaDireccion.provincia,pnuevaDireccion.canton,pnuevaDireccion.distrito);
     
      console.log('objeto con direccion');
      console.log(objNuevaDireccion);

      // Pasamos al servicio el nuevo obj de tipo Direccion para ser almacenado en el localStorage
      servicioDirecciones.addDireccion(objNuevaDireccion);

      // Retroalimentación Visual para las Direcciones
      swal("Registro exitoso", "La Direccion ha sido registrada correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevaDireccion = null;
      listarDirecciones();
    }

    function listarDirecciones() {
      vm.listaDirecciones = servicioDirecciones.getDirecciones();
    }

  }
})();