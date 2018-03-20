(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorCasillero', controladorCasillero);

  controladorCasillero.$inject = ['$stateParams', '$state' , 'servicioCasillero'];

  function controladorCasillero($stateParams, $state){

    let vm = this;

    vm.nuevoCasillero = {};
    
    vm.registrarCasillero = (pnuevoCasillero) => {


      let idRandom = (Math.floor(Math.random()*999999999999999)+999999999999999);
                      

      console.log(idRandom);



        

     // console.log(pnuevoCasillero);

      let objNuevoCasillero = new Casillero(pnuevoCasillero.idRandom);
      console.log(objNuevaSucursal);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioCasillero.addCasillero(objNuevaCasillero);
     
     // console.log('objeto con casillero');
     // console.log(objNuevoCasillero);

  

      swal("Registro exitoso", "Se te ha asignado un casillero", "success", {
        button: "Aceptar",
      });

      vm.nuevoCasillero = null;
  
    }

  

  }

})();