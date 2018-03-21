(() => {
  'use strict';
  angular
  .module('correos-cr')
  .service('servicioPrealertas', servicioPrealertas);

  servicioPrealertas.$inject = ['$log','$http'];

  function servicioPrealertas($log, $http){

    let publicAPI = {
      addPrealerta : _addPrealerta,
      getPrealerta : _getPrealerta,
      getPrealertaSeleccionada: _getPrealertaSeleccionada,
      actualizarPrealerta : _actualizarPrealerta
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
          
          let objPrealertas = new Prealertas(obj.tracking, obj.url, obj.tipoProducto, obj.valor, obj.peso, obj.factura, obj.courier, obj.idPrealerta);

          listaPrealertas.push(objPrealertas);
        })
      }

      return listaPrealertas;
    }

    function _getPrealertaSeleccionada(idPrealerta){
      let listaPrealertas = _getPrealerta();
      let prealertaSeleccionada;

      for (let i= 0; i < listaPrealertas.length; i++){
        if (idPrealerta == listaPrealertas[i].idPrealerta){
          prealertaSeleccionada = listaPrealertas[i];
        }
      }
      return prealertaSeleccionada;        

    }

    function _actualizarPrealerta(pprealertaModificada){
      let listaPrealertas = _getPrealerta();

      for(let i = 0; i < listaPrealertas.length; i++){
        if (pprealertaModificada.idPrealerta == listaPrealertas[i].idPrealerta){
          listaPrealertas[i] = pprealertaModificada;
          // console.log(listaSucursales[i]);

          localStorage.setItem('prealertasLS', JSON.stringify(listaPrealertas)); 
        }
      }
    }

  }
})();