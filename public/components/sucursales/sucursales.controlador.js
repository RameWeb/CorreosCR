(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorSucursales', controladorSucursales);

  controladorSucursales.$inject = ['$stateParams', '$state', 'servicioSucursales'];

  function controladorSucursales($stateParams, $state, servicioSucursales){
    let vm = this;

    vm.nuevaSucursal = {};
    vm.listaSucursales = listarSucursales();

    listarSucursales();
    
    // Funcion que es llamada desde el html para regustra un nuevo usuario
    vm.registrarSucursal = (pnuevaSucursal) => {
      
      console.log(pnuevaSucursal);

      // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
      let objNuevaSucursal = new Sucursales(pnuevaSucursal.provincia, pnuevaSucursal.canton, pnuevaSucursal.distrito,  pnuevaSucursal.direccion, pnuevaSucursal.telefono);
        
      console.log(objNuevaSucursal);

      // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "La nueva sucursal se ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioSucursales.addSucursal(objNuevaSucursal);

      // Se limpia el formulario
      vm.nuevaSucursal = null;
      listarSucursales();
    }

    function listarSucursales(){
      vm.listaSucursales = servicioSucursales.getSucursal();
    }

    // vm.registrarSucursal = (pSucursal) => {

    //   $state.go('mantenimientoSucursales', {objSucursalTemp: JSON.stringify(pSucursal)})
    // }

  }
})();