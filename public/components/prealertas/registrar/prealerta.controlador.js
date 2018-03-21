(() => {
  'use strict';
  angular
  .module('correos-cr')
  .controller('controladorPrealertas', controladorPrealertas);

  controladorPrealertas.$inject = ['$stateParams', '$state', 'servicioPrealertas'];

  function controladorPrealertas($stateParams, $state, servicioPrealertas){
    let vm = this;

    vm.courier = ["DHL", "UPS", "Amazon", "FedEx", "TNT Express", "USPS", "CRBOx", "Aerocasillas", "JetBox"];

    vm.tipoProducto = ["Accesorios para Vehículos", "Animales y Mascotas", "Arte y Antigüedades", "Bebés", "Cámaras y Fotografía", "Celulares y Teléfonos", "Coleccionables y Hobbies", "Computación", "Consolas y Videojuegos", "Deportes y Fitness", "Electrodomésticos", "Electrónica, Audio y Video", "Herramientas y Construcción", "Hogar, Muebles y Jardín", "Industrias y Oficinas", "Instrumentos Musicales", "Joyas y Relojes", "Juegos y Juguetes", "Libros, Revistas y Comics", "Música y Película", "Ropa y Accesorios", "Salud y Belleza", "Otras categorías"];

    //Objeto sin formato

    vm.nuevaPrealerta = {};
    vm.listaPrealertas = listarPrealertas();

    listarPrealertas();
    
    // Funcion que es llamada desde el html para regustra un nuevo usuario
    vm.registrarPrealerta = (pnuevaPrealerta) => {
      
      let idRandom = ((Math.random()*Math.random())*1000);

      console.log(idRandom);

      // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
      let objNuevaPrealerta = new Prealertas(pnuevaPrealerta.tracking, pnuevaPrealerta.url, pnuevaPrealerta.tipoProducto,  pnuevaPrealerta.valor, pnuevaPrealerta.peso, pnuevaPrealerta.factura, pnuevaPrealerta.courier, idRandom);
        
      console.log(objNuevaPrealerta);

      servicioPrealertas.addPrealerta(objNuevaPrealerta);

      // Retroalimentacion Visual para los usuarios: SweetAlert
      swal("Registro exitoso", "El nuevo paquete se ha sido prealertado correctamente", "success", {
        button: "Aceptar",
      });

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      listarPrealertas();

      // Se limpia el formulario
      vm.nuevaPrealerta = null;
    }

    function listarPrealertas(){
    vm.listaPrealertas = servicioPrealertas.getPrealerta();
    }

    vm.modificar = (pprealerta) =>{

      $state.go('modificarPrealerta', {idPrealerta: JSON.stringify(pprealerta.idPrealerta)})
    }
  }
})();