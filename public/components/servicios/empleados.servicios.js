(() => {
  'use strict';
  angular
    .module('correos-cr')
    .service('servicioEmpleados', servicioEmpleados);

    servicioEmpleados.$inject = ['$q', '$http', 'dataStorageFactory'];

  /**
   * Función que posee todos los métodos del servicio
   * @param {*} $log
   * @param {Peticiones asincrónicas} $http
   * @param {Factorias que se encarga de ir al local Storage} dataStorageFactory 
   */
  function servicioEmpleados($q, $http, dataStorageFactory) {

    const usuariosLocal = 'usuariosLS';

    const publicAPI = {
      addUsuario: _addUsuario,
      getUsuarios: _getUsuarios,
    };
    return publicAPI;

    /**
     * Función que registra al usuario dentro del sistema
     * @param {Objeto de tipo Usuario} pnuevoUsuario 
     */
    function _addUsuario(pnuevoUsuario) {
      let listaUsuarios = _getUsuarios(),
        registroExitoso,
        usuarioRepetido = false;

      for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].getcedula() == pnuevoUsuario.getcedula()) {
          usuarioRepetido = true;
        }
      }

      if (usuarioRepetido === false) {
        registroExitoso = dataStorageFactory.setUserData(pnuevoUsuario);
      } else {
        registroExitoso = false;
      }

      return registroExitoso;
    }

    /**
     * Función que retorna todos los usuarios registrados dentro del sistema
     */
    function _getUsuarios() {
      let listaUsuarios = [],
          listaUsuariosBD = dataStorageFactory.getUsersData();

      listaUsuariosBD.forEach(obj => {
        let tempDate = new Date(obj.fechaNacimiento),
          objUsuarios = new Cliente(obj.cedula, obj.primerNombre, obj.segundoNombre, obj.primerApellido, obj.segundoApellido, tempDate, obj.correoElectronico, obj.contrasenna, obj.provincia, obj.canton, obj.distrito, obj.photo);

        objUsuarios.setVehiculos(obj.vehiculos);

        listaUsuarios.push(objUsuarios);
      });

      console.log('Datos de la BD convertidos en clases');
      console.log(listaUsuarios);

      return listaUsuarios;
    }
  }
})();