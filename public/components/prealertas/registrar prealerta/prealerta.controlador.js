(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorPrealertas', controladorPrealertas);

  controladorPrealertas.$inject = ['$stateParams', '$state', 'servicioPrealertas'];

  function controladorPrealertas($stateParams, $state, servicioPrealertas){
    let vm = this;

    vm.nuevaPrealerta = {};
    vm.listaPrealertas = listarPrealertas();

    listarPrealertas();
    
    // Funcion que es llamada desde el html para regustra un nuevo usuario
    vm.registrarPrealerta = (pnuevaPrealerta) => {
      
      let idRandom = ((Math.random()*Math.random())*1000);

      console.log(idRandom);

      // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
      let objNuevaPrealerta = new Prealertas(pnuevaPrealerta.tracking, pnuevaPrealerta.url, pnuevaPrealerta.tipoProducto,  pnuevaPrealerta.valor, pnuevaPrealerta.peso, pnuevaPrealerta.factura, pnuevaPrealerta.courier, idRandom);
        
      console.log(objNuevaPrealerta);

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

    vm.modificar = (pprealerta) =>{

      $state.go('modificarPrealerta', {idPrealerta: JSON.stringify(pprealerta.idPrealerta)})
    }
  }
})();