(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorDirecciones', controladorDirecciones);

  controladorDirecciones.$inject = ['$stateParams', '$state', 'servicioDirecciones'];

  function controladorDirecciones($stateParams, $state, servicioDirecciones){

    let vm = this;

    vm.nuevaDireccion = {};
    vm.listaDirecciones = listarDirecciones();

    listarDirecciones();
    // Función que es llamada desde el html para registra una nueva direccion
    vm.registrarDireccion = (pnuevaDireccion) => {

      console.log(pnuevaDireccion);

      // Tomamos el objeto sin formato y lo convertimos en una instancia de la clase direccion
      let objNuevaDireccion = new Direccion(pnuevaDireccion.provincia,pnuevaDireccion.canton,pnuevaDireccion.distrito);
     
      console.log('objeto con direccion');
      console.log(objNuevaDireccion);

      // Pasamos al servicio el nuevo obj de tipo Direccion para ser almacenado en el localStorage
      servicioDirecciones.addDireccion(objNuevaDireccion);

      // Retroalimentación Visual para las Direcciones
      swal("Registro exitoso", "La Direccion ha sido registrada correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevaDireccion = null;
      listarDirecciones();
    }

    function listarDirecciones() {
      vm.listaDirecciones = servicioDirecciones.getDirecciones();
    }

    // var firstOption = ["Heredia","San Jose"];

    // var secondOption = [["Heredia","Barva","Santo Domingo","Santa BÃ¡rbara","San Rafael","San Isidro","BelÃ©n","Flores","San Pablo","SarapiquÃ­"],["San JosÃ©","EscazÃº","Desamparados","Puriscal","TarrazÃº","AserrÃ­", "Mora", "Goicoechea","Santa Ana","Alajuelita","VÃ¡squez de Coronado","Acosta","TibÃ¡s","Moravia","Montes de Oca", "Turrubares","Dota","Curridabat","PÃ©rez ZeledÃ³n","LeÃ³n CortÃ©s"]];

    // var thirdOption = [["Heredia", "Mercedes", "San Francisco",  "Ulloa", "Varablanca"],["San JosÃ©","EscazÃº","Desamparados","Puriscal","TarrazÃº","AserrÃ­", "Mora", "Goicoechea","Santa Ana","Alajuelita","VÃ¡squez de Coronado","Acosta","TibÃ¡s","Moravia","Montes de Oca", "Turrubares","Dota","Curridabat","PÃ©rez ZeledÃ³n","LeÃ³n CortÃ©s"]];
    
    // function myCtrl{
    //   $scope.options1 = firstOption;
    //   $scope.options2 = []; // we'll get these later
    //   $scope.getOptions2 = function(){
    //       var key = $scope.options1.indexOf($scope.option1);
    //       var myNewOptions = secondOption[key];
    //       $scope.options2 = myNewOptions;
    //   }
    //   $scope.options3 = []; // we'll get these later
    //   $scope.getOptions3 = function(){
    //       var key = $scope.options2.indexOf($scope.option2);
    //       var myNewOptions = thirdOption[key];
    //       $scope.options3 = myNewOptions;
    //   }
    // }

  }
})();