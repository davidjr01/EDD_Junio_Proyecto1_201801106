export  {listaCabeceras}

class listaCabeceras{
    constructor(primero=null){
        this.primero=primero;
    }
    appendCabecera(nuevo){
        if (this.primero==null){
            this.primero=nuevo;
        }else if (nuevo.id<this.primero.id){
            nuevo.siguiente=this.primero;
            this.primero.anterior=nuevo;
            this.primero=nuevo;
        }
        else{
            var actual=this.primero;
            while(actual.siguiente!=null){
                if(nuevo.id<actual.siguiente.id){
                    nuevo.siguiente=actual.siguiente;
                    actual.siguiente.anterior=nuevo;
                    nuevo.anterior=actual;
                    actual.siguiente=nuevo;
                    break;
                }
                actual=actual.siguiente;
            }
            if(actual.siguiente==null){
                actual.siguiente=nuevo;
                nuevo.anterior=actual;
            }
        }

    }
    getCabecera(id){
        var actual=this.primero;
        while(actual!=null){
            if(actual.id==id){
                return actual;
            }
            actual=actual.siguiente;
        }
        return null;
    }
}