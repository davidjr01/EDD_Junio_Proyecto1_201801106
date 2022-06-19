# Lista enlazada circular (sll) - Circular linked list (sll)

class Circular_Linked_List:
    class _Nodo:
        def __init__(self, valor):
            self.valor = valor
            self.nodo_siguiente = None
    def __init__(self):
        self.cabeza = None
        self.cola = None
        self.tamaño = 0
    def __str__(self):
        # Muestra los elementos de la linkedlist
        array = []
        nodo_actual = self.cabeza
        pivote = True
        contador = self.tamaño
        while contador != 0:
            if pivote != False or nodo_actual != self.cabeza:
                array.append(nodo_actual.valor)
                nodo_actual = nodo_actual.nodo_siguiente
                pivote = False
                contador -= 1
            else:
                break
        return str(array) + " Tamaño: " + str(self.tamaño)
    def prepend(self, valor):
        # Agrega un elemento al principio de la linkedlist
        nuevo_nodo = self._Nodo(valor)
        if self.cabeza == None and self.cola == None:
            self.cabeza = nuevo_nodo
            self.cola = nuevo_nodo
        else:
            nuevo_nodo.nodo_siguiente = self.cabeza
            self.cola.nodo_siguiente = nuevo_nodo
            self.cabeza = nuevo_nodo
        self.tamaño += 1
    def append(self, valor):
        # Agrega un elemento al final de la linkedlist
        nuevo_nodo = self._Nodo(valor)
        if self.cabeza == None and self.cola == None:
            self.cabeza = nuevo_nodo
            self.cola = nuevo_nodo
        else:
            self.cola.nodo_siguiente = nuevo_nodo
            nuevo_nodo.nodo_siguiente = self.cabeza
            self.cola = nuevo_nodo
        self.tamaño += 1
    def shift(self):
        # Saca el primer elemento de la linkedlist
        if self.tamaño == 0:
            self.cabeza = None
            self.cola = None
        else:
            nodo_eliminado = self.cabeza
            self.cabeza = nodo_eliminado.nodo_siguiente
            self.cola.nodo_siguiente = self.cabeza
            nodo_eliminado.nodo_siguiente = None
            self.tamaño -= 1
            return print(nodo_eliminado.valor)
    def pop(self):
        # Saca el ultimo elemento de la linkedlist
        if self.tamaño == 0:
            self.cabeza = None
            self.cola = None
        else:
            nodo_actual = self.cabeza
            nueva_cola = nodo_actual
            contador = self.tamaño
            while contador != 0:
                if nodo_actual.nodo_siguiente != self.cabeza:
                    nueva_cola = nodo_actual
                    nodo_actual = nodo_actual.nodo_siguiente
                else:
                    break
            self.cola = nueva_cola
            self.cola.nodo_siguiente = self.cabeza
            self.tamaño -= 1
            return print(nodo_actual.valor)
    def get(self, indice):
        # Obtiene un nodo dado un indice
        if indice == self.tamaño - 1:
            print(self.cola.valor)
            return self.cola
        elif indice == 0:
            print(self.cabeza.valor)
            return self.cabeza
        elif not (indice >= self.tamaño or indice < 0):
            nodo_actual = self.cabeza
            contador = 0
            while contador != indice:
                nodo_actual = nodo_actual.nodo_siguiente
                contador  += 1
            print(nodo_actual.valor)
            return nodo_actual
        else:
            return None
    def update(self,indice, valor):
        # Cambia el valor de un nodo dado un indice
        nodo_objetivo = self.get(indice)
        if nodo_objetivo != None:
            nodo_objetivo.valor = valor
        else:
            return None
    def insert(self, indice, valor):
        # Agrega un elemento en donde sea en la linkedlist dado el indice
        if indice == self.tamaño - 1:
            return self.append(valor)
        elif not (indice >= self.tamaño or indice < 0):
            nuevo_nodo = self._Nodo(valor)
            nodos_anteriores = self.get(indice)
            nodos_siguientes = nodos_anteriores.nodo_siguiente
            nodos_anteriores.nodo_siguiente = nuevo_nodo
            nuevo_nodo.nodo_siguiente = nodos_siguientes
            self.tamaño += 1
        else:
            return None
    def remove(self, indice):
        # Saca un elemento de donde sea de la linkedlist dado el indice
        if indice == 0:
            return self.shift()
        elif indice == self.tamaño - 1:
            return self.pop()
        elif not (indice >= self.tamaño or indice < 0):
            nodos_anteriores = self.get(indice - 1)
            nodo_removido = nodos_anteriores.nodo_siguiente
            nodos_anteriores.nodo_siguiente = nodo_removido.nodo_siguiente
            nodo_removido.nodo_siguiente = None
            self.tamaño -= 1
            return nodo_removido
        else:
            return None
    def reverse(self):
        # Revierte la linkedlist
        nodos_revertidos = None
        nodo_actual = self.cabeza
        self.cola = nodo_actual
        pivote = True
        contador = self.tamaño
        while contador != 0:
            if pivote != False or nodo_actual != self.cabeza:
                nodo_siguiente = nodo_actual.nodo_siguiente
                nodo_actual.nodo_siguiente = nodos_revertidos
                nodos_revertidos = nodo_actual
                nodo_actual = nodo_siguiente
                pivote = False
                contador -= 1
            else:
                break
        self.cabeza = nodos_revertidos
        self.cola.nodo_siguiente = self.cabeza

cll = Circular_Linked_List()