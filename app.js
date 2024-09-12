
let contador = 1;
let listaNumeroGenerado = [];
let numeroMaximo = 10;
let numeroEncontrar =  generarNumeroAleatorio();

function asignarTexto(element, text) {
    let texto = document.querySelector(element);
    texto.innerHTML = text;
    return;
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;
    if (listaNumeroGenerado.length == numeroMaximo) {
        asignarTexto('p', 'Ya se completaron todos los juegos posibles');
    } else {
        if(listaNumeroGenerado.includes(numeroGenerado)) {
            return generarNumeroAleatorio();
        } else {
            listaNumeroGenerado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value) ;
    
    if (numeroEncontrar < numeroUsuario) {
        asignarTexto('p', 'El número a adivinar es menor');
    } else if (numeroEncontrar>numeroUsuario){
        asignarTexto('p', 'El número a adivinar es mayor');
    }

    if (numeroEncontrar === numeroUsuario) {
        asignarTexto('p', `Felicitaciones! Usted encontró el número en ${contador} ${contador === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    limpiarCaja();

    contador += 1;
        
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTexto('h1', 'Juego del número secreto');
    asignarTexto('p', `Elige un número del 1 al ${numeroMaximo}`);
    numeroEncontrar = generarNumeroAleatorio();
    contador = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function reiniciarJuego() {

    limpiarCaja();
    condicionesIniciales();

    

}

asignarTexto('h1', 'Juego del número secreto');
asignarTexto('p', `Elige un número del 1 al ${numeroMaximo}`);







