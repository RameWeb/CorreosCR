class Convenios{
  constructor(pNombreInstitucion, pTipo, pTiempo, pCosto){
    this.nombreInstitucion = pNombreInstitucion;
    this.tipo = pTipo;
    this.tiempo = pTiempo;
    this.costo = pCosto;
  }
}

class Paquetes{
  constructor(pTracking, pNombre, pPeso, pValor){
    this.tracking = pTracking;
    this.nombre = pNombre;
    this.peso = pPeso;
    this.valor = pValor;
    this.repartidor = [];
  }
}