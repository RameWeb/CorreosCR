(() => {
  'use strict';
  angular
  .module('correos-cr')
  .service('servicioConveniosCliente', servicioConveniosCliente);

  servicioConveniosCliente.$inject = ['$log','$http'];

  function servicioConveniosCliente($log, $http){

    let publicAPI = {
      addConveniosCliente : _addConveniosCliente,
      getConveniosCliente : _getConveniosCliente
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todos los usuarios
    function _addConveniosCliente(pnunevoConvenio){
      let listaConvenios = _getConveniosCliente();
      listaConvenios.push(pnunevoConvenio);
      localStorage.setItem('conveniosClienteLS', JSON.stringify(listaConvenios));
    }

    // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo usuario
    function _getConveniosCliente(){
      let listaConvenios = [];
      let listaConveniosLocal = JSON.parse(localStorage.getItem("conveniosClienteLS"));

      if(listaConveniosLocal == null){
        listaConvenios = [];
      }else{
        listaConveniosLocal.forEach(obj => {
          
          let objConveniosClientes = new Convenios(obj.tipo, obj.cliente, obj.factura, obj.direccion);

          listaConvenios.push(objConveniosClientes);
        })
      }

      return listaConvenios;
    }

  }
})();