(() => {
  'use strict';
  angular
  .module('correos-cr')
  .service('servicioClientes', servicioClientes);

  servicioClientes.$inject = ['$log','$http'];

  function servicioClientes($log, $http){

    let publicAPI = {
      agregarClientes : _agregarClientes,
      obtenerClientes : _obtenerClientes,
    }
    return publicAPI;

    // Guardar clientes en localStorage
    function _agregarClientes(pnuevoCliente){
      let listaClientes = _obtenerClientes();
      listaClientes.push(pnuevoCliente);
      localStorage.setItem('clientesLS', JSON.stringify(listaClientes));
    }

    // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo usuario
    function _obtenerClientes(){
      let listaClientes = [];
      let listaClientesLocal = JSON.parse(localStorage.getItem("clientesLS"));

      if(listaClientesLocal == null){
        listaClientes = [];
      }else{
        listaClientesLocal.forEach(obj => {
          
          let objClientes = new Cliente(obj.identificacion,obj.nombre,obj.apellido1,obj.email,obj.contrasenna,obj.fechaNacimiento,obj.telefono,obj.provincia,obj.canton,obj.distrito,obj.direccion,obj.titularTarjeta,obj.numeroTarjeta,obj.mesVencimiento,obj.annoVencimiento,obj.ccv);

          listaClientes.push(objClientes);
        })
      }
      return listaClientes;
    }
    // function actualizarLocal(plistaActualizada){
    //   localStorage.setItem('repartidoresLS', JSON.stringify(plistaActualizada));
    // }
  }
})();