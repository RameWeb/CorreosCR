(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorModificarPrealertas', controladorModificarPrealertas);

  controladorModificarPrealertas.$inject = ['$stateParams', '$state', 'servicioPrealertas'];

  function controladorModificarPrealertas($stateParams, $state, servicioPrealertas){

    let prealertaSeleccionada;

    if($stateParams.idPrealerta == ''){
      $state.go('mantenimientoPrealertas')
    }else{
      prealertaSeleccionada = servicioPrealertas.getPrealertaSeleccionada($stateParams.idPrealerta);
    }

    console.log(prealertaSeleccionada);

    let vm = this;

    vm.nuevaPrealerta = {
      tracking: prealertaSeleccionada.tracking,
      url: prealertaSeleccionada.url,
      tipo: prealertaSeleccionada.tipoProducto,
      valor: prealertaSeleccionada.valor,
      peso: prealertaSeleccionada.peso,
      factura: prealertaSeleccionada.factura,
      courier: prealertaSeleccionada.courier
    };

    listarPrealertas();
    
    // Funcion que es llamada desde el html para regustra un nuevo usuario
    vm.modificarPrealerta = (pnuevaPrealerta) => {
      
      console.log(pnuevaPrealerta);

      // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
      let objPrealertaModificada = new Prealertas(pnuevaPrealerta.tracking, pnuevaPrealerta.url, pnuevaPrealerta.tipoProducto,  pnuevaPrealerta.valor, pnuevaPrealerta.peso, pnuevaPrealerta.factura, pnuevaPrealerta.courier, pnuevaPrealerta.idPrealerta);
        
      console.log(objPrealertaModificada);

      // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "El nuevo paquete se ha sido prealertado correctamente", "success", {
        button: "Aceptar",
      });

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioPrealertas.addPrealerta(objNuevaPrealerta);

      // Se limpia el formulario
      vm.nuevaPrealerta = null;
      listarPrealertas();
    }

    function listarPrealertas(){
    vm.listaPrealertas = servicioPrealertas.getPrealerta();
    }
  }
})();