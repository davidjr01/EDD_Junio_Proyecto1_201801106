export {Nodo}
export{nCabecera}

class Nodo{
    constructor(fila,columna,isbn,nombre_autor,nombre_libro,cantidad,paginas,categoria){
        this.fila=fila;
        this.columna=columna;
        this.isbn=isbn;
        this.nombre_autor=nombre_autor;
        this.nombre_libro=nombre_libro;
        this.cantidad=cantidad;
        this.paginas=paginas;
        this.categoria=categoria;
        
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