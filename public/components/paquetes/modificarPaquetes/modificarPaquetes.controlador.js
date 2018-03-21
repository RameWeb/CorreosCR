(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorModificarPaquetes', controladorModificarPaquetes);

  controladorModificarPaquetes.$inject = ['$http', '$stateParams', '$state', 'servicioPaquetes'];

  function controladorModificarPaquetes($http, $stateParams, $state, servicioPaquetes){

    let paquetesSeleccionada;

    if($stateParams.idPaquetes == ''){
      $state.go('listarPaquetes');
    }else{
      paquetesSeleccionada = servicioPaquetes.getPaquetesSeleccionada($stateParams.idPaquetes);
    }

    // console.log(sucursalSeleccionada);

    let vm = this;
    
    

    vm.nuevaPaquetes = {
      tracking: paquetesSeleccionada.tracking,
      nombre: paquetesSeleccionada.nombre,
      peso: paquetesSeleccionada.peso,
      valor: paquetesSeleccionada.valor,
      estado: paquetesSeleccionada.estado
    };

    // listarSucursales();
    
    // Funcion que es llamada desde el html para regustra un nuevo usuario
    vm.modificarPaquetes = (pnuevaPaquetes) => {

      let idPaquetes = paquetesSeleccionada.idPaquetes;

      let objPaquetesModificada = new Paquetes(vm.nuevaPaquetes.tracking, vm.nuevaPaquetes.nombre, vm.nuevaPaquetes.peso,  vm.nuevaPaquetes.valor, vm.nuevaPaquetes.estado, idPaquetes);
        
      console.log(objSucursalModificada);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      vm.sucursalSeleccionada = servicioSucursales.actualizarSucursal(objSucursalModificada);

      swal("Registro exitoso", "La sucursal se ha sido modificada correctamente", "success", {
        button: "Aceptar",
      });

      $state.go('listarSucursal');

      listarSucursales();
      // Se limpia el formulario
      vm.nuevaSucursal = null;
    }

    function listarSucursales(){
      vm.listaSucursales = servicioSucursales.getSucursal();
    }

  }
})();