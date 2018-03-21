class Convenios{
  constructor(pNombreInstitucion, pTipo, pTiempo, pCosto, pidConvenios){
    this.nombreInstitucion = pNombreInstitucion;
    this.tipo = pTipo;
    this.tiempo = pTiempo;
    this.costo = pCosto;
    this.idConvenios = pidConvenios;
  }
}

class Paquetes{
  constructor(pTracking, pNombre, pPeso, pValor, pEstado, pidPaquetes){
    this.tracking = pTracking;
    this.nombre = pNombre;
    this.peso = pPeso;
    this.valor = pValor;
    this.estado = pEstado;
    this.idPaquetes = pidPaquetes;
    this.repartidor = [];
  }
}

class Casillero{
  constructor(pidRandom){
    this.idRandom = pidRandom;
    
  }
}
