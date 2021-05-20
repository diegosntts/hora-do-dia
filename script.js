function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imgformat')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}
function obterfrase(){
    var frase = new Array();
    frase[0] = "A vida é como um sopro!";
    frase[1] = "Quem quer faz acontecer!";

var i = Math.floor(2*Math.random());
document.getElementById("sorte").innerHTML = frase[i];
}
