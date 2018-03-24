(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorModProducto', controladorModProducto);

  controladorModProducto.$inject = ['$http','$stateParams', '$state','servicioTipoProductos'];

  function controladorModProducto($http, $stateParams, $state, servicioTipoProductos){
    let vm = this;

    let tipoProductoSeleccionado;

    if($stateParams.nombreTipoProducto == ''){
      $state.go('ListaTipoProducto');
    }else{
      tipoProductoSeleccionado = servicioTipoProductos.getTipoProductos($stateParams.nombreTipoProducto);
    }
    console.log(tipoProductoSeleccionado);

    vm.nuevoTipoProducto = {
      nombreTipoProducto: tipoProductoSeleccionado.nombreTipoProducto,
      impuesto: tipoProductoSeleccionado.impuesto,
      
    };

    vm.modificarTipoProducto = (pNuevoTipoProducto) =>{
      let nombreTipoProducto = tipoProductoSeleccionado.nombreTipoProducto;

      let tipoProductoModificado = new tipoProducto(vm.nuevoTipoProducto.nombreTipoProducto,vm.nuevoTipoProducto.impuesto);

    console.log(tipoProductoModificado);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      vm.tipoProductoSeleccionado = servicioTipoProductos.actualizarTipoProducto(tipoProductoModificado);

      // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "El tipo de producto se ha sido modificado correctamente", "success", {
        button: "Aceptar",
      });

      $state.go('ListaTipoProducto');

      listarTiposProductos();

      // Se limpia el formulario
      vm.nuevoTipoProducto = null;
    }

    // Imprimir lista de repartidores en el sistema
    function listarTiposProductos(){
      vm.listaTipoProductos= servicioTipoProductos.getTipoProductos();
    }
  }
})();

