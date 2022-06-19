class Nodo{
    constructor( valor){
            this.valor = valor;
            this.rama_izquierda = null;
            this.rama_derecha = null;
    }

}
        
class Arbolbb{
    constructor(){
        this.raiz = null;
        this.tamañ0 = null;
    }
    insertar(valor){
        var nuevo_nodo = new Nodo(valor)
        if (this.raiz == null){
            this.raiz = nuevo_nodo;
        }
        else{
            recorrer(valor, nodo);
                if (valor == nodo.valor){
                    return "El elemento ya existe";
                }
                else if (valor < nodo.valor){
                    if (nodo.rama_izquierda == null){
                        nodo.rama_izquierda = nuevo_nodo;
                        return true;
                    }
                    else{
                        return recorrer(valor, nodo.rama_izquierda);
                    }
                }
                else if ( valor > nodo.valor){
                    if (nodo.rama_derecha == null){
                        nodo.rama_derecha = nuevo_nodo;
                        return true;
                    }
                    else{
                        return recorrer(valor, nodo.rama_derecha);
                    }
                }
            recorrer(valor, this.raiz);
        }
    }
    def find(self, valor):
        def recorrer(valor, nodo):
            if valor == nodo.valor:
                return nodo.valor
            elif valor < nodo.valor:
                if nodo.rama_izquierda == None:
                    return "No existe el elemento buscado"
                else:
                    return recorrer(valor, nodo.rama_izquierda)
            else:
                if nodo.rama_derecha == None:
                    return "No existe el elemento buscado"
                else:
                    return recorrer(valor, nodo.rama_derecha)
        nodo_encontrado = recorrer(valor, self.raiz)
        return print(nodo_encontrado);
}