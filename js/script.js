import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { calcImc, notNumber } from './utils.js';


// Variables
const form = document.querySelector('form');
const inputHeight = document.querySelector('#height');
const inputWeight = document.querySelector('#weight');



// Fechado o Alerta ao voltar a digitar o input
inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

// Quando passamos apenas um argumento para uma Arrow Function podemos retirar os parentêses
form.onsubmit = event => {
  // Aqui evitamos que um evento execute suas funções padronizadas.
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNaN = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNaN) {
    AlertError.open();
    // Toda a função com um return, para sua execução;
    return;
  };

  AlertError.close();


  const result = calcImc(weight, height);
  displayResultMessage(result);

};

function displayResultMessage(result)
{
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;

  Modal.open();
};



/*
  Maneiras de passar um evento para uma função
*/

// Função anônima
/*
form.onsubmit = function () {
};
*/

// Função Expression
/* form.onsubmit = handleSubmit();
function handleSubmit ()
{
};
*/