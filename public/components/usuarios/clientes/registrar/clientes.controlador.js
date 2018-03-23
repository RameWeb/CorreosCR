(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorClientes', controladorClientes);

  controladorClientes.$inject = ['$stateParams', '$state','servicioUsuarios'];

  function controladorClientes($stateParams, $state, servicioUsuarios){
    let vm = this;

    vm.sucursales = ["San Jose", "Alajuela", "Heredia", "Cartago", "Guanacaste","Puntarenas", "Limon"];

    // Objeto sin formato
    vm.nuevoCliente = {};

    vm.listaClientes = listarClientes();

    listarClientes();

    // Guardar un nuevo repartidor
    vm.registrarCliente = (pNuevoCliente) => {
      console.log(pNuevoCliente);

      let nuevoCliente= new Cliente(vm.nuevoCliente.identificacion,vm.nuevoCliente.nombre,vm.nuevoCliente.apellido1,vm.nuevoCliente.email,vm.nuevoCliente.contrasenna,vm.nuevoCliente.fechaNacimiento,vm.nuevoCliente.telefono,vm.nuevoCliente.provincia,vm.nuevoCliente.canton,vm.nuevoCliente.distrito,vm.nuevoCliente.direccion,vm.nuevoCliente.titularTarjeta,vm.nuevoCliente.numeroTarjeta,vm.nuevoCliente.mesVencimiento,vm.nuevoCliente.annoVencimiento,vm.nuevoCliente.ccv, 1);
      console.log(nuevoCliente);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioUsuarios.agregarUsuario(nuevoCliente);

      //   // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "El cliente se ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevoCliente = null;

      listarClientes();
    }

    // Imprimir lista de repartidores en el sistema
    function listarClientes(){
      vm.listaClientes = servicioUsuarios.obtenerUsuarioPorRol("Cliente");
    }

    vm.modificar = (pCliente) =>{
      $state.go('modClientes', {identificacion: JSON.stringify(pCliente.identificacion)})
    }
  }
})();