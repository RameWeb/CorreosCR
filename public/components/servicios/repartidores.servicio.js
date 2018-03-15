(() => {
  'use strict';
  angular
  .module('correos-cr')
  .service('servicioRepartidores', servicioRepartidores);

  servicioRepartidores.$inject = ['$log','$http'];

  function servicioRepartidores($log, $http){

    let publicAPI = {
      agregarRepartidores : _agregarRepartidores,
      obtenerRepartidores : _obtenerRepartidores,
    }
    return publicAPI;

    // Guardar repartidores en localStorage
    function _agregarRepartidores(pnuevoRepartidor){
      let listaRepartidores = _obtenerRepartidores();
      listaRepartidores.push(pnuevoRepartidor);
      localStorage.setItem('repartidoresLS', JSON.stringify(listaRepartidores));
    }

    // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo usuario
    function _obtenerRepartidores(){
      let listaRepartidores = [];
      let listaRepartidoresLocal = JSON.parse(localStorage.getItem("repartidoresLS"));

      if(listaRepartidoresLocal == null){
        listaRepartidores = [];
      }else{
        listaRepartidoresLocal.forEach(obj => {
          
          let objUsuarios = new Cliente(obj.foto,obj.cedula,obj.nombre,obj.apellido,obj.fechanacimiento,obj.sexo,obj.ubicacion,obj.provincia,obj.canton,obj.distrito,obj.usuario,obj.contrasenna);

          listaUsuarios.push(objUsuarios);
        })
      }
      return listaRepartidores;
    }
    // function actualizarLocal(plistaActualizada){
    //   localStorage.setItem('repartidoresLS', JSON.stringify(plistaActualizada));
    // }
  }
})();