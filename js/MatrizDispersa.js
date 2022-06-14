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

    graficar(){
        var controlx=0;
        var CFila=new nCabecera();
        var CColumna=new nCabecera();
        CFila = this.CFilas.primero;
        var resultado="";
        var fanterior=0;
        resultado+=`digraph G {\n
        node[shape = box,width=0.7,height=0.7,fillcolor=\"white\" color=\"black\" style=\"filled\"];\n
        edge[style = \"bold\"];\n
        INICIO[label=\"INICIO\",group=0]
        rankdir=LR;\n
        `;
        //________________CabeceraX__________________
        
        var conecciones2="";
        var rankx="";
        var primero="";
        var cprimerox=0;
        var nodosyy="";
        var nodosyy2="";
        var conecy="";
        var conecy2="";
        var nombrey="INICIO";
        var nodoof="";
        while (CFila != null){
            cprimerox+=1;
            var actual=new Nodo();
            actual = CFila.accesoNodo;
            var m="X="+actual.fila;
            var m22="X"+actual.fila;
            var nfila=actual.fila;
            var nombrex="X"+actual.fila;
            if(cprimerox==1){
                conecciones2+= primero="INICIO->";
            }
            var m2=nombrex+"[label=\""+m+"\",group=0"+"]\n";
            resultado += m2;  
            conecy=m22+",";
            nodosyy=m22+"->";
            if(CFila.siguiente!=null){
   
                conecciones2 += nombrex+"->";  
         
            }else if (CFila.siguiente==null){
                conecciones2 += nombrex+"\n";
            }
            var primerony=0;
            while (actual != null){
                primerony+=1;
                
                var nombrenodo="n"+actual.fila+"c"+actual.columna;
                var y="\"" +actual.dato+"\"";
                var nodo=nombrenodo+"[label= "+ y+"group="+ (actual.columna +1 )+ ",style=\"filled\"]";
                nodoof += nodo+"\n";
                
                nombrex=nombrenodo;
                
                
                if(actual.derecha!=null){
                    
                    conecy+=nombrenodo+",";
                    nodosyy+=nombrenodo+"->";
                }else{
                     conecy+=nombrenodo;
                     nodosyy+=nombrenodo;
                }
          
                
                
                actual = actual.derecha;
            }
            conecy2+="{rank = same;"+conecy+"};"+"\n";
            nodosyy2+=nodosyy+"\n";
            
            CFila = CFila.siguiente;
        }
        resultado+=nodoof;
        resultado+=conecciones2;
        resultado+=conecy2;
        resultado+="edge[ dir=\"both\"]; \n";
        resultado+=nodosyy2;
        resultado+="edge[dir=\"forward\"]; \n";
        resultado+="\n\n\n";


        //______________columnas de Y ___________________________________________
        CColumna = this.CColumnas.primero;
        var conecciones="";
        var rnky="";
        var rnky2="";
        var primeroy=0;
        while (CColumna != null){
            primeroy+=1;
            var actual = CColumna.accesoNodo;
            var nny="Y"+actual.columna;
            var label="\"Y=" + actual.columna+"\"" ;
            var nodoy=nny+ "[label="+label+",group="+(actual.columna+1)+"]";
            resultado += nodoy+"\n";
            if (primeroy==1){
                conecciones+=nombrey+"->";
                rnky+=nombrey+",";
            }
            if (CColumna.siguiente!=null){
            conecciones+=nny+"->";
            rnky+=nny+",";
            }
            else{
                conecciones+=nny+"\n";
                rnky+=nny;
            }
           
            nombrey=nny;
            
            CColumna = CColumna.siguiente;
        }
        resultado+="{rank = same;"+rnky+"};\n";
        resultado+=conecciones;
        resultado+="edge[ dir=\"both\"]; \n";
        
        //_________________unidendo_nodos_en_Y_________________
        CColumna = this.CColumnas.primero;
        while (CColumna != null){
            var primerony=0;
            var actual = CColumna.accesoNodo;
            var ncolumna="Y"+actual.columna;
            var rank=ncolumna+"->";
            while (actual != null){
                var nf="n"+actual.fila+"c"+actual.columna;
                if(actual.abajo!=null){
                   rank+=nf+"->"; 
                }else{
                    rank+=nf;
                }
                
                ncolumna=nf;
                actual = actual.abajo;
            }
            
            resultado+=rank+"\n";

            CColumna = CColumna.siguiente;
        }
        //___________________________________________________
        resultado+="}";
        console.log(resultado);
        d3.select("#dss").graphviz()
                .width (5000)
                .height(200)
                .renderDot(resultado);
     


    }

}
var df=new MatrizD();
df.append(1,1,"a");
df.append(2,1,"b");
df.append(4,5,"c");
df.graficar();