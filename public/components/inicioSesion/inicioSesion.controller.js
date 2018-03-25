(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('inicioSesionController', inicioSesionController);

  inicioSesionController.$inject = ['$stateParams','$state','inicioSesionService'];

  function inicioSesionController($stateParams,$state,inicioSesionService){
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

        // ******** validacion por tipo de usuario para la carga del dashboard
        let session = JSON.parse(sessionStorage.session),
            sessionRol = session.rol;
        if(sessionRol === "Cliente"){
          $state.go('cliente');
        }else{
          $state.go('admin');
        }
        // *****************
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