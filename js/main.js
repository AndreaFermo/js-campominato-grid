const griagliaDom = document.querySelector('#griglia');

for (let i = 0; i < 100; i++) {
    const numeroInterno = i + 1;
    const currentQuadrato = createQuadrato(numeroInterno);


    currentQuadrato.addEventListener('click', function() {
        this.classList.toggle('cliccato')

    })

    griagliaDom.append(currentQuadrato);

    currentQuadrato.innerHTML = `${numeroInterno}`;

   

}

function createQuadrato(numero) {
    const currentElement = document.createElement('div');
    currentElement.classList.add('quadrato');

    if (pariDispari(numero) == 'pari') {
        currentElement.classList.add('pari')
    }   else {
        currentElement.classList.add('dispari')
    }

    return currentElement
}

function pariDispari(numero) {
    if (numero % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}