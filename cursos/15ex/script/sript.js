function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade =  ano - Number(fano.value)
        var genero = ''
        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //bebe
                img.setAttribute('src','image/bebe-homem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'image/jovem-homem.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'image/adulto-homem.png')
            }else {
                //idoso
                img.setAttribute('src', 'image/idoso-homem.png')
            }


        } else if (fsex [1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos.`

    }

}
