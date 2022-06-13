class Nodo{
    constructor(valor){
        this.valor=valor;
        this.siguiente=null;
    }
}
class ListaSimple{
    constructor(){
        this.cabeza=null;
        this.tamaño=0;
    }
    preagregar(valor){
        var Nnodo =new Nodo(valor);
        if (this.cabeza==null){
            this.cabeza==Nnodo;
        }
        else{
            nNodo.siguiente=this.cabeza;
            this.cabeza=nNodo;

        }
        this.tamaño+=1;
    }
    agregar(valor){
        var Nnodo=new Nodo(valor);
        if (this.cabeza==null){
            this.cabeza=Nnodo;
        }else{
            var Naux=this.cabeza;
            while(Naux.siguiente!=null){
                Naux=Naux.siguiente;
            }
            Naux.siguiente=Nnodo;   
        }
    }
    shift(){ //elimina el primer dato de la lista
        if (this.cabeza==null){
        }else{
             var Neliminado=this.cabeza;
             this.cabeza=Neliminado.siguiente;
             Neliminado.siguiente=null;
        }
    }

    pop(){//elimina el ultimo dato
        if (this.cabeza==null){
        }else{
            var Nactual=ths.cabeza;
            var Ncola=Nactual;
            while(Nactual.siguiente!=null){
                Ncola=Nactual;
                Nactual=Nactual.siguiente;
            }
            Ncola.siguiente=null;
        }

    }
    
    Mostrar(){
        if(this.cabeza == null){
            console.log("La lista se encuentra vacia");
        }
        else{
            var  Naux =this.cabeza;
            let c=0;
            while(Naux != null){
                console.log(Naux.valor);
                Naux = Naux.siguiente;
            }
        }
    }

    graficar(){
        var cGeneral=`digraph G {
            node[shape = box,width=0.7,height=0.7,fillcolor="white" color="black"  ];
            `;
        var cNodos="";
        var Cconecciones="";
        let cont=0;
        if(this.cabeza == null){
        }
        else{
            var  Nactual = this.cabeza;
            let c=0;
            while(Nactual != null){
                cont+=1;
                cNodos+="Nodo"+cont+'[label="'+Nactual.valor+'"]\n';
                if(Nactual.siguiente!=null){
                    Cconecciones+="Nodo"+cont+"->";
                }else{
                    Cconecciones+="Nodo"+cont;
                }
                Nactual = Nactual.siguiente;
            }
            cGeneral+=cNodos+"\n{rank = same;\n"+Cconecciones+"\n}\n}"
            console.log(cGeneral)
            d3.select("#dss").graphviz()
                .width (5000)
                .height(200)
                .renderDot(cGeneral);
        }
    }
}
var l=new ListaSimple();
l.agregar(2);
l.agregar(3);
l.agregar(4);
l.agregar(5);
l.agregar(9);
l.graficar()
