(() => {
  'use strict';
  angular
  .module('correosCr')
  .service('servicioConvenios', servicioConvenios);

  servicioConvenios.$inject = ['$log','$http'];

  function servicioConvenios($log, $http){

    let publicAPI = {
      addConvenios : _addConvenios,
      getConvenios : _getConvenios
    }
    return publicAPI;

    function _addConvenios(pnuevoConvenios){
      let listaConvenios = _getConvenios();
      listaConvenios.push(pnuevoConvenios);
      localStorage.setItem('conveniosLS', JSON.stringify(listaConvenios));
    }

  
    function _getConvenios(){
      let listaConvenios = [];
      let listaConveniosLocal = JSON.parse(localStorage.getItem("conveniosLS"));

      if(listaConveniosLocal == null){
        listaConvenios = [];
      }else{
        listaConveniosLocal.forEach(obj => {
          
          let objConvenios = new Convenios(obj.nombreInstitucion, obj.tipo, obj.tiempo, obj.costo);

          listaConvenios.push(objConvenios);
        })
      }

      return listaConvenios;
    }

    
      actualizarLocal(listaConvenios);
    }

   
    function actualizarLocal(plistaActualizada){
      localStorage.setItem('conveniosLS', JSON.stringify(plistaActualizada));
    }

 
})();