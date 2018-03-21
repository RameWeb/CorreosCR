(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorModConveniosCliente', controladorModConveniosCliente);

  controladorModConveniosCliente.$inject = ['$http','$stateParams', '$state', 'servicioConveniosCliente'];

  function controladorModConveniosCliente($http, $stateParams, $state, servicioConveniosCliente){

    let vm = this;

    let convenioSeleccionado;

    if($stateParams.idConvenio == ''){
      $state.go('listaConvenios');
    }else{
      convenioSeleccionado = servicioConveniosCliente.obtenerConveniosSeleccionados($stateParams.idConvenio);
    }

    vm.nuevoConvenio = {
      tipo: convenioSeleccionado.tipo,
      cliente: convenioSeleccionado.cliente,
      direccion: convenioSeleccionado.direccion,
    };

    // listarConvenios();

    // Funcion que es llamada desde el html para regustra un nuevo usuario
    vm.modificarConvenio = (pnuevoConvenio) => {
      
      let idConvenio = convenioSeleccionado.idConvenio;

      let objConvenioSeleccionado = new ConveniosClientes(vm.nuevoConvenio.tipo, vm.nuevoConvenio.cliente, vm.nuevoConvenio.direccion, idConvenio);

      console.log(objConvenioSeleccionado);


      vm.convenioSeleccionado = servicioConveniosCliente.actualizarConvenio(objConvenioSeleccionado);
      
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
      vm.listaConvenios = servicioConveniosCliente.obtenerConveniosClientes();
    }
  }
})();