// Exo 6.3
// *******

// Recup des elements de la page web (via l'API du DOM)
const inputTemp = document.getElementById('exo63-temp');
const btnTemp = document.getElementById('exo63-btn');
const resultTemp = document.getElementById('exo63-resultat');

console.log(inputTemp, btnTemp, resultTemp);

// Travailler sur l'event 'click' du bouton 
btnTemp.addEventListener('click', () => {
    const temperature = parseFloat(inputTemp.value);

    inputTemp.value = '';

    if (isNaN(temperature)) {
        // Valeur incorrect
        resultTemp.innerText = 'Valeur invalide (╯°□°）╯︵ ┻━┻';
    }
    else if (temperature >= 0 && temperature <= 100) {
        resultTemp.innerText = `L'eau à ${temperature}°c est liquide`;
    }
    else if (temperature > 100) {
        resultTemp.innerText = `L'eau à ${temperature}°c est gazeux`;
    }
    else {
        resultTemp.innerText = `L'eau à ${temperature}°c est solide`;
    }
});


/***********************************************************************/
// Exo 6.5
// *******

// Récuperation des éléments
const inputNb1 = document.getElementById('exo65-nb1');
const inputNb2 = document.getElementById('exo65-nb2');
const inputChoix = document.getElementById('exo65-choix');
const btnCalc = document.getElementById('exo65-btn-calc');
const resultCalc = document.getElementById('exo65-resultat');
console.log(inputNb1, inputNb2, inputChoix, btnCalc, resultCalc);

// Event Click ☺
btnCalc.addEventListener('click', () => {
    // Les valeurs des inputs
    const nb1 = parseFloat(inputNb1.value);
    const nb2 = parseFloat(inputNb2.value);
    const choix = inputChoix.value;

    let resultat = null; 
    let errorMessage = null;
    switch (choix) {
        case '+':
            resultat = nb1 + nb2;
            break;
        case '-':
            resultat = nb1 - nb2;
            break;
        case '*':
            resultat = nb1 * nb2;
            break;
        case '/':
            if(nb2 === 0) {
                errorMessage = 'Division par zéro impossible !';
            }
            else {
                resultat = nb1 / nb2;
            }
            break;
        case '^':
            resultat = Math.pow(nb1, nb2); // Alternative: nb1 ** nb2
            break;
        default:
            errorMessage = 'L\'opération n\'est pas supporté';
            break;
    }

    if(errorMessage) {
        resultCalc.innerText = errorMessage;
    }
    else {
        resultCalc.innerText = `${nb1} ${choix} ${nb2} = ${resultat}`;
    }
});