const griagliaDom = document.querySelector('#griglia');
const giocaDom = document.querySelector('#gioca');

giocaDom.addEventListener('click', function() {

for (let i = 0; i < 100; i++) {
    const numeroInterno = i + 1;
    const currentQuadrato = createQuadrato(numeroInterno);


    currentQuadrato.addEventListener('click', function() {
        this.classList.toggle('cliccato');
        console.log(numeroInterno);

    })

    griagliaDom.append(currentQuadrato);

    currentQuadrato.innerHTML = `${numeroInterno}`;

   

}

})

function createQuadrato() {
    const currentElement = document.createElement('div');
    currentElement.classList.add('quadrato');


    return currentElement
}
