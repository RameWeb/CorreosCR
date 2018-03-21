class Sucursales{
  constructor(pProvincia, pCanton, pDistrito, pDireccion, pTelefono, pidSucursal){
    this.provincia = pProvincia;
    this.canton = pCanton;
    this.distrito = pDistrito;
    this.direccion = pDireccion;
    this.telefono = pTelefono;
    this.idSucursal = pidSucursal;
  }
}

class Prealertas{
  constructor(pTracking, pUrl, pTipoProducto, pValor, pPeso, pCourier, pidPrealerta){
    this.tracking = pTracking;
    this.url = pUrl;
    this.tipoProducto = pTipoProducto;
    this.valor = pValor;
    this.peso = pPeso;
    this.courier = pCourier;
    this.idPrealerta = pidPrealerta;
  }
}

class ConveniosClientes{
  constructor(pTipo, pCliente, pDireccion){
    this.tipo = pTipo;
    this.cliente = pCliente;
    this.direccion = pDireccion;
  }
}