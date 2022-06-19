import{MatrizD} from './MatrizDispersa.js'
import{Arbolbb} from './Arbolbb.js'
import { ListaCircular } from './ListaCircularSimple.js';
import{ListaCCliente} from './ListaCClientes.js'
var Bre=document.getElementById("botonRegistro");
var BTCM=document.getElementById("BTCM");
var MOrtogonal=new MatrizD();
var MDispersa=new MatrizD();
var Arbol=new Arbolbb();
var LUsuarios=new ListaCircular();

let lsta=new ListaCCliente();
LUsuarios.append(2354168452525,"WIlfred Perez","Wilfred","","Administrador","123","+502 (123) 123-4567",lsta);



for (let i=1;i<=25;i++){
    for (let j=1;j<=25;j++){
        MOrtogonal.append(i,j,"","","","","","");
    }
}


//MOrtogonal.graficar();

function Registro(){
    var iUsuario=document.getElementById("Usuario").value;
    var ipass=document.getElementById("contraseña").value;
    if((iUsuario=="admin")&& (ipass=="123")){
        document.getElementById('BMenu').style.display='';
    }else{
        alert("ingrese bien datos");
    }
    
}

function graficar(){
    LUsuarios.Agregar_lista(2715946369518,"a");
    LUsuarios.Agregar_lista(2715946369518,"b");
    LUsuarios.Graficar();

}

Bre.addEventListener('click',Registro,true);
BTCM.addEventListener('click',graficar,true);



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


