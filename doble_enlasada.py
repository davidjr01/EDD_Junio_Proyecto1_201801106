from graphviz import Digraph
class Double_Linked_List:
    class _Nodo:
        def __init__(self, nombre,valor,telefono):
            self.valor = valor
            self.nombre =nombre
            self.telefono = telefono
            self.nodo_anterior = None
            self.nodo_siguiente = None

    def __init__(self):
        self.cabeza = None
        self.cola = None
        self.tamaño = 0
    
    def mostrar(self):
        nodo_actual = self.cabeza
        g = Digraph('G', filename='Grafica')
        g.attr(bgcolor='green', fontcolor='white')
        with g.subgraph(name='cluster1') as c:
            c.attr(fillcolor='blue:cyan', label='Agenda', fontcolor='white',style='filled', gradientangle='270')
            c.attr('node', shape='box', fillcolor='red:yellow',style='filled', gradientangle='90')
            cont=0
            while nodo_actual.nodo_siguiente != None:
                pnombre=nodo_actual.nombre
                nodo_actual = nodo_actual.nodo_siguiente
                n1=str(pnombre)
                n2=str(nodo_actual)
                c.edges([(n1, n2)])

        g.view()
    
    def obtenerDatos(self,indice):
        # Obtiene un nodo dado un indice
        
        if indice == self.tamaño - 1:
           
            return str(self.cola.nombre + "\n" +self.cola.valor+ "\n"+self.cola.telefono)
        elif indice == 0:
           
            return  str(self.cabeza.nombre + "\n" + self.cabeza.valor+ "\n"+self.cabeza.telefono)
        elif not (indice >= self.tamaño or indice < 0):
            indice_balanceado = int(self.tamaño / 2)
            if indice <= indice_balanceado:
                nodo_actual = self.cabeza
                contador = 0
                while contador != indice:
                    nodo_actual = nodo_actual.nodo_siguiente
                    contador += 1
            
                return str( nodo_actual.nombre + "\n" + nodo_actual.valor+ "\n" + nodo_actual.telefono)
            else:
                nodo_actual = self.cola
                contador = self.tamaño - 1
                while contador != indice:
                    nodo_actual = nodo_actual.nodo_anterior
                    contador -= 1
                return str( nodo_actual.nombre1 + "\n" + nodo_actual.valor+ "\n" + nodo_actual.telefono)
        else:
            return None
                



            


    def append(self, nombre,valor,telefono):
        # Agrega un elemento al final de la linkedlist
        nuevo_nodo = self._Nodo(nombre,valor,telefono)
        if self.cabeza == None and self.cola == None:
            self.cabeza = nuevo_nodo
            self.cola = nuevo_nodo
            self.tamaño += 1
            print("El contacto se ha agregado exitosamente")
        else:
            if self.Verificar(telefono)==False:
                self.cola.nodo_siguiente = nuevo_nodo
                self.cola.nodo_siguiente = nuevo_nodo
                self.cola = nuevo_nodo
                self.tamaño += 1
                self.ordenar()
                print("El contacto se ha agregado exitosamente")
            else:
                print("Contacto ya existe")

    def Vacio(self):
        if self.cabeza == None and self.cola == None:
            vacio=True
        else:
            vacio=False
        return vacio
    
    def ordenar(self):
        aux = self.cabeza
        while aux.nodo_siguiente!=None:
            aux2=aux.nodo_siguiente
            while(aux2!=None):
                v1=""
                v2=""
                for i in aux2.valor:
                    v2=i
                    break
                for i in aux.valor:
                    v1=i
                    break
                    
                if ord(v2)<ord(v1):

                    tempn=aux.nombre
                    aux.nombre=aux2.nombre
                    aux2.nombre=tempn

                    temp=aux.valor
                    aux.valor=aux2.valor
                    aux2.valor=temp

                    tempt=aux.telefono
                    aux.telefono=aux2.telefono
                    aux2.telefono=tempt

                aux2=aux2.nodo_siguiente

            aux=aux.nodo_siguiente

            
    def get(self, telefono):
        contro=False
        nodo_actual = self.cabeza
        while nodo_actual.nodo_siguiente != None:
            if nodo_actual.telefono==telefono:
                n=nodo_actual.nombre
                a=nodo_actual.valor
                t=nodo_actual.telefono
                contro=True
                break
            nodo_actual = nodo_actual.nodo_siguiente

        if self.cola.telefono==telefono:
            n=nodo_actual.nombre
            a=nodo_actual.valor
            t=nodo_actual.telefono
            contro=True
        
        if contro==True:
            print( "Nombre: " + n)
            print( "Apellido: " + a)
            print( "Telefono: " + t)
        elif contro==False:
            print( "Numero de contacto no existe ¿desea agregarlo?")
        
        return contro
    
    def Verificar(self, telefono):
        control=False
        nodo_actual = self.cabeza
        while nodo_actual.nodo_siguiente != None:
            if nodo_actual.telefono==telefono:
                control=True
                break
            nodo_actual = nodo_actual.nodo_siguiente
        if self.cola.telefono==telefono:
            control=True
               

        return control


            
dlista = Double_Linked_List()

op=0
while op != 4:
    print("1................Ingresar Nuevo Contacto")
    print("2................Buscar Contacto")
    print("3................Visualizar Agenda")
    print("4................Salir")
    op=int(input())

    if op==1:
        n=input("Ingrese Nombre : ")
        a=input("Ingrese Apellido: ")
        t=input("Ingrese Telefono : ")
        n=n.lower()
        a=a.lower()
        dlista.append(n,a,t) 
    
    if op==2:
        if dlista.Vacio()==False:
            t=input("Ingrese Telefono a buscar : ")
            x=dlista.get(t)
            if x==False:
                r=int(input("1)....Si   2)....No \n" ))
                if r==1:
                    n1=input("Ingrese Nombre : ")
                    a1=input("Ingrese Apellido: ")
                    dlista.append(n1,a1,t)

        else:
            print("Aun no ha Ingresado Contactos")
    
    if op==3:
        g = Digraph('G', filename='Grafica')
        g.attr(bgcolor='green', fontcolor='white')
        with g.subgraph(name='cluster1') as c:
            c.attr(fillcolor='blue', label='Agenda', fontcolor='white',style='filled', gradientangle='270')
            c.attr('node', shape='box', fillcolor='white',style='filled', gradientangle='90')
       

            for i in range(0,dlista.tamaño-1):
                x=dlista.obtenerDatos(i)
                y=dlista.obtenerDatos(i+1)
                x=str (x)
                y=str(y)
              
             


                c.edges([(x, y),(y, x)])
                if (i+1)==dlista.tamaño-1:
                    break


        g.view()
        asf=0


        





