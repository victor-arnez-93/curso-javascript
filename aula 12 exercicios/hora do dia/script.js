function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = 21
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // BOM DIA
    document.body.style.background = '#b3caed' //#427db6 #00518b
    img.src = 'imagens/dia.png'
} else if (hora >= 12 && hora <= 18) {
    // BOA TARDE
    document.body.style.background = '#6e87a6' //#da8350 #0a101c
    img.src = 'imagens/tarde.png'
} else {
    // BOA NOITE
    document.body.style.background = '#9374ad' //#382b47 #0d0609
    img.src = 'imagens/noite.png'
    }
}