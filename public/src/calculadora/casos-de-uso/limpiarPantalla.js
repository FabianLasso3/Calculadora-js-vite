import { desabilitarOperacion } from "./habilitarBotones";

export const limpiarPantalla = () => {
    const screenDiv = document.querySelector('.screen');
    const resultDiv = document.querySelector('.result');
    const clearButton = document.querySelector('#clear');

   
    clearButton.addEventListener('click', () => {
        screenDiv.innerText = '';
        resultDiv.innerText = '';
        desabilitarOperacion();
    });
}