//cambia el tema que le llegue por parametro
function cambiarTema(tema){
    document.getElementById('repro').src = "/static/music/"+String(tema);
}