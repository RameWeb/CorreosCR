(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorModificarSucursal', controladorModificarSucursal);

  controladorModificarSucursal.$inject = ['$http', '$stateParams', '$state', 'servicioSucursales'];

  function controladorModificarSucursal($http, $stateParams, $state, servicioSucursales){

    let sucursalSeleccionada;

    if($stateParams.idSucursal == ''){
      $state.go('mantenimientoSucursales');
    }else{
      sucursalSeleccionada = servicioSucursales.getSucursalSeleccionada($stateParams.idSucursal);
    }

    console.log(sucursalSeleccionada);

    let vm = this;
    
    vm.provincias = $http({
      method: 'GET',
      url: '../../sources/data/provincias.json'
    }).then( (success) => {
      vm.provincias = success.data;
    }, (error) => {
      console.log("Ocurrio un error " + error.data);
    });
    
    vm.rellenarCantones = (pidProvincia) => {
      vm.cantones = $http({
        method: 'GET',
        url: '../../sources/data/cantones.json'
      }).then((success) => {
        let cantones = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidProvincia == success.data[i].idProvincia) {
            cantones.push(success.data[i]);
          }
        }
        vm.cantones = cantones;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }

    vm.rellenarDistrito = (pidCanton) => {
      console.log(pidCanton);
      vm.distritos = $http({
        method: 'GET',
        url: '../../sources/data/distritos.json'
      }).then((success) => {
        let distritos = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidCanton == success.data[i].idCanton) {
            distritos.push(success.data[i]);
          }
        }
        vm.distritos = distritos;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }

    vm.nuevaSucursal = {
      provincia: sucursalSeleccionada.provincia,
      canton: sucursalSeleccionada.canton,
      distrito: sucursalSeleccionada.distrito,
      direccion: sucursalSeleccionada.direccion,
      telefono: sucursalSeleccionada.telefono
    };

    listarSucursales();
    
    // Funcion que es llamada desde el html para regustra un nuevo usuario
    vm.modificarSucursal = (pnuevaSucursal) => {

      let objSucursalModificada = new Sucursal(pnuevaSucursal.provincia.name, pnuevaSucursal.canton.name, pnuevaSucursal.distrito.name,  pnuevaSucursal.direccion, pnuevaSucursal.telefono, sucursalSeleccionada.idSucursal);
        
      console.log(objSucursalModificada);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioSucursales.actualizarSucursal(objNuevaSucursal);

      listarSucursales();
      // Se limpia el formulario
      vm.nuevaSucursal = null;
    }

    function listarSucursales(){
      vm.listaSucursales = servicioSucursales.getSucursal();
    }

    vm.modificar = (psucursal) =>{
      $stateParams(psucursal.idSucursal)

      $state.go('sucursales')
    }
  }
})();