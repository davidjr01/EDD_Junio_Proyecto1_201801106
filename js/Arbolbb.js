export{Arbolbb}
class Nodo{
    constructor(dpi,nombre,correo,telefono,direccion,biografia){
        this.dpi = dpi;
        this.nombre = nombre;
        this.correo=correo;
        this.telefono=telefono;
        this.direccion=direccion;
        this.biografia=biografia;
        this.rama_izquierda = null;
        this.rama_derecha = null;
    }

    textoGraphviz(){
        if(this.rama_izquierda == null && this.rama_derecha == null){
            let tc=this.nombre+"";
            tc=tc.replace(" ","_")
            return tc;
        }
        else{
            var texto = "";
            if(this.rama_izquierda !=null){
                let tc=this.nombre+"";
                tc=tc.replace(" ","_")
                texto  += tc +"->"+ this.rama_izquierda. textoGraphviz()+"\n";
            }
            if(this.rama_derecha!=null){
                let tc=this.nombre+"";
                tc=tc.replace(" ","_")
                texto += tc+"->"+this.rama_derecha. textoGraphviz()+"\n";
            }
            return texto;
        }
    }

}
        
class Arbolbb{
    constructor(){
        this.raiz = null;
        this.tamañ0 = null;
        this. datogeneral="";
    }
    Insertar(dpi,nombre,correo,telefono,direccion,biografia){
        this.raiz = this.recorrer_insert(dpi,nombre,correo,telefono,direccion,biografia, this.raiz);
        this.tamaño+=1;
    }
    recorrer_insert(dpi,nombre,correo,telefono,direccion,biografia,raiz){
        if (raiz == null){
            var nodos =new Nodo(dpi,nombre,correo,telefono,direccion,biografia);
            return nodos;
        }
        else if (nombre==raiz.nombre){     
        }
        else{
            if (nombre < raiz.nombre){
                raiz.rama_izquierda = this.recorrer_insert(dpi,nombre,correo,telefono,direccion,biografia,raiz.rama_izquierda);
            }
            else{
                raiz.rama_derecha = this.recorrer_insert(dpi,nombre,correo,telefono,direccion,biografia,raiz.rama_derecha);
            }
        }
        return raiz;
    }

    recorrer_inorden(nodo){
        if (nodo.rama_izquierda!=null){
            this.recorrer_inorden(nodo.rama_izquierda); 
        }
        console.log(nodo.nombre);//aca salen los nodos
        if (nodo.rama_derecha!=null){
            this.recorrer_inorden(nodo.rama_derecha); 
        }    
        return 0;
    }

    Inorden(){
        this.recorrer_inorden(this.raiz);
    }
    
    recorrer_inorden2(nodo){
        if (nodo.rama_izquierda!=null){
            this.recorrer_inorden2(nodo.rama_izquierda); 
        }
        
        var daux="";
        var daux2="";
        var daux3="";
        var daux4="";
        console.log(nodo.nombre);//aca salen los nodos
        daux=`<div class="blocks">
<div class="thumb-holder"> <img src="img/autores.png"  class="thumb" />  </div>
<br>
<br>
<br>
<br>
<br>
<br>
<h2 class="customs">`+nodo.nombre+"</h2>\n";
            daux2="<h5 class=\"custom2\">Telefono:  "+nodo.telefono+"</h5>\n";
            daux3="<h5 class=\"custom2\">Correo:  "+nodo.correo+"</h5>\n";
            daux4="<p class=\"thumb-text\"> " + nodo.biografia+ "</p> \n </div> \n\n";
            this.datogeneral+=daux+daux2+daux3+daux4;
        if (nodo.rama_derecha!=null){
            this.recorrer_inorden2(nodo.rama_derecha); 
        }    
        return 0;
    }

    ObtenerHTML(){
        this.datogeneral="";
        this.recorrer_inorden2(this.raiz);
        console.log(this.datogeneral);
        return this.datogeneral;
    }
    

    Graficar() {
        var texto ="digraph G{\n"
               +"\n"
               +"node [shape = circle]\n"
               +"node [stile = filled]\n"
               +"node [fillcolor =\" #EEEEE\"]\n"
               +"node [color =\" green\"]\n"
               +"edge[color =\" #31CEF0\"]\n";
        if(this.raiz !=null){
            texto+=this.raiz.textoGraphviz();
        }
        texto+= "\n}";
        //console.log(texto);
        d3.select("#EAR").graphviz()
                .width (1500)
                .height(1000)
                .renderDot(texto);
    }

    
        
}