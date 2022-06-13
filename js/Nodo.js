export {Nodo}
export{nCabecera}

class Nodo{
    constructor(fila,columna,dato){
        this.fila=fila;
        this.columna=columna;
        this.dato=dato;
        this.derecha=null;
        this.iquierda=null;
        this.abajo=null;
        this.arriba=null;
    }
}
class nCabecera{
    constructor(id){
        this.id=id;
        this.siguiente=null;
        this.anterior=null;
        this.accesoNodo=null;
    }
}