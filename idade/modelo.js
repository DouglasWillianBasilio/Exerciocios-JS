function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert ('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE!!!!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            res.innerHTML = `Você é um ${genero} com ${idade} anos.`
            if(idade >=0 && idade < 14){
                img.setAttribute('src','img/hcrianca.png')
            } else if (idade < 21){
                img.setAttribute('src','img/hjovem.png')
            } else if (idade <50){
                img.setAttribute('src','img/hadulto.png')
            } else {
                img.setAttribute('src','img/hidoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            res.innerHTML = `Você é uma ${genero} com ${idade} anos.`
            if(idade >=0 && idade < 14){
                img.setAttribute('src','img/mcrianca.png')
            } else if (idade < 21){
                img.setAttribute('src','img/mjovem.png')
            } else if (idade <50){
                img.setAttribute('src','img/madulta.png')
            } else {
                img.setAttribute('src','img/midosa.png')
            }
            
        }
        res.style.textAlign = 'bottom-center'
        res.style.display = 'flex'
        res.style.justifyContent = 'center'
        res.style.alignItems = 'center'
        res.appendChild(img)
            
    }
}