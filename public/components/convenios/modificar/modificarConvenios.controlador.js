(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorModConveniosCliente', controladorModConveniosCliente);

  controladorModConveniosCliente.$inject = ['$http','$stateParams', '$state', 'servicioConvenioClientes'];

  function controladorModConveniosCliente($http, $stateParams, $state, servicioConvenioClientes){

    let vm = this;

    let convenioSeleccionado;

    if($stateParams.idConvenio == ''){
      $state.go('listaConvenios');
    }else{
      convenioSeleccionado = servicioConvenioClientes.obtenerConvenioSeleccionado($stateParams.idConvenio);
    }

    vm.nuevoConvenio = {
      servicio: convenioSeleccionado.servicio,
      cliente: convenioSeleccionado.cliente,
      direccion: convenioSeleccionado.direccion,
    };

    // listarConvenios();//

    // Funcion que es llamada desde el html para regustra un nuevo usuario
    vm.modificarConvenio = (pnuevoConvenio) => {
      
      let idConvenio = convenioSeleccionado.idConvenio;

      let objConvenioSeleccionado = new ConveniosClientes(vm.nuevoConvenio.servicio, vm.nuevoConvenio.cliente, vm.nuevoConvenio.direccion, idConvenio);

      console.log(objConvenioSeleccionado);


      vm.convenioSeleccionado = servicioConvenioClientes.actualizarConvenioCliente(objConvenioSeleccionado);
      
      // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "El convenio se ha sido modificado correctamente", "success", {
        button: "Aceptar",
      });

      $state.go('listaConvenios');

      listarConvenios();

      // Se limpia el formulario
      vm.nuevoConvenio = null;
    }

    function listarConvenios(){
      vm.listaConvClientes = servicioConvenioClientes.obtenerConvenioCliente();
    }
  }
})();