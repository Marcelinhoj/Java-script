function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if ( hora >= 0 && hora < 12){
        //BOM DIA !
        img.src = 'imagem/fotomanha.png'
        document.body.style.background = '#8eb6c2'
        
    } else if ( hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'imagem/fototarde.png'
        document.body.style.background = '#ab6f6b'
    } else {
        //BOA NOITE!
        img.src = "imagem/fotonoite.png"
        document.body.style.background = '#004874'
    }
}