(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorModClientes', controladorModClientes);

  controladorModClientes.$inject = ['$http','$stateParams', '$state','servicioClientes'];

  function controladorModClientes($http, $stateParams, $state, servicioClientes){
    let clienteSeleccionado;

    if($stateParams.identificacion == ''){
      $state.go('mantClientes');
    }else{
      clienteSeleccionado = servicioClientes.obtenerClienteSeleccionado($stateParams.identificacion);
    }
    console.log(clienteSeleccionado);

    let vm = this;

    vm.nuevoCliente = {
      identificacion: clienteSeleccionado.identificacion,
      nombre: clienteSeleccionado.nombre,
      apellido1: clienteSeleccionado.apellido1,
      email: clienteSeleccionado.email,
      contrasenna: clienteSeleccionado.contrasenna,
      fechaNacimiento: new Date(clienteSeleccionado.fechaNacimiento),
      telefono: clienteSeleccionado.telefono,
      provincia: clienteSeleccionado.provincia,
      canton: clienteSeleccionado.canton,
      distrito: clienteSeleccionado.distrito,
      direccion: clienteSeleccionado.direccion,
      titularTarjeta: clienteSeleccionado.titularTarjeta,
      numeroTarjeta: clienteSeleccionado.numeroTarjeta,
      mesVencimiento: clienteSeleccionado.mesVencimiento,
      annoVencimiento: clienteSeleccionado.annoVencimiento,
      ccv: clienteSeleccionado.ccv
    };

    vm.modificarCliente = (pNuevoCliente) =>{
      let identificacion = clienteSeleccionado.identificacion;
      let clienteModificado = new Cliente(vm.nuevoCliente.identificacion,vm.nuevoCliente.nombre,vm.nuevoCliente.apellido1,vm.nuevoCliente.email,vm.nuevoCliente.contrasenna,vm.nuevoCliente.fechaNacimiento,vm.nuevoCliente.telefono,vm.nuevoCliente.provincia,vm.nuevoCliente.canton,vm.nuevoCliente.distrito,vm.nuevoCliente.direccion,vm.nuevoCliente.titularTarjeta,vm.nuevoCliente.numeroTarjeta,vm.nuevoCliente.mesVencimiento,vm.nuevoCliente.annoVencimiento,vm.nuevoCliente.ccv);

      console.log(clienteModificado);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      vm.clienteSeleccionad = servicioClientes.actualizarCliente(clienteModificado);

      //Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "El cliente se ha sido modificado correctamente", "success", {
        button: "Aceptar",
      });

      $state.go('mantClientes');

      listarClientes();
      
      // Se limpia el formulario
      vm.nuevoCliente = null;
    }
    
  // Imprimir lista de repartidores en el sistema
    function listarClientes(){
      vm.listaClientes = servicioClientes.obtenerClientes();
    }
  }
})();