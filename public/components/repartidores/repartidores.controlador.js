(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorRepartidores', controladorRepartidores);

  // controladorRepartidores.$inject = ['$stateParams', '$state','servicioUsuarios'];
  controladorRepartidores.$inject = ['$stateParams', '$state'];

  function controladorRepartidores($stateParams, $state){
    let vm = this;

    vm.sucursales = ["San Jose", "Alajuela", "Heredia", "Cartago", "Guanacaste","Puntarenas", "Limon"];

    vm.nuevoRepartidor = {};

    

    
    
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
    vm.registrarRepartidor = (pNuevoRepartidor) => {
      console.log(pNuevoRepartidor);

      let nuevoRepartidor = new Repartidor(vm.nuevoRepartidor.identificacion,vm.nuevoRepartidor.nombre,vm.nuevoRepartidor.apellido1,vm.nuevoRepartidor.fechaNacimiento,vm.nuevoRepartidor.telefono,vm.nuevoRepartidor.provincia,vm.nuevoRepartidor.canton,vm.nuevoRepartidor.distrito,vm.nuevoRepartidor.direccion,vm.nuevoRepartidor.puesto,vm.nuevoRepartidor.sucursal,vm.nuevoRepartidor.email,vm.nuevoRepartidor.contrasenna,vm.nuevoRepartidor.licencia,vm.nuevoRepartidor.fotoLicencia,vm.nuevoRepartidor.vencimientoLicencia);
      console.log(nuevoRepartidor);

      //   // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "El entierro se ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevoRepartidor = null;
    }
    
    // Funcion que es llamda desde el html para regustra un nuevo usuario
    // vm.registrarEntierro = (pnuevoEntierro) => {
    //   vm.nuevoEntierro.prioridad = vm.listarPrioridades(vm.nuevoEntierro.p1,vm.nuevoEntierro.p2,vm.nuevoEntierro.p3,vm.nuevoEntierro.p4);

    //   // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
    //   let objNuevoEntierro = new Entierros(vm.nuevoEntierro.horaInicio,vm.nuevoEntierro.horaFinal,vm.nuevoEntierro.fecha,vm.nuevoEntierro.lugar, vm.nuevoEntierro.prioridad),
    //     objTemp = JSON.parse($stateParams.objDifuntoTemp);
        
    //   let objDifunto = new Difunto(objTemp.idlapida, objTemp.apodo, objTemp.edad, objTemp.sexo, objTemp.tamanno);

    //   // localStorage.setItem('nuevoEntierro', JSON.stringify(objNuevoEntierro));
    //   // console.log(objNuevoEntierro.obtenerHora()); //metodo de horas y minutos

    

    //   // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
    //   servicioUsuarios.addEntierros(objDifunto, objNuevoEntierro);

      // Se limpia el formulario
    //   vm.nuevoEntierro = null;
    // }

  }
})();