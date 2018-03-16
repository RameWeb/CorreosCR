(() => {
  'use strict';
  angular
  .module('correos-cr')
  .service('servicioTipoProductos', servicioTipoProductos);

  servicioTipoProductos.$inject = ['$log','$http'];

  function servicioTipoProductos($log, $http){
    const publicAPI = {
      addTipoProducto : _addTipoProducto,
      getTipoProductos : _getTipoProductos 
    };
    return publicAPI;

    // Funcion que almacena en el localStorage todas las fiestas programadas
    function _addTipoProducto(pnuevoTipoProducto){
      let listaTipoProductos = _getTipoProductos();
      listaTipoProductos.push(pnuevoTipoProducto);
      localStorage.setItem('tipoProductoLS', JSON.stringify(listaTipoProductos));
    }

    // Funcion que trae todas las fiestas programadas del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo fiesta
    function _getTipoProductos(){
      let listaTipoProductos = [];
      let listaTipoProductosLocal = JSON.parse(localStorage.getItem("tipoProductoLS"));

      if(!listaTipoProductosLocal){
        listaTipoProductos = [];
      }else{
        listaTipoProductosLocal.forEach(obj => {
          let objTipoProductos = new tipoProducto(obj.nombreTipoProducto, obj.impuesto);

          listaTipoProductos.push(objTipoProductos);
        })
      }
      return listaTipoProductos;
    }
  };
})();