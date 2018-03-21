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
      obtenerEmpleadoSeleccionado : _obtenerEmpleadoSeleccionado,
      actualizarEmpleado : _actualizarEmpleado
    }
    return publicAPI;

    // Guardar repartidores en localStorage
    function _agregarEmpleados(pnuevoEmpleado){
      let listaEmpleados = _obtenerEmpleados();
      listaEmpleados.push(pnuevoEmpleado);
      localStorage.setItem('empleadosLS', JSON.stringify(listaEmpleados));
    }

    // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo usuario
    function _obtenerEmpleados(){
      let listaEmpleados = [];
      let listaEmpleadosLocal = JSON.parse(localStorage.getItem("empleadosLS"));

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

    function _obtenerEmpleadoSeleccionado(identificacion){
      let listaEmpleados = _obtenerEmpleados();
      let empleadoSeleccionado;

      for(let i = 0; i < listaEmpleados.length; i++){
        if (identificacion == listaEmpleados[i].identificacion){
          empleadoSeleccionado = listaEmpleados[i];
          // console.log(sucursalSeleccionada);
          return empleadoSeleccionado;
        }
      }
    }

    function _actualizarEmpleado(pEmpleadoModificado){
      let listaEmpleados = _obtenerEmpleados();

      for(let i = 0; i < listaEmpleados.length; i++){
        if (pEmpleadoModificado.identificacion == listaEmpleados[i].identificacion){
          listaEmpleados[i] = pEmpleadoModificado;
          // console.log(listaSucursales[i]);

          localStorage.setItem('empleadosLS', JSON.stringify(listaEmpleados));
        }
      }
    }

    // function actualizarLocal(plistaActualizada){
    //   localStorage.setItem('repartidoresLS', JSON.stringify(plistaActualizada));
    // }
  }
})();