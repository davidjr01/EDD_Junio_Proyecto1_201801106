import{Nodo,nCabecera} from './Nodo.js'
import { listaCabeceras } from './Cabecera.js'

class MatrizD{
    constructor(){
        this.CFilas=new listaCabeceras();
        this.CColumnas=new listaCabeceras();
    }
    append(fila,columna,dato){
        var nuevo= new Nodo(fila,columna,dato);
        var CFila=this.CFilas.getCabecera(fila);
        if (CFila==null){
            var CFila=new nCabecera(fila);
            CFila.accesoNodo=nuevo;
            this.CFilas.appendCabecera(CFila);
        }
        else{
            if (nuevo.columna<CFila.accesoNodo.columna){
                nuevo.derecha=CFila.accesoNodo;
                CFila.accesoNodo.izquierda=nuevo;
                CFila.accesoNodo=nuevo;
            }
            else{
                var actual=CFila.accesoNodo;
                while(actual.derecha!=null){
                    if(nuevo.columna<actual.derecha.columna){
                        nuevo.derecha=actual.derecha;
                        actual.derecha.izquierda=nuevo;
                        nuevo.izquierda=actual;
                        actual.derecha=nuevo;
                        break
                    }
                    actual=actual.derecha;
                }
                if(actual.derecha==null){
                    actual.derecha=nuevo;
                    nuevo.iquierda=actual;
                }
                
            }
        }
    }

}