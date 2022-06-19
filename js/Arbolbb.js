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
        console.log(texto);
    }

    
        
}