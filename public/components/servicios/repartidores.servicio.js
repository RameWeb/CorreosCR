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
          
          let objRepartidores = new Repartidor(obj.identificacion,obj.nombre,obj.apellido1,obj.fechaNacimiento,obj.telefono,obj.provincia,obj.canton,obj.distrito,obj.direccion,obj.puesto,obj.sucursal,obj.email,obj.contrasenna,obj.licencia,obj.fotoLicencia,obj.licenciaVencimiento);

          listaRepartidores.push(objRepartidores);
        })
      }
      return listaRepartidores;
    }
    // function actualizarLocal(plistaActualizada){
    //   localStorage.setItem('repartidoresLS', JSON.stringify(plistaActualizada));
    // }
  }
})();