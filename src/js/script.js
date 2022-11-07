
const carregar = () => {

    let HoraServidor = new Date()

    const horas = document.getElementById('hora');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundo');
    const HoraAtual = HoraServidor.getHours();
    const min = HoraServidor.getMinutes();
    const seg = HoraServidor.getSeconds();

    //add o 0 antes do numero caso for menor q 10
    horas.textContent = HoraAtual < 10 ? `0${HoraAtual}` : HoraAtual;
    minutos.textContent = min < 10 ? `0${min}` : min;
    segundos.textContent = seg < 10 ? `0${seg}` : seg;


    let fundo = document.querySelector('#fundo');
    let numeros = document.querySelector('h2.numeros');
    let numeros2 = document.querySelector('h2.numeros2');
    let numeros3 = document.querySelector('h2.numeros3');
    let situacao = document.querySelector('h3.situacao');
    let situacao2 = document.querySelector('h3.situacao2');
    let situacao3 = document.querySelector('h3.situacao3');


    if (HoraAtual < 12 && HoraAtual > 5) {
        msg.innerHTML = 'Bom dia!';
        msg.style.fontSize = '25px'
        msg.style.color = 'white'
        fundo.style.backgroundImage = 'url(./src/img/manha.jpg)';

    } else if (HoraAtual < 18 && HoraAtual > 11) {
        msg.innerHTML = 'Boa tarde!';
        msg.style.fontSize = '25px'
        msg.style.color = 'white'
        fundo.style.backgroundImage = 'url(./src/img/tarde.jpg)';
        numeros.style.color = 'hsl(14.75,97.86%,36.67%)';
        numeros2.style.color = 'hsl(14.75,97.86%,36.67%)';
        numeros3.style.color = 'hsl(14.75,97.86%,36.67%)';
        situacao.style.color = 'hsl(14.75,97.86%,36.67%)';
        situacao2.style.color = 'hsl(14.75,97.86%,36.67%)';
        situacao3.style.color = 'hsl(14.75,97.86%,36.67%)';

    } else if (HoraAtual >= 0 && HoraAtual < 6) {
        msg.innerHTML = 'Boa Noite!';
        fundo.style.backgroundImage = 'url(./src/img/noite.jpg)';
        msg.style.fontSize = '25px'
        msg.style.color = 'white'
        numeros.style.color = 'hsl(196.96,92%,19.61%)';
        numeros2.style.color = 'hsl(196.96,92%,19.61%)';
        numeros3.style.color = 'hsl(196.96,92%,19.61%)';
        situacao.style.color = 'hsl(196.96,92%,19.61%)';
        situacao2.style.color = 'hsl(196.96,92%,19.61%)';
        situacao3.style.color = 'hsl(196.96,92%,19.61%)';

    } else {
        msg.innerHTML = 'Boa Noite!';
        fundo.style.backgroundImage = 'url(./src/img/noite.jpg)';
        msg.style.fontSize = '25px'
        msg.style.color = 'white'
        numeros.style.color = 'hsl(196.96,92%,19.61%)';
        numeros2.style.color = 'hsl(196.96,92%,19.61%)';
        numeros3.style.color = 'hsl(196.96,92%,19.61%)';
        situacao.style.color = 'hsl(196.96,92%,19.61%)';
        situacao2.style.color = 'hsl(196.96,92%,19.61%)';
        situacao3.style.color = 'hsl(196.96,92%,19.61%)';
    }


}


setInterval(() => {
    carregar()
}, 1000)