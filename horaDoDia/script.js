function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    msg.innerText = `São ${hora} horas.`

    if(hora>=6 && hora<12){
        //dia
        img.src = 'img/dia.png'
        document.body.style.background = '#5C6E45'
        }else if(hora>=12 && hora<18){
            //tarde
            img.src = 'img/tarde.png'
            document.body.style.background = '#6C84A6'
        }else{
            //noite
            img.src = 'img/noite.png'
            document.body.style.background = '#16294B'
        }
    }
