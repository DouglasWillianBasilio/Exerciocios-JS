function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    
    //msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos. <br> Bom dia!`
        img.src = 'imgs/manha.png'
        document.body.style.background = '#b0794f'
    }else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos. <br> Boa Tarde!`
        img.src = 'imgs/tarde.png'
        document.body.style.background = '#cf8b56'
    } else{
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos. <br> Boa Noite!`
        img.src = 'imgs/noite.png'
        document.body.style.background = '#0c2f2f'
    }
}


