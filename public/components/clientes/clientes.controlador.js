(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorClientes', controladorClientes);

  controladorClientes.$inject = ['$stateParams', '$state','servicioClientes'];

  function controladorClientes($stateParams, $state, servicioClientes){
    let vm = this;

    vm.sucursales = ["San Jose", "Alajuela", "Heredia", "Cartago", "Guanacaste","Puntarenas", "Limon"];

    // Objeto sin formato
    vm.nuevoCliente = {};

    vm.listaClientes = listarClientes();

    listarClientes();

    // Guardar un nuevo repartidor
    vm.registrarCliente = (pNuevoCliente) => {
      console.log(pNuevoCliente);

      let nuevoCliente= new Cliente(vm.nuevoCliente.identificacion,vm.nuevoCliente.nombre,vm.nuevoCliente.apellido1,vm.nuevoCliente.email,vm.nuevoCliente.contrasenna,vm.nuevoCliente.fechaNacimiento,vm.nuevoCliente.telefono,vm.nuevoCliente.provincia,vm.nuevoCliente.canton,vm.nuevoCliente.distrito,vm.nuevoCliente.direccion,vm.nuevoCliente.titularTarjeta,vm.nuevoCliente.numeroTarjeta,vm.nuevoCliente.mesVencimiento,vm.nuevoCliente.annoVencimiento,vm.nuevoCliente.ccv);
      console.log(nuevoCliente);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioClientes.agregarClientes(nuevoCliente);

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
      vm.listaClientes = servicioClientes.obtenerClientes();
    }



   


    // Validación de Checkbox
    // vm.listarPrioridades = function (p1,p2,p3,p4){
    //   let listaPrioridades = [];
    //   if(p1 == true){
    //     listaPrioridades.push('Baja');
    //   }
    //   if(p2 == true){
    //     listaPrioridades.push('Normal');
    //   }
    //   if(p3 == true){
    //     listaPrioridades.push('Urgente');
    //   }
    //   if(p4 == true){
    //     listaPrioridades.push('Inmediata');
    //   }
    //   return listaPrioridades;
    // }

    // Funcion que es llamda desde el html para regustra un nuevo usuario
    // vm.registrarEntierro = (pnuevoEntierro) => {
    //   vm.nuevoEntierro.prioridad = vm.listarPrioridades(vm.nuevoEntierro.p1,vm.nuevoEntierro.p2,vm.nuevoEntierro.p3,vm.nuevoEntierro.p4);

    //   // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
    //   let objNuevoEntierro = new Entierros(vm.nuevoEntierro.horaInicio,vm.nuevoEntierro.horaFinal,vm.nuevoEntierro.fecha,vm.nuevoEntierro.lugar, vm.nuevoEntierro.prioridad),
    //     objTemp = JSON.parse($stateParams.objDifuntoTemp);
        
    //   let objDifunto = new Difunto(objTemp.idlapida, objTemp.apodo, objTemp.edad, objTemp.sexo, objTemp.tamanno);

    //   // localStorage.setItem('nuevoEntierro', JSON.stringify(objNuevoEntierro));
    //   // console.log(objNuevoEntierro.obtenerHora()); //metodo de horas y minutos
  }
})();