var x=document.getElementById("botonRegistro");

function Registro(){
    var iUsuario=document.getElementById("Usuario").value;
    var ipass=document.getElementById("contraseña").value;
    if((iUsuario=="admin")&& (ipass=="123")){
        document.getElementById('BMenu').style.display='';
    }else{
        alert("ingrese bien datos");
    }
    
}
x.addEventListener('click',Registro,true);