(() => {
  'use strict';
  angular
  .module('correos-cr')
  .service('servicioSucursales', servicioSucursales);

  servicioSucursales.$inject = ['$log','$http'];

  function servicioSucursales($log, $http){

    let publicAPI = {
      addSucursal : _addSucursal,
      getSucursal : _getSucursal,
      mapInfo : _mapInfo
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todos los usuarios
    function _addSucursal(pnuevaSucursal){
      let listaSucursales = _getSucursal();
      listaSucursales.push(pnuevaSucursal);
      localStorage.setItem('sucursalesLS', JSON.stringify(listaSucursales));
    }

    // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo usuario
    function _getSucursal(){
      let listaSucursales = [];
      let listaSucursalesLocal = JSON.parse(localStorage.getItem("sucursalesLS"));

      if(listaSucursalesLocal == null){
        listaSucursales = [];
      }else{
        listaSucursalesLocal.forEach(obj => {
          
          let objSucursales = new Sucursales(obj.provincia, obj.canton, obj.distrito, obj.direccion, obj.telefono);

          listaSucursales.push(objSucursales);
        })
      }

      return listaSucursales;
    }

    function _mapInfo(){
      let crLocations = $.getJSON('https://gist.githubusercontent.com/richin13/7fc95f2e433c2f46335ef02d959b0561/raw/ed547938d347437b5f6b9abc84dfee8f5e94ece1/administrative-divisions-cr-2018.json', function(data){
        console.log(data); 
        return data;
      });
    }

  }
})();