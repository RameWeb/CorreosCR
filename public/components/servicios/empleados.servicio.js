(() => {
  'use strict';
  angular
  .module('correos-cr')
  .service('servicioEmpleados', servicioEmpleados);

  servicioEmpleados.$inject = ['$log','$http'];

  function servicioEmpleados($log, $http){

    let publicAPI = {
      agregarEmpleados : _agregarEmpleados,
      obtenerEmpleados : _obtenerEmpleados,
    }
    return publicAPI;

    // Guardar repartidores en localStorage
    function _agregarEmpleados(pnuevoEmpleado){
      let listaEmpleados = _obtenerEmpleados();
      listaEmpleados.push(pnuevoEmpleado);
      localStorage.setItem('EmpleadosLS', JSON.stringify(listaEmpleados));
    }

    // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo usuario
    function _obtenerEmpleados(){
      let listaEmpleados = [];
      let listaEmpleadosLocal = JSON.parse(localStorage.getItem("EmpleadosLS"));

      if(listaEmpleadosLocal == null){
        listaEmpleados = [];
      }else{
        listaEmpleadosLocal.forEach(obj => {
          
          let objEmpleados = new Empleado(obj.rolEmpleado,obj.identificacion,obj.nombre,obj.apellido1,obj.email,obj.contrasenna,obj.fechaNacimiento,obj.telefono,obj.provincia,obj.canton,obj.distrito,obj.direccion,obj.rolAduana,obj.sucursal,obj.licencia,obj.fotoLicencia,obj.vencimientoLicencia);

          listaEmpleados.push(objEmpleados);
        })
      }
      return listaEmpleados;
    }
    // function actualizarLocal(plistaActualizada){
    //   localStorage.setItem('repartidoresLS', JSON.stringify(plistaActualizada));
    // }
  }
})();