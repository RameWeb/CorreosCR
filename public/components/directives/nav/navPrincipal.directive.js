(() => {
  'use strict';
  angular
  .module('correos-cr')
  .directive('navegacionPrincipal', navegacionPrincipal);
  
  function navegacionPrincipal(){
    let navegacion = {
      templateUrl: '../../../components/directives/nav/navPrinicipal.vista.html',
      restrict: 'EA' //E = Etiqueta, A = Atributo, C = Comentario, M.
    };

    return navegacion;
  }
})();