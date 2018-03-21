(() => {
  'use strict';
  angular
  .module('correos-cr')
  .service('servicioPaquetes', servicioPaquetes);

  servicioPaquetes.$inject = ['$log','$http'];

  function servicioPaquetes($log, $http){

    let publicAPI = {
      addPaquetes : _addPaquetes,
      getPaquetes : _getPaquetes,
      getPaquetesSeleccionada: _getPaquetesSeleccionada,
      actualizarPaquetes: _actualizarPaquetes
    }
    return publicAPI;

    function _addPaquetes(pnuevoPaquetes){
      let listaPaquetes = _getPaquetes();
      listaPaquetes.push(pnuevoPaquetes);
      localStorage.setItem('paquetesLS', JSON.stringify(listaPaquetes));
    }

  
    function _getPaquetes(){
      let listaPaquetes = [];
      let listaPaquetesLocal = JSON.parse(localStorage.getItem("paquetesLS"));

      if(listaPaquetesLocal == null){
        listaPaquetes = [];
      }else{
        listaPaquetesLocal.forEach(obj => {
          
          let objPaquetes = new Paquetes(obj.tracking, obj.nombre, obj.peso, obj.valor, obj.estado);

          listaPaquetes.push(objPaquetes);
        })
      }

      return listaPaquetes;
    }

    
      actualizarLocal(listaPaquetes);
    }

   
    //function actualizarLocal(plistaActualizada){
     // localStorage.setItem('paquetesLS', JSON.stringify(plistaActualizada));
    //}



    function _getPaquetesSeleccionada(idPaquetes){
      let listaPaquetes = _getPaquetes();
      let paquetesSeleccionada;

      for(let i = 0; i < listaPaquetes.length; i++){
        if (idPaquetes == listaPaquetes[i].idPaquetes){
          paquetesSeleccionada = listaPaquetes[i];
          // console.log(sucursalSeleccionada);
          return paquetesSeleccionada;
        }
      }
    }

    function _actualizarPaquetes(ppaquetesModificada){
      let listaPaquetes = _getPaquetes();

      for(let i = 0; i < listaPaquetes.length; i++){
        if (ppaquetesModificada.idPaquetes == listaPaquetes[i].idPaquetes){
          listaPaquetes[i] = ppaquetesModificada;
          // console.log(listaSucursales[i]);

          localStorage.setItem('paquetesLS', JSON.stringify(listaPaquetes)); 
        }
      }
    }

    // console.log(_getSucursal());
  
 
})();