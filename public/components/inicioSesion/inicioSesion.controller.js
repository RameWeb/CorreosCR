(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('inicioSesionController', inicioSesionController);

  inicioSesionController.$inject = ['inicioSesionService'];

  function inicioSesionController(inicioSesionService){
    const vm = this;

    vm.nuevaSesion = {};

    vm.iniciarSesion = (pcredenciales) => {

      let inicioSesion = inicioSesionService.logIn(pcredenciales);

      console.log(inicioSesion);

      if(inicioSesion == true){
        swal({
          title: "Inicio de sesión exitoso",
          text: "Bienvenido",
          icon: "success",
          button: "Aceptar",
        });
        $state.go('cliente');
      }else{
        swal({
          title: "Inicio de sesión fallido",
          text: "Los datos ingresados son incorrectos",
          icon: "error",
          button: "Aceptar",
        });
      }
    };
  };
})();