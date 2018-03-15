(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorSucursales', controladorSucursales);

  controladorSucursales.$inject = [];

  function controladorSucursales(){
    let vm = this;

    vm.nuevaSucursal = {};
    
    // Funcion que es llamada desde el html para regustra un nuevo usuario
    vm.registrarSucursal = (pnuevaSucursal) => {
      
      // console.log(pnuevaSucursal);

      // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
      let objNuevaSucursal = new Sucursales(vm.nuevaSucursal.provincia, vm.nuevaSucursal.canton, vm.nuevaSucursal.distrito, vm.nuevaSucursal.direccion, vm.nuevaSucursal.telefono);
      console.log(objNuevaSucursal);

      // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "La nueva sucursal se ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      // servicioEntierros.agregarEntierro(pnuevoEntierro)

      // Se limpia el formulario
      vm.nuevaSucursal = null;
    }

  }
})();