export{ListaCircular}
import{ListaCCliente} from './ListaCClientes.js'

class Nodo{
    constructor(dpi,nombre,usuario,correo,rol,contrasenia,telefono,lista){
        this.dpi = dpi;
        this.nombre=nombre;
        this.usuario=usuario;
        this.correo=correo;
        this.rol=rol;
        this.contrasenia=contrasenia;
        this.telefono=telefono;
        this.siguiente = null;
        this.lista=lista;
    }

}

class ListaCircular{
    constructor(){
        this.cabeza = null;
        this.cola = null;
        this.tamaño = 0;
        this.lista=new ListaCCliente();

    }
    append( dpi,nombre,usuario,correo,rol,contrasenia,telefono,lista){
        var Nnodo = new Nodo(dpi,nombre,usuario,correo,rol,contrasenia,telefono,lista);
        if ((this.cabeza == null) && (this.cola == null)){
            this.cabeza = Nnodo;
            this.cola = Nnodo;
        }
        else{
            this.cola.siguiente = Nnodo;
            Nnodo.siguiente = this.cabeza
            this.cola = Nnodo;
        }
        this.tamaño += 1;
    }

    Mostrar(){
        var actual = this.cabeza;
        var contador = this.tamaño;
        var cont=0;
        while (contador!=0){
            cont+=1;
            console.log("usuario "+actual.usuario + "   lista:");
            actual.lista.Mostrar();
            actual = actual.siguiente;
            contador -= 1;
        }
    }

    ObtenerHTML(){
        var actual = this.cabeza;
        var contador = this.tamaño;
        var cont=0;
        var datogeneral="";
        var daux="";
        var daux2="";
        var daux3="";
        while (contador!=0){
            cont+=1;
            daux=`<div class="block">
            <div class="thumb-holder"> <img src="img/imagenU.png"  class="thumb" />  </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <h2 class="customs">`+actual.nombre+"</h2>\n";
            daux2="<h5 class=\"custom2\">Telefono:  "+actual.telefono+"</h5>";
            daux3="<p class=\"thumb-text\"></p> \n </div> \n\n";
            datogeneral+=daux+daux2+daux3;
            
            actual = actual.siguiente;
            contador -= 1;
        }
        return datogeneral;
    }
    
    BuscarL(usuario,contrasenia){
        var actual = this.cabeza;
        var contador = this.tamaño;
        var cont=0;
        var pase=false;
        while (contador!=0){
            cont+=1;
            if((usuario==actual.usuario)&&(contrasenia==actual.contrasenia)){
                pase=true;
                break;
            }
            actual = actual.siguiente;
            contador -= 1;
        }
        return pase;
    }

    BuscarRol(usuario){
        var actual = this.cabeza;
        var contador = this.tamaño;
        var cont=0;
        var pase="";
        while (contador!=0){
            cont+=1;
            if(usuario==actual.usuario){
                pase=actual.rol;
                break;
            }
            actual = actual.siguiente;
            contador -= 1;
        }
        return pase;
    }

    Agregar_lista(usuario,valor){
        var actual = this.cabeza;
        var contador = this.tamaño;
        while (contador!=0){
            if(actual.usuario==usuario){
                actual.lista.agregar(valor);
                break;
            }
            actual = actual.siguiente;
            contador -= 1;
        }
    }

    Graficar(){
        var cGeneral=`digraph G {
            node[shape = box,width=0.7,height=0.7,fillcolor="white" color="black"  ];
            graph [ nodesep="0.5"];
            `;
        var nodos2="";
        var cNodos="";
        var cConecciones="";
        let cont=0;
        let Nactual=this.cabeza;
        let pivote=true;
        let contador=this.tamaño;
        while(contador!=0){
            
            cont+=1;
            cNodos+="Nodo"+cont+'[label="'+Nactual.nombre+'"]\n';
            nodos2+=Nactual.lista.graficar2(cont,"Nodo"+cont);
            if(Nactual.siguiente==this.cabeza){
                cConecciones+="Nodo"+cont+"->"+"Nodo1\n";
            }else{
               
                cConecciones+="Nodo"+cont+"->";
            }
            Nactual=Nactual.siguiente;
            pivote=false;
            contador-=1;

            
        }
        cGeneral+=cNodos+"\n{rank = same;\n"+cConecciones+"\n}";
        cGeneral+=nodos2;
        cGeneral+="\n}";
        
        console.log(cGeneral);
        d3.select("#ESLU").graphviz()
                .width (1500)
                .height(600)
                .renderDot(cGeneral);

    }

}