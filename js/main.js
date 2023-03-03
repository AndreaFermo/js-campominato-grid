const griagliaDom = document.querySelector('#griglia');

for (let i = 0; i < 100; i++) {
    const currentQuadrato = createQuadrato();

    currentQuadrato.addEventListener('click', function() {
        this.classList.toggle('cliccato')

    })

    griagliaDom.append(currentQuadrato);

}

function createQuadrato() {
    const currentElement = document.createElement('div');
    currentElement.classList.add('quadrato');
    return currentElement

}