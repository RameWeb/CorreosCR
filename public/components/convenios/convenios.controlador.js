(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorConveniosCliente', controladorConveniosCliente);

  controladorConveniosCliente.$inject = ['$stateParams', '$state', 'servicioConveniosCliente'];

  function controladorConveniosCliente($stateParams, $state, servicioConveniosCliente){
    let vm = this;

    vm.nuevoConvenio = {};
    listarConvenios();

    // Funcion que es llamada desde el html para regustra un nuevo usuario
    vm.registrarConvenio = (pnuevoConvenio) => {
      
      console.log(pnuevoConvenio);

      // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
      let objNuevoConvenio = new ConveniosClientes(pnuevoConvenio.tipo, pnuevoConvenio.cliente,pnuevoConvenio.factura, pnuevoConvenio.direccion);

      console.log(objNuevoConvenio);

      servicioConveniosCliente.addConveniosCliente(objNuevoConvenio);
      
      // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "La nueva sucursal se ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      listarConvenios();

      // Se limpia el formulario
      vm.nuevoConvenio = null;
    }

    function listarConvenios(){
      vm.listaConvenios = servicioConveniosCliente.getConveniosCliente();
    }  
  }
})();