(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorModProducto', controladorModProducto);

  controladorModProducto.$inject = ['$http','$stateParams', '$state','servicioTipoProductos'];

  function controladorModProducto($http, $stateParams, $state, servicioTipoProductos){
    
    let tipoProductoSeleccionado;
    let vm = this;
    if($stateParams.nombreTipoProducto == ''){
      $state.go('tipoProducto');
    }else{
      tipoProductoSeleccionado = servicioTipoProductos.getTipoProductos($stateParams.nombreTipoProducto);
    }
    console.log(tipoProductoSeleccionado);
    vm.nuevoTipoProducto = {
      // identificacion: repartidorSeleccionado.identificacion,
      nombreTipoProducto: tipoProductoSeleccionado.nombreTipoProducto,
      impuesto: tipoProductoSeleccionado.impuesto
      
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

      $state.go('mantTipoProducto');

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

