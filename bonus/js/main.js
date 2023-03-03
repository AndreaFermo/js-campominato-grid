const griagliaDom = document.querySelector('#griglia');
const giocaDom = document.querySelector('#gioca');


giocaDom.addEventListener('click', function() { 
    griagliaDom.classList.remove('grigliaPiccola');
    griagliaDom.classList.remove('grigliaMedia');
   
    let difficoltaDom = document.querySelector('#difficolta');
    let valoredifficoltaDom = difficoltaDom.value;
    griagliaDom.innerHTML = ``;
    

    let numeroquadrati = scegliDifficolta (valoredifficoltaDom);
 
    
for (let i = 0; i < numeroquadrati; i++) {
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

function scegliDifficolta (valore) {
    
    if (valore == 'facile') {
        return 100
    } else if (valore == 'media') {
        griagliaDom.classList.add('grigliaMedia');
        return 81
    }   else {
        griagliaDom.classList.add('grigliaPiccola');
        return 49
    }

}


