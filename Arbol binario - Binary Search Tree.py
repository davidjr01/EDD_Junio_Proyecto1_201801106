class binary_search_tree:
    class Nodo:
        def __init__(self, valor):
            self.valor = valor
            self.rama_izquierda = None
            self.rama_derecha = None
    def __init__(self):
        self.raiz = None
        self.tamañ0 = None
    def insert(self, valor):
        nuevo_nodo = self.Nodo(valor)
        if self.raiz == None:
            self.raiz = nuevo_nodo
        else:
            def recorrer(valor, nodo):
                if valor == nodo.valor:
                    return "El elemento ya existe"
                elif valor < nodo.valor:
                    if nodo.rama_izquierda == None:
                        nodo.rama_izquierda = nuevo_nodo
                        return True
                    else:
                        return recorrer(valor, nodo.rama_izquierda)
                elif valor > nodo.valor:
                    if nodo.rama_derecha == None:
                        nodo.rama_derecha = nuevo_nodo
                        return True
                    else:
                        return recorrer(valor, nodo.rama_derecha)
            recorrer(valor, self.raiz)
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
        return print(nodo_encontrado)
    
    def preorder(self):
        contenedor = []
        def recorrer(nodo):
            contenedor.append(nodo.valor)
            if nodo.rama_izquierda != None:
                recorrer(nodo.rama_izquierda)
            if nodo.rama_derecha != None:
                recorrer(nodo.rama_derecha)
        recorrer(self.raiz)
        return print(contenedor)
    def inorder(self):
        contenedor = []
        def recorrer(nodo):
            if nodo.rama_izquierda != None:
                recorrer(nodo.rama_izquierda)
            contenedor.append(nodo.valor)
            if nodo.rama_derecha != None:
                recorrer(nodo.rama_derecha)
        recorrer(self.raiz)
        return print(contenedor)
    def postorder(self):
        contenedor = []
        def recorrer(nodo):
            if nodo.rama_izquierda != None:
                recorrer(nodo.rama_izquierda)
            if nodo.rama_derecha != None:
                recorrer(nodo.rama_derecha)
            contenedor.append(nodo.valor)
        recorrer(self.raiz)
        return print(contenedor)
    def breadth_first_search(self):
        contenedor_1 = [self.raiz]
        contenedor_2 = [self.raiz.valor]
        while len(contenedor_1) != 0:
            nodo = contenedor_1[0]
            if nodo.rama_izquierda != None:
                contenedor_1.append(nodo.rama_izquierda)
                contenedor_2.append(nodo.rama_izquierda.valor)
            if nodo.rama_derecha != None:
                contenedor_1.append(nodo.rama_derecha)
                contenedor_2.append(nodo.rama_derecha.valor)
            contenedor_1.pop(0)
        return print(contenedor_2)

bst = binary_search_tree()
bst.insert("as")
bst.insert("aa")
bst.insert("ac")
bst.insert("ab")
bst.insert("ad")
bst.inorder()