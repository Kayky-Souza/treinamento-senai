function mostrarDescricao(id){
    const texto = document.getElementById(id)
    if (texto.style.display == "none") {
        texto.style.display = "block"
        console.log(texto.style.display);
        
    }else{
        texto.style.display =   "none"
        console.log(texto.style.display);
    }
}