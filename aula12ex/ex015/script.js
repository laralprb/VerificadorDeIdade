function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // FullYear mostra em 4 dígitos
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value)>ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img') //cria o elemento img(poderia ser criado no html) 
        img.setAttribute('id', 'foto') //define id para img (atributo)

        if (fsex[0].checked){
            genero = 'homem'
            if (idade>=0 && idade<14) {
                img.setAttribute('src', 'img/homem.crianca.png')
            } else if (idade <=30 ){
                img.setAttribute('src', 'img/homem.jovem.png')
            } else if (idade<=59) {
                img.setAttribute('src', 'img/homem.adulto.png')
            } else {
                img.src = 'img/homem.idoso.png' //outra forma de mostrar a imagem
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade>=0 && idade<14) {
                img.setAttribute('src', 'img/mulher.crianca.png')
            } else if (idade <=30 ){
                img.setAttribute('src', 'img/mulher.jovem.png')
            } else if (idade<=59) {
                img.setAttribute('src', 'img/mulher.adulto.png')
            } else {
                img.src = 'img/mulher.idoso.png' //outra forma de mostrar a imagem
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img) //mostrar a imagem
    }
    }
