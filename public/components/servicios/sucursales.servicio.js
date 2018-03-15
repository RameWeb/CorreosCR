(() => {
  'use strict';
  angular
  .module('correos-cr')
  .service('servicioSucursales', servicioSucursales);

  servicioSucursales.$inject = ['$log','$http'];

  function servicioSucursales($log, $http){

    let publicAPI = {
      addSucursal : _addSucursal,
      getSucursal : _getSucursal
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
  }
})();