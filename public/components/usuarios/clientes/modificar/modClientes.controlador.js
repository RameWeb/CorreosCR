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
      clienteSeleccionado = servicioUsuarios.obtenerUsuarioPorRol($stateParams.identificacion);
    }
    console.log(clienteSeleccionado);

    let vm = this;

    vm.nuevoClienteModificado = {
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
      let clienteModificado = new Cliente(vm.nuevoClienteModificado.identificacion,vm.nuevoClienteModificado.nombre,vm.nuevoClienteModificado.apellido1,vm.nuevoClienteModificado.email,vm.nuevoClienteModificado.contrasenna,vm.nuevoClienteModificado.fechaNacimiento,vm.nuevoClienteModificado.telefono,vm.nuevoClienteModificado.provincia,vm.nuevoClienteModificado.canton,vm.nuevoClienteModificado.distrito,vm.nuevoClienteModificado.direccion,vm.nuevoClienteModificado.titularTarjeta,vm.nuevoClienteModificado.numeroTarjeta,vm.nuevoClienteModificado.mesVencimiento,vm.nuevoClienteModificado.annoVencimiento,vm.nuevoClienteModificado.ccv);

      console.log(clienteModificado);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      vm.clienteSeleccionado = servicioClientes.actualizarCliente(clienteModificado);

      //Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "El cliente se ha sido modificado correctamente", "success", {
        button: "Aceptar",
      });

      $state.go('mantClientes');

      listarClientes();
      
      // Se limpia el formulario
      vm.nuevoClienteModificado = null;
    }
    
  // Imprimir lista de repartidores en el sistema
    function listarClientes(){
      vm.listaClientes = servicioClientes.obtenerClientes();
    }
  }
})();