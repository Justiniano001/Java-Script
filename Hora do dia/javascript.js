function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto1')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
if (hora >= 0 && hora < 12){
    //BOM DIA
    img.src = 'sol-717370_960_720.jpg'
    document.body.style.background = '#EEDD82'
    
}else if( hora >= 12 && hora < 18){
    img.src = 'milagre-da-manha-para-vendedores.jpg'
    //BOA TARDE
 } else {
    img.src = 'linda-noite-no-oceano-com-lua-cheia_104785-866.avif'
    document.body.style.background = '#87CEFA'
    
        // Boa noite
    }
}     

