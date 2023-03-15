
    // const plusButton = document.querySelector('#plus');
    // const lessButton = document.querySelector('#less');
    // const multiplyButton = document.querySelector('#multiply');
    // const DivisionButton = document.querySelector('#division');
    
    export const desabilitarOperacion = () => {
        const plusButton = document.querySelector('#plus');
        const lessButton = document.querySelector('#less');
        const multiplyButton = document.querySelector('#multiply');
        const DivisionButton = document.querySelector('#division');
        const equalButton = document.querySelector('#equal');
        const clearButton = document.querySelector('#clear');

        plusButton.disabled = true;
        lessButton.disabled = true;
        multiplyButton.disabled = true;
        DivisionButton.disabled = true;
        equalButton.disabled = true;
        clearButton.disabled = true;
    }
    
    export const habilitarOperacion = () => {

        const plusButton = document.querySelector('#plus');
        const lessButton = document.querySelector('#less');
        const multiplyButton = document.querySelector('#multiply');
        const DivisionButton = document.querySelector('#division');
        const equalButton = document.querySelector('#equal');
        const clearButton = document.querySelector('#clear');

        plusButton.disabled = false;
        lessButton.disabled = false;
        multiplyButton.disabled = false;
        DivisionButton.disabled = false;
        equalButton.disabled = false;
        clearButton.disabled = false;
    }
    
    // document.addEventListener('DOMContentLoaded', desabilitarOperacion, false);
