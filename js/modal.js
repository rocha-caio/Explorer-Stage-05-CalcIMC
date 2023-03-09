
/* Variáveis sem a estruturação de dados */
// const modalWrapper = document.querySelector('.modal-wrapper');
// const modalMessage = document.querySelector('.modal .title span');
// const modalBtnClose = document.querySelector('.modal button.close');

// Utilizando Object Literals para Estruturar os Dados da seção Modal
export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open: function() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
};

// Quando a arrow function tiver apenas uma linha, podemos deixar assim:
Modal.buttonClose.onclick = () => Modal.close();


/*
  Utilizando o método addEventListener, podemos repetir o evento em outros arquivos/elementos.
  Caso utilizassemos o var.onevent, o evento é limitado a um elemento, nesse caso, o último executado/renderizado pelo programa.
*/

window.addEventListener('keydown', handleKeydown);


// Fechando o Modal com a Tecla ESC
function handleKeydown(event) {
  if (event.key == 'Escape') {
    Modal.close();
  }
};