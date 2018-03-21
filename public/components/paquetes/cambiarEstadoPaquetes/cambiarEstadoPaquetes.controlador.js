(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorCambiarEstadoPaquetes', controladorCambiarEstadoPaquetes);

  controladorCambiarEstadoPaquetes.$inject = ['$http','$stateParams', '$state','servicioPaquetes'];

  function controladorCambiarEstadoPaquetes($http, $stateParams, $state, servicioPaquetes){
    let paquetesSeleccionado;

    if($stateParams.idPaquetes == ''){
      $state.go('listarPaquetes');
    }else{
      paquetesSeleccionado = servicioPaquetes.obtenerPaquetesSeleccionado($stateParams.idPaquetes);
    }
    console.log(paquetesSeleccionado);

    let vm = this;

    vm.nuevoEstadoPaqueteModificado = {
      estado: paquetesSeleccionado.estado,
      
    };

    // Guardar un nuevo empleado
    vm.modificarEstadoPaquetes = (pNuevoEstado) => {
      let idPaquetes = paquetesSeleccionado.idPaquetes;

      // limpiar registro de propiedades de objeto anteriores.
      
      // ****************


      let estadoModificado = new Paquetes(vm.nuevoEstadoPaqueteModificado.estado, idPaquetes);
      console.log(estadoModificado);

       // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
       vm.paquetesSeleccionado = servicioPaquetes.actualizarPaquetes(estadoModificado);

      //   // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "El estado de paquete se ha sido modificado correctamente", "success", {
        button: "Aceptar",
      });

      $state.go('listarPaquetes');

      // Se limpia el formulario
      vm.nuevoEstadoPaqueteModificado = null;

      listarPaquetes();
    }

    // Imprimir lista de repartidores en el sistema
    function listarPaquetes(){
      vm.listaPaquetes = servicioPaquetes.obtenerPaquetes();
    }

    vm.modificar = (pEstado) =>{
      $state.go('listarPaquetes', {idPaquetes: JSON.stringify(pPaquetes.idPaquetes)})
    }


   

    // // Objeto sin formato
    // vm.nuevoEmpleado = {};

    // vm.listaEmpleados = listarEmpleados();

    // listarEmpleados();
  }
})();