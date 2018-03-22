(() => {
  'use strict';
  angular
  .module('correos-cr')
  .service('servicioConveniosCliente', servicioConveniosCliente);

  servicioConveniosCliente.$inject = ['$log','$http'];

  function servicioConveniosCliente($log, $http){

    let publicAPI = {
      agregarConveniosCliente : _agregarConveniosCliente,
      obtenerConveniosClientes : _obtenerConveniosClientes,
      obtenerConveniosSeleccionados: _obtenerConveniosSeleccionados,
      actualizarConvenio: _actualizarConvenio
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todos los usuarios
    function _agregarConveniosCliente(pnunevoConvenio){
      let listaConvenios = _obtenerConveniosClientes();
      listaConvenios.push(pnunevoConvenio);
      localStorage.setItem('conveniosClienteLS', JSON.stringify(listaConvenios));
    }

    // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo usuario
    function _obtenerConveniosClientes(){
      let listaConvenios = [];
      let listaConveniosLocal = JSON.parse(localStorage.getItem("conveniosClienteLS"));

      if(listaConveniosLocal == null){
        listaConvenios = [];
      }else{
        listaConveniosLocal.forEach(obj => {
          
          let objConveniosClientes = new ConveniosClientes(obj.servicio, obj.cliente, obj.direccion, obj.idConvenio);

          listaConvenios.push(objConveniosClientes);
        })
      }

      return listaConvenios;
    }

    function _obtenerConveniosSeleccionados(idConvenio){
      let listaConvenios = _obtenerConveniosClientes();
      let convenioSeleccionado;

      for(let i = 0; i < listaConvenios.length; i++){
        if (idConvenio == listaConvenios[i].idConvenio){
          convenioSeleccionado = listaConvenios[i];
          // console.log(convenioSeleccionado);
          return convenioSeleccionado;
        }
      }
    }

    function _actualizarConvenio(pconvenioModificado){
      let listaConvenios = _obtenerConveniosClientes();

      for(let i = 0; i < listaConvenios.length; i++){
        if (pconvenioModificado.idConvenio == listaConvenios[i].idConvenio){
          listaConvenios[i] = pconvenioModificado;
          // console.log(listaConvenios[i]);

          localStorage.setItem('conveniosClienteLS', JSON.stringify(listaConvenios)); 
        }
      }
    }
  }
})();