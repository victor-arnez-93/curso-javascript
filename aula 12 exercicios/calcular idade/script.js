function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res') //ou getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemh.png')
            } else if (idade <59) {
                //Adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
    }       else if (fsex[1].checked) {
        gênero = 'Mulher'
              if (idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'imagens/jovem.png')
            } else if (idade <59) {
            //Adulto
            img.setAttribute('src', 'imagens/mulher.png')
            } else {
            //Idoso
            img.setAttribute('src', 'imagens/idosa.png')
        }
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    }
    }
