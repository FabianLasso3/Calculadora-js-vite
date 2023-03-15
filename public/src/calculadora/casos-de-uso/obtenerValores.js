
import {  desabilitarOperacion, habilitarOperacion} from "./habilitarBotones";
import { mostrar } from "./mostrar";


export const obtenerValores = () => {
    
    const buton  = document.querySelector('.container-buttons');
    desabilitarOperacion();

    const valores = (event) => {
        if(event.target.value === undefined) return;
        const valor = event.target.value;  
        if(valor){
            mostrar(valor);
            habilitarOperacion();
        }     
        
    }
    

    buton.addEventListener('click', valores);

}
