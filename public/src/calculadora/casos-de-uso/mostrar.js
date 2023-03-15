import { limpiarPantalla } from "./limpiarPantalla";

export const mostrar = (valor) => {

    const screenDiv = document.querySelector('.screen');
    const resultDiv = document.querySelector('.result');
    const equalButton = document.querySelector('#equal');
    

    if(!valor) return;
    screenDiv.innerText += valor;

    const equal = () =>{
        const valorPantalla = screenDiv.textContent;
        
        if(isNaN(valorPantalla.slice(-1))) return;
            const resultado = eval(valorPantalla);
            resultDiv.innerText = resultado; 
    }

    limpiarPantalla();
    equalButton.addEventListener('click', equal);
}