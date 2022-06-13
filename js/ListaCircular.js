
class Nodo{
    constructor(valor){
        this.valor=valor;
        this.anterior=null;
        this.siguiente=null;       
    }
}
class ListaCircular{
    constructor(){
        this.cabeza=null;
        this.cola=null;
        this.tamaño=0;
    }
    agregar(valor){
        var Nnodo=new Nodo(valor);
        if ((this.cabeza==null)&&(this.cola==null)){
            this.cabeza=Nnodo;
            this.cola=Nnodo;
        }else{
            this.cola.siguiente=Nnodo;
            Nnodo.anterior=this.cola;
            Nnodo.siguiente=this.cabeza;
            this.cabeza.anterior=Nnodo;
            this.cola=Nnodo;

        }
        this.tamaño +=1;

    }
    mostrar(){
        var cGeneral=`digraph G {
            node[shape = box,width=0.7,height=0.7,fillcolor="white" color="black"  ];
            graph [ nodesep="0.5"];
            edge[dir="both"];
            `;
        var cNodos="";
        var cConecciones="";
        let cont=0;
        let Nactual=this.cabeza;
        let pivote=true;
        let contador=this.tamaño;
        while(contador!=0){
            if ((pivote!=false)||(Nactual!=this.cabeza)){
                cont+=1;
                cNodos+="Nodo"+cont+'[label="'+Nactual.valor+'"]\n';
                if(Nactual.siguiente==this.cabeza){
                    cConecciones+="Nodo"+cont+"->"+"Nodo1\n";
                }else{
                   
                    cConecciones+="Nodo"+cont+"->";
                }
                Nactual=Nactual.siguiente;
                pivote=false;
                contador-=1;

            }
            else{
                break;
            }
        }
        cGeneral+=cNodos+"\n{rank = same;\n"+cConecciones+"\n}\n}"
        d3.select("#dss").graphviz()
            .width (5000)
            .height(200)
            .renderDot(cGeneral);

    }

    mostrar3(){
        var cGeneral=`digraph G {
            node[shape = box,width=0.7,height=0.7,fillcolor="white" color="black"  ];
            graph [ nodesep="0.5"];
            edge[dir="both"];
            `;
        var cNodos="";
        var cConecciones="";
        let cont=0;
        let Nactual=this.cabeza;
        let pivote=true;
        let contador=0;
        while(contador!=2){
            cont+=1;
            if(Nactual==this.cola){
                contador+=1
            }
            cNodos+="Nodo"+cont+'[label="'+Nactual.valor+'"]\n';
            if(contador==2){
                cConecciones+="Nodo"+cont+"->"+"Nodo1\n";
                break
            }else{     
                 cConecciones+="Nodo"+cont+"->";
            }
            Nactual=Nactual.siguiente;

          

        }
           
        cGeneral+=cNodos+"\n{rank = same;\n"+cConecciones+"\n}\n}"
        console.log(cGeneral)
        d3.select("#dss3").graphviz()
            .width (2000)
            .height(200)
            .renderDot(cGeneral);

    }

    mostrar2(){
        var cGeneral=`digraph G {
            node[shape = box,width=0.7,height=0.7,fillcolor="white" color="black"  ];
            graph [ nodesep="0.5"];
            edge[dir="both"];
            `;
        var cNodos="";
        var cConecciones="";
        let cont=0;
        let Nactual=this.cola;
        let pivote=true;
        let contador=this.tamaño;
        while(pivote!=false){
            if(Nactual.valor==this.cabeza.valor){
                console.log(Nactual.valor);
                cont+=1;
                cNodos+="Nodo"+cont+'[label="'+Nactual.valor+'"]\n';
                cConecciones+="Nodo"+cont+"->"+"Nodo1\n";
                pivote=false;
                break;
            }
            else{
                cont=cont+1;
                cNodos+="Nodo"+cont+'[label="'+Nactual.valor+'"]\n';
                cConecciones+="Nodo"+cont+"->";
                Nactual=Nactual.anterior;
               
            }
        }
        cGeneral+=cNodos+"\n{rank = same;\n"+cConecciones+"\n}\n}"
        d3.select("#dss2").graphviz()
            .width (1500)
            .height(200)
            .renderDot(cGeneral);

    }

}
var df=new ListaCircular();
df.agregar(2);
df.agregar(0);
df.agregar(1);
df.agregar(8);
df.agregar(0);
df.agregar(1);
df.agregar(1);
df.agregar(0);
df.agregar(6);
df.mostrar()
df.mostrar2()
df.mostrar3()
