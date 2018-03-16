(() => {
  'use strict';
  angular
  .module('correos-cr')
  .service('servicioPrealertas', servicioPrealertas);

  servicioPrealertas.$inject = ['$log','$http'];

  function servicioPrealertas($log, $http){

    let publicAPI = {
      addPrealerta : _addPrealerta,
      getPrealerta : _getPrealerta
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todos los usuarios
    function _addPrealerta(pnuevaPrealerta){
      let listaPrealertas = _getPrealerta();
      listaPrealertas.push(pnuevaPrealerta);
      localStorage.setItem('prealertasLS', JSON.stringify(listaPrealertas));
    }

    // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo usuario
    function _getPrealerta(){
      let listaPrealertas = [];
      let listaPrealertasLocal = JSON.parse(localStorage.getItem("prealertasLS"));

      if(listaPrealertasLocal == null){
        listaPrealertas = [];
      }else{
        listaPrealertasLocal.forEach(obj => {
          
          let objPrealertas = new Prealertas(obj.tracking, obj.url, obj.tipoProducto, obj.valor, obj.peso, obj.factura, obj.courier);

          listaPrealertas.push(objPrealertas);
        })
      }

      return listaPrealertas;
    }
  }
})();