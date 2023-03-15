import html from './calculadora-app.html?raw';
import './calculadora-app.css'
import { obtenerValores } from '../casos-de-uso/obtenerValores';


export const CalculadoraApp = ( element) => {
    const contendor = document.createElement('div')
    contendor.innerHTML = html;
    element.append(contendor); 
    obtenerValores();

}