import{MatrizD} from './MatrizDispersa.js'
import{MatrizO} from './MatrizOrtogonal.js'
import{Arbolbb} from './Arbolbb.js'
import { ListaCircular } from './ListaCircularSimple.js';
import{ListaCCliente} from './ListaCClientes.js'
var Bre=document.getElementById("botonRegistro");
var BTCM=document.getElementById("BTCM");
var BTsalir=document.getElementById("Salir");
var BTsalir2=document.getElementById("Salir2");
var BTCarga=document.getElementById("botCargaMasiva");       
var BTVistas=document.getElementById("botVistas");    
var BTCompraL=document.getElementById("BTCISBN");  
var BTCompraL2=document.getElementById("BTCPL");  

var BTCompraLL=document.getElementById("BTCISBN2");  
var BTCompraLL2=document.getElementById("BTCPL2");  

var ContUsuario="";
var isbnLibroMO="";
var isbnLibroMD="";
var cantidadLMO="";
var cantidadLMD="";





var MOrtogonal=new MatrizO();
var MDispersa=new MatrizD();
var Arbol=new Arbolbb();
var LUsuarios=new ListaCircular();

let lsta=new ListaCCliente();
LUsuarios.append(2354168452525,"WIlfred Perez","Wilfred","","Administrador","123","+502 (123) 123-4567",lsta);
LUsuarios.append(2354168452525,"WIlfred Perez","a","","Usuario","a","+502 (123) 123-4567",lsta);


for (let i=1;i<=25;i++){
    for (let j=1;j<=25;j++){
        MOrtogonal.append(i,j,"","","","","","");
    }
}


//MOrtogonal.graficar();

function Registro(){
    var iUsuario=document.getElementById("Usuario").value;
    var ipass=document.getElementById("contraseña").value;
    var verific=LUsuarios.BuscarL(iUsuario,ipass);

    if(verific==true){
        var rol=LUsuarios.BuscarRol(iUsuario);
        if(rol=="Administrador"){
            alert("Bienvenido " + iUsuario);
            ContUsuario=iUsuario;
            document.getElementById('BMenu').style.display='';
            document.getElementById('cargaMasiva').style.display='';
            document.getElementById('VistaAdmin').style.display='none';
            document.getElementById("Usuario").value=""
            document.getElementById("contraseña").value=""
            document.getElementById('Loginghtml').style.display='none';
            document.getElementById('ESMO').style.display='';
            document.getElementById('ESMD').style.display='';
            document.getElementById('divUs').style.display='';
            document.getElementById('divUs2').style.display='';
            document.getElementById('ESLU').style.display='';
            document.getElementById('divAutor').style.display='';
            document.getElementById('DivFondo').style.display='none';
            document.getElementById('divComp').style.display='none';
            document.getElementById('divComp2').style.display='none';
            document.getElementById('ComprarT').style.display='none';
            document.getElementById('ComprarT2').style.display='none';
        }else{
            alert("Bienvenido Cliente" + iUsuario);
            ContUsuario=iUsuario;
            document.getElementById("Usuario").value="";
            document.getElementById("contraseña").value="";
            document.getElementById('DivFondo').style.display='none';
            document.getElementById('Loginghtml').style.display='none';
            document.getElementById('BMenu2').style.display='';
            document.getElementById('LMO').innerHTML=MOrtogonal.ObtenerHTML();
            document.getElementById('LMD').innerHTML=MDispersa.ObtenerHTML();
            document.getElementById('VistaAdmin').style.display='';
            document.getElementById('ComprarT').style.display='';
            document.getElementById('ComprarT2').style.display='';
            document.getElementById('divUs').style.display='none';
            document.getElementById('divUs2').style.display='none';
            document.getElementById("Cisbn").value="";
            document.getElementById("Cisbn2").value="";
            document.getElementById('divComp').style.display='none';
            document.getElementById('divComp2').style.display='none';
            document.getElementById('LBMO').innerHTML="";
            document.getElementById('LBMD').innerHTML="";
            document.getElementById('BMenu').style.display='none';

            
        }  
        
    }
    else{
        alert("ingrese bien datos");
        document.getElementById("Usuario").value=""
        document.getElementById("contraseña").value=""
    }
    
}

function DivCompraL(){
    var texisb=document.getElementById("Cisbn").value;
    isbnLibroMO=texisb;
    var cantidad=MOrtogonal.ObtenerCantidad(texisb);
    cantidadLMO=cantidad;
    document.getElementById('LBMO').innerHTML=MOrtogonal.ObtenerHTMLCompra(texisb);
    var Graf=`digraph G {
        node[shape = box,fillcolor="white" color="black" style="filled"];
        graph [pad="0.5", nodesep="0.03"];
        edge[style = "bold"];
   
   rankdir="LR";
   subgraph cluster_1 { \n`;
    var nodos="";
    for(let i=1;i<=cantidad;i++){
        nodos+="a"+i+" [label= \" \"]; ";
    }
    Graf+=nodos+"}\n "+ "label=\"Ejemplares\"; " + "\n}";
    d3.select("#pila").graphviz()
                .width (300)
                .height(500)
                .renderDot(Graf);
    
    document.getElementById('divComp').style.display='';

    


}


function DivCompraL2(){
    var texval=document.getElementById("textCantidad").value;
    if((cantidadLMO>texval)||((cantidadLMO==texval))){
        MOrtogonal.Comprar(isbnLibroMO,(cantidadLMO-texval));

    }else if(cantidadLMO<texval){

    }
    var nom=MOrtogonal.ObtenerNombre(isbnLibroMO);
    for(let i=1;i<=texval;i++){
        LUsuarios.Agregar_lista(ContUsuario,nom);
    }
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
    LUsuarios.Mostrar();
    LUsuarios.Graficar();

   
    document.getElementById('LMO').innerHTML=MOrtogonal.ObtenerHTML();
    DivCompraL();
    
}


function DivCompraLL(){
    var texisb=document.getElementById("Cisbn2").value;
    isbnLibroMD=texisb;
    var cantidad=MDispersa.ObtenerCantidad(texisb);
    cantidadLMD=cantidad;
    document.getElementById('LBMD').innerHTML=MDispersa.ObtenerHTMLCompra(texisb);
    var Graf=`digraph G {
        node[shape = box,fillcolor="white" color="black" style="filled"];
        graph [pad="0.5", nodesep="0.03"];
        edge[style = "bold"];
   
   rankdir="LR";
   subgraph cluster_1 { \n`;
    var nodos="";
    for(let i=1;i<=cantidad;i++){
        nodos+="a"+i+" [label= \" \"]; ";
    }
    Graf+=nodos+"}\n "+ "label=\"Ejemplares\"; " + "\n}";
    d3.select("#pila2").graphviz()
                .width (300)
                .height(500)
                .renderDot(Graf);
    
    document.getElementById('divComp2').style.display='';

}

function DivCompraLL2(){
    var texval=document.getElementById("textCantidad2").value;
    if((cantidadLMD>texval)||((cantidadLMD==texval))){
        MDispersa.Comprar(isbnLibroMD,(cantidadLMD-texval));

    }else if(cantidadLMD<texval){

    }
    var nom=MDispersa.ObtenerNombre(isbnLibroMD);
    for(let i=1;i<=texval;i++){
        LUsuarios.Agregar_lista(ContUsuario,nom);
    }
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
    LUsuarios.Mostrar();
    LUsuarios.Graficar();

   
    document.getElementById('LMD').innerHTML=MDispersa.ObtenerHTML();
    DivCompraLL();
    
}

function graficar(){
    document.getElementById('cargaMasiva').style.display='none';
    document.getElementById('VistaAdmin').style.display='';
    document.getElementById('LMO').innerHTML=MOrtogonal.ObtenerHTML();
    document.getElementById('LMD').innerHTML=MDispersa.ObtenerHTML();
    document.getElementById('LUS').innerHTML=LUsuarios.ObtenerHTML();
    document.getElementById('Aautor').innerHTML=Arbol.ObtenerHTML();
    document.getElementById('EAR').style.display='';
    MOrtogonal.graficar();
    MDispersa.graficar();
    LUsuarios.Graficar();
    Arbol.Graficar();

   

}

function Fsalir(){
    document.getElementById('BMenu').style.display='none';
    document.getElementById('cargaMasiva').style.display='none';
    document.getElementById('Loginghtml').style.display='';
    document.getElementById('ESMO').style.display='none';
    document.getElementById('ESMD').style.display='none';
    document.getElementById('divUs').style.display='none';
    document.getElementById('divUs2').style.display='none';
    document.getElementById('ESLU').style.display='none';
    document.getElementById('divAutor').style.display='';
    document.getElementById('EAR').style.display='none';
    document.getElementById('ComprarT2').style.display='none';
    

}

function Fsalir2(){
    document.getElementById('ComprarT2').style.display='none';
    document.getElementById('BMenu').style.display='none';
    document.getElementById('BMenu2').style.display='none';
    document.getElementById('cargaMasiva').style.display='none';
    document.getElementById('Loginghtml').style.display='';
    document.getElementById('ESMO').style.display='none';
    document.getElementById('ESMD').style.display='none';
    document.getElementById('divUs').style.display='none';
    document.getElementById('divUs2').style.display='none';
    document.getElementById('ESLU').style.display='none';
    document.getElementById('divAutor').style.display='';
    document.getElementById('ComprarT').style.display='none';
    document.getElementById('divAutor2').style.display='none';
    document.getElementById('divComp').style.display='none';
    document.getElementById('divComp2').style.display='none';
   

}

function DivCarga(){
    document.getElementById('cargaMasiva').style.display='';
    document.getElementById('VistaAdmin').style.display='none';
    document.getElementById('LMD').innerHTML=MDispersa.ObtenerHTML();
    document.getElementById('LUS').innerHTML=LUsuarios.ObtenerHTML();
    document.getElementById('Aautor').innerHTML=Arbol.ObtenerHTML();
    document.getElementById('EAR').style.display='';
    MOrtogonal.graficar();
    MDispersa.graficar();
    LUsuarios.Graficar();
    Arbol.Graficar();


}
function DivVista(){
    document.getElementById('cargaMasiva').style.display='none';
    document.getElementById('VistaAdmin').style.display='';
    document.getElementById('EAR').style.display='';

}
Bre.addEventListener('click',Registro,true);
BTCM.addEventListener('click',graficar,true);
BTsalir.addEventListener('click',Fsalir,true);
BTsalir2.addEventListener('click',Fsalir2,true);
BTCarga.addEventListener('click',DivCarga,true);
BTVistas.addEventListener('click',DivVista,true);
BTCompraL.addEventListener('click',DivCompraL,true);
BTCompraLL.addEventListener('click',DivCompraLL,true);
BTCompraL2.addEventListener('click',DivCompraL2,true);
BTCompraLL2.addEventListener('click',DivCompraLL2,true);



function CargarLibros(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }

    let files = new FileReader();
    files.onload = function(e) {
        let contenido = e.target.result;
        const object = JSON.parse(contenido);

        for (const key in object) {
            let CLibros = object[key];
            if(CLibros.categoria=="Thriller"){
                MOrtogonal.Actualizar(CLibros.columna,CLibros.fila,CLibros.isbn,CLibros.nombre_autor,CLibros.nombre_libro,CLibros.cantidad,CLibros.paginas,CLibros.categoria);

            }else if(CLibros.categoria=="Fantasia"){
                let veri=MDispersa.verificarExiste(CLibros.columna,CLibros.fila);
                if(veri==true){
                    MDispersa.Actualizar(CLibros.columna,CLibros.fila,CLibros.isbn,CLibros.nombre_autor,CLibros.nombre_libro,CLibros.cantidad,CLibros.paginas,CLibros.categoria);

                }else if(veri==false){
                    MDispersa.append(CLibros.columna,CLibros.fila,CLibros.isbn,CLibros.nombre_autor,CLibros.nombre_libro,CLibros.cantidad,CLibros.paginas,CLibros.categoria);

                }


            }
            
            
    
        }
        
    }
    files.readAsText(archivo);

}


function CargarAutores(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }

    let files = new FileReader();
    files.onload = function(e) {
        let contenido = e.target.result;
        const object = JSON.parse(contenido);

        for (const key in object) {
            let CAutores = object[key];
            Arbol.Insertar(CAutores.dpi,CAutores.nombre_autor,CAutores.correo,CAutores.telefono,CAutores.direccion,CAutores.biografia);
            
        }
        
    }
    files.readAsText(archivo);
}


function CargarUsuarios(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }

    let files = new FileReader();
    files.onload = function(e) {
        let contenido = e.target.result;
        const object = JSON.parse(contenido);

        for (const key in object) {
            let CUsuarios = object[key];
            let listaa=new ListaCCliente();
            LUsuarios.append(CUsuarios.dpi,CUsuarios.nombre_completo,CUsuarios.nombre_usuario,CUsuarios.correo,CUsuarios.rol,CUsuarios.contrasenia,CUsuarios.telefono,listaa);
        }
        
    }
    files.readAsText(archivo);
}


document.getElementById("fileUsuarios").addEventListener("change", CargarUsuarios, false);
document.getElementById("fileAutores").addEventListener("change", CargarAutores, false);
document.getElementById("fileLibros").addEventListener("change", CargarLibros, false);


