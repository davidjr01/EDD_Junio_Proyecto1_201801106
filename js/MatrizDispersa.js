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



        var CColumna=this.CColumnas.getCabecera(columna);
        if (CColumna==null){
            var CColumna=new nCabecera(columna);
            CColumna.accesoNodo=nuevo;
            this.CColumnas.appendCabecera(CColumna);
        }
        else{
            if (nuevo.fila<CColumna.accesoNodo.fila){
                nuevo.abajo=CColumna.accesoNodo;
                CColumna.accesoNodo.arriba=nuevo;
                CColumna.accesoNodo=nuevo;
            }
            else{
                var actual=CColumna.accesoNodo;
                while(actual.abajo!=null){
                    if(nuevo.fila<actual.abajo.fila){
                        nuevo.dabajo=actual.abajo;
                        actual.abajo.arriba=nuevo;
                        nuevo.arriba=actual;
                        actual.abajo=nuevo;
                        break
                    }
                    actual=actual.abajo;
                }
                if(actual.abajo==null){
                    actual.abajo=nuevo;
                    nuevo.arriba=actual;
                }
                
            }
        }
    }

}
var df=new MatrizD();
df.append(1,1,"2");