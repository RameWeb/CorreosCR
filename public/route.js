(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider

    .state('landing-page', {
      url: '/',
      templateUrl: './components/landingPage/landing.vista.html',
      data:{
        pageTitle: 'Inicio | Correos de Costa Rica'
      }
    })

   
    .state('registroSucursal',{
      url: '/registroSucursal',
      templateUrl: './components/sucursales/registrar/sucursales.vista.html',
      data:{
        pageTitle: 'Registrar Sucursales'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/sucursales/registrar/sucursales.controlador.js')
        }]
      },
      controller: 'controladorSucursales',
      controllerAs: 'vm'
    })

    .state('listarSucursal',{
      url: '/listarSucursal',
      templateUrl: './components/sucursales/listarBuscar/mantenimientoSucursales.vista.html',
      data:{
        pageTitle: 'Listar Sucursales'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/sucursales/registrar/sucursales.controlador.js')
        }]
      },
      controller: 'controladorSucursales',
      controllerAs: 'vm'
    })

    .state('modificarSucursal',{
      url: '/modificarSucursal',
      templateUrl: './components/sucursales/modificar/modificarSucursal.vista.html',
      data:{
        pageTitle: 'Modificar Sucursales'
      },
      params:{
        idSucursal: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/sucursales/modificar/modificarSucursal.controlador.js')
        }]
      },
      controller: 'controladorModificarSucursal',
      controllerAs: 'vm'
    })
    
    .state('registroPrealerta',{
      url: '/registroPrealerta',
      templateUrl: './components/prealertas/registrar/prealerta.vista.html',
      data:{
        pageTitle: 'Registrar Prealertas'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/prealertas/registrar/prealerta.controlador.js')
        }]
      },
      controller: 'controladorPrealertas',
      controllerAs: 'vm'
    })

    .state('listarPrealerta',{
      url: '/listarPrealerta',
      templateUrl: './components/prealertas/listarBuscar/mantenimientoPrealerta.vista.html',
      data:{
        pageTitle: 'Listar Prealertas'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/prealertas/registrar/prealerta.controlador.js')
        }]
      },
      controller: 'controladorPrealertas',
      controllerAs: 'vm'
    })

    .state('modificarPrealerta',{
      url: '/modificarPrealerta',
      templateUrl: './components/prealertas/modificar/modificarPrealerta.vista.html',
      data:{
        pageTitle: 'Modificar Prealertas'
      },
      params: {
        tracking: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/prealertas/modificar/modificarPrealerta.controlador.js')
        }]
      },
      controller: 'controladorModificarPrealertas',
      controllerAs: 'vm'
    })

    .state('registrarConvCliente',{
      url: '/registrarConvCliente',
      templateUrl: './components/convenios/registrar/convenios.vista.html',
      data:{
        pageTitle: 'Registrar Convenios'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/convenios/registrar/convenios.controlador.js')
        }]
      },
      controller: 'controladorConveniosCliente',
      controllerAs: 'vm'
    })

    

    .state('convenios', {
      url: '/convenios',
      templateUrl: './components/convenios/registrarConvenio/convenio.vista.html',
      data:{
        pageTitle: 'Registro convenios | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/convenios/registrarConvenio/convenios.controlador.js')
        }]
      },
      controller: 'controladorConvenios',
      controllerAs: 'vm'
    })

    .state('lista-convenios', {
      url: '/lista-convenios',
      templateUrl: './components/convenios/listarConvenio/listaConvenios.vista.html',
      data:{
        pageTitle: 'Lista convenios | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/convenios/registrarConvenio/convenios.controlador.js')
        }]
      },
      controller: 'controladorConvenios',

      controllerAs: 'vm'
    })

    
    .state('modificar-convenios', {
      url: '/modificar-convenios',
      templateUrl: './components/convenios/modificarConvenio/modificarConvenios.vista.html',
      data:{
        pageTitle: 'Lista convenios | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/convenios/modificarConvenio/modificarConvenio.controlador.js')
        }]
      },
      controller: 'controladorModificarConvenios',
      controllerAs: 'vm'
    })
    

    .state('paquetes', {
      url: '/paquetes',
      templateUrl: './components/paquetes/registrarPaquetes/paquetes.vista.html',
      data:{
        pageTitle: 'Registro llegada de paquetes | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/paquetes/registrarPaquetes/paquetes.controlador.js')
        }]
      },
      controller: 'controladorPaquetes',
      controllerAs: 'vm'
    })

    .state('listarPaquetes', {
      url: '/listarPaquetes',
      templateUrl: './components/paquetes/listarPaquetes/listarPaquetes.vista.html',
      data:{
        pageTitle: 'Lista llegada de paquetes | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/paquetes/registrarPaquetes/paquetes.controlador.js')
        }]
      },
      controller: 'controladorPaquetes',
      controllerAs: 'vm'
    })
    .state('modificarPaquetes', {
      url: '/modificarPaquetes',
      templateUrl: './components/paquetes//modificarPaquetes/modificarPaquetes.vista.html',
      data:{
        pageTitle: 'Editar paquetes | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/paquetes/modificarPaquetes/modificarPaquetes.controlador.js')
        }]
      },
      controller: 'controladorModificarPaquetes',
      controllerAs: 'vm'
    })

    .state('cambiarEstadoPaquetes', {
      url: '/cambiarEstadoPaquetes',
      templateUrl: './components/paquetes/cambiarEstadoPaquetes/cambiarEstadoPaquetes.vista.html',
      data:{
        pageTitle: 'Editar paquetes | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/paquetes/cambiarEstadoPaquetes/cambiarEstadoPaquetes.controlador.js')
        }]
      },
      controller: 'controladorCambiarEstadoPaquetes',
      controllerAs: 'vm'
    })

    .state('notificarEstadoPaquetes', {
      url: '/notificarEstadoPaquetes',
      templateUrl: './components/notificarCliente/notificarEstado.vista.html',
      data:{
        pageTitle: 'Editar paquetes | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/paquetes/registrarPaquetes/paquetes.controlador.js')
        }]
      },
      controller: 'controladorPaquetes',
      controllerAs: 'vm'
    })

    .state('casillero', {
      url: '/casillero',
      templateUrl: './components/casillero/casillero.vista.html',
      data:{
        pageTitle: 'Mi casillero | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/casillero/casillero.controlador.js')
        }]
      },
      controller: 'controladorCasillero',
      controllerAs: 'vm'
    })

    .state('consultarBitacora', {
      url: '/consultarBitacora',
      templateUrl: './components/consultarBitacora/consultarBitacora.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/consultarBitacora/consultarBitacora.controlador.js')
        }]
      },
      controller:'controladorBitacora',
      controllerAs:'vm'
    })
    
    .state('rankingTipoDeProductosProductos', {
      url: '/rankingTipoDeProductosProductos',
      templateUrl: './components/rankingProductos/ranking.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/rankingProductos/ranking.controlador.js')
        }]
      },
      controller:'controladorRanking',
      controllerAs:'vm'
    })

    .state('modificarTipoProducto', {
      url: '/modificarTipoProducto',
      templateUrl: './components/tipoDeProducto/modificarTipoProducto.vista.html',
      params:{
        nombreTipoProducto:''
      },
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/tipoDeProducto/modificarTipoProducto.controlador.js')
        }]
      },
      controller:'controladorModProducto',
      controllerAs:'vm'
    })

    .state('registroTipoProducto', {
      url: '/registrarTipoProducto',
      templateUrl: './components/tipoDeProducto/tipoProducto.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/tipoDeProducto/tipoProducto.controlador.js')
        }]
      },
      controller:'controladorProductos',
      controllerAs:'vm'
    })

    .state('ListaTipoProducto', {
      url: '/ListaTipoProducto',
      templateUrl: './components/tipoDeProducto/listaTipoProductos.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/tipoDeProducto/tipoProducto.controlador.js')
        }]
      },
      controller:'controladorProductos',
      controllerAs:'vm'
    })
    
    .state('listaProvincia', {
      url: '/listaProvincia',
      templateUrl: './components/provincia/listaProvincia.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/provincia/provincia.controlador.js')
        }]
      },
      controller:'controladorProvincia',
      controllerAs:'vm'
    })

    .state('registroProvincia', {
      url: '/registrarProvincia',
      templateUrl: './components/provincia/provincia.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/provincia/provincia.controlador.js')
        }]
      },
      controller:'controladorProvincia',
      controllerAs:'vm'
    })
    .state('registroCanton', {
      url: '/registrarCanton',
      templateUrl: './components/canton/canton.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/canton/canton.controlador.js')
        }]
      },
      controller:'controladorCanton',
      controllerAs:'vm'
    })

    .state('listaCantones', {
      url: '/listaCantones',
      templateUrl: './components/canton/listaCanton.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/canton/listaCanton.vista.html')
        }]
      },
      controller:'controladorCanton',
      controllerAs:'vm'
    })

    .state('listaCourier', {
      url: '/listaCourier',
      templateUrl: './components/courier/listaCourier.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/courier/courier.controlador.js')
        }]
      },
      controller:'controladorCourier',
      controllerAs:'vm'
    })

  .state('registroCourier', {
    url: '/registrarCourier',
    templateUrl: './components/courier/courier.vista.html',
    resolve:{
      load: ['$ocLazyLoad', ($ocLazyLoad) => {
        return $ocLazyLoad.load('./components/courier/courier.controlador.js')
      }]
    },
    controller:'controladorCourier',
    controllerAs:'vm'
  })

    .state('contrasenna', {
      url: '/contrasenna',
      templateUrl: './components/contrasenna/contrasenna.vista.html',
      data:{
        pageTitle: 'Mi contraseña| Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/contrasenna/contrasenna.controlador.jss')
        }]
      },
      controller: 'controladorContrasenna',
      controllerAs: 'vm'
    })
  

    $urlRouterProvider.otherwise('/');
  }
})();