var data = sessionStorage.getItem('user'); 
$("#login").html("<i class='fa fa-user' aria-hidden='true'></i><b style='margin-left:10px'>"+data+"</b>");

function pagina(op){
    if(op==0){
        $("#todo").load("imagen.html");
    }
    if(op==1){
        $("#todo").load("raiz.html");
    }
    if(op==2){
        $("#todo").load("contactos.html");
    }
    if(op==3){
        $("#todo").load("ejemplo.html");
    }
}
function raiz(){
    var n = $("#numero").val();
    $("#resultado").val(Math.sqrt(n));
}