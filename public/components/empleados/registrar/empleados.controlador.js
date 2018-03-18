(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorEmpleados', controladorEmpleados);

  controladorEmpleados.$inject = ['$stateParams', '$state','servicioEmpleados'];

  function controladorEmpleados($stateParams, $state, servicioEmpleados){
    let vm = this;

    vm.sucursales = ["San Jose", "Alajuela", "Heredia", "Cartago", "Guanacaste","Puntarenas", "Limon"];

    // Objeto sin formato
    vm.nuevoEmpleado = {};

    vm.listaEmpleados = listarEmpleados();

    listarEmpleados();

    // Guardar un nuevo empleado
    vm.registrarEmpleados = (pNuevoEmpleado) => {
      console.log(pNuevoEmpleado);

      let nuevoEmpleado = new Empleado(vm.nuevoEmpleado.rol, vm.nuevoEmpleado.identificacion,vm.nuevoEmpleado.nombre,vm.nuevoEmpleado.apellido1,vm.nuevoEmpleado.email,vm.nuevoEmpleado.contrasenna,vm.nuevoEmpleado.fechaNacimiento,vm.nuevoEmpleado.telefono,vm.nuevoEmpleado.provincia,vm.nuevoEmpleado.canton,vm.nuevoEmpleado.distrito,vm.nuevoEmpleado.direccion,vm.nuevoEmpleado.rolAduana,vm.nuevoEmpleado.sucursalAsignada,vm.nuevoEmpleado.licencia,vm.nuevoEmpleado.fotoLicencia,vm.nuevoEmpleado.vencimientoLicencia);
      console.log(nuevoEmpleado);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioEmpleados.agregarEmpleados(nuevoEmpleado);

      //   // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "El empleado se ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevoEmpleado = null;

      listarEmpleados();
    }

    // Imprimir lista de repartidores en el sistema
    function listarEmpleados(){
      vm.listaEmpleados = servicioEmpleados.obtenerEmpleados();
    }

  }
})();