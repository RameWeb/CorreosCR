class Sucursales{
  constructor(pProvincia, pCanton, pDistrito, pDireccion, pTelefono, pidSucursal, pEstado){
    this.provincia = pProvincia;
    this.canton = pCanton;
    this.distrito = pDistrito;
    this.direccion = pDireccion;
    this.telefono = pTelefono;
    this.idSucursal = pidSucursal;
    this.estadoSucursal = pEstado;
  }
}

class Prealertas{
  constructor(pTracking, pUrl, pTipoProducto, pValor, pPeso, pCourier){
    this.tracking = pTracking;
    this.url = pUrl;
    this.tipoProducto = pTipoProducto;
    this.valor = pValor;
    this.peso = pPeso;
    this.courier = pCourier;
  }
}

class ConveniosClientes{
  constructor(pServicio, pCliente, pDireccion, pidConvenio){
    this.servicio = pServicio;
    this.cliente = pCliente;
    this.direccion = pDireccion;
    this.idConvenio = pidConvenio;
  }
}