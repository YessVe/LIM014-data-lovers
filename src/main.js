//Importaré la data
import { example } from './data.js';

import copyAthletes from './data/athletes/athletes.js';

/* debugger; */
console.log(example,copyAthletes);


// creo la variable que va a llamar desde el archivo donde
//está la info, la propiedad solo de 'athletes'
const dataAthletes = (copyAthletes.athletes);

//const data = Object.values(dataAthletes);

//esta var me va a reconocer todos los valores
const data = Object.values(dataAthletes);

//Creando una función para mostrar la data
//Parametro de lo que se va a jalar de lo que contiene athletes
const mostrarData = (parametro) => {
    //variable vacia para el contenedor de los cards
    let mostrar ='';
    //Quiero mostrar cada objeto de la siguiente manera
    parametro.forEach((element) => {
        
        //Variable del contenido de cada card de cada deportista
        const deportista =
        
        //Quiero mostrar cada objeto dentro del card
        //o Template string o Plantillas literales (plantillas de cadenas)" `${}` " 
        //string o cadenas de Texto (``) 
        
        //Inserto ${ } al h1 y a los img para jalar el valor del 
        //nombre, gender y noc, según corresponda a la condicional.

        `<div class="card">
        <h1>
        ${element.name}
        </h1>
        <section class="">
        <img class="avatar" src = ${element.gender === 'F'
        //Operador condicional (ternario)//
        ? './images/chica_dos.png'
        : './images/chico_uno.png'}>
        <section>
        
        <img width= 54 height= 30.9
        src="https://restcountries.eu/data/${element.noc.toLowerCase()}.svg" alt="">
        </div>
        `;
        
        //La variable vacia "mostrar" se insertará todos los valores de 
        //los cards de los deportistas según la función
        mostrar += deportista;
    });
        //Todo se colocará dentro del contenedor/
    contenedor.innerHTML = mostrar;
};
mostrarData(data);



/* //experimento de YEss
const contenedor = document.getElementById ("contenedor");
let mostrar ="";
    // para
    for (let index = 0; index < 3; index++) {
    const deportista = 
    //para que pueda dibujar en el HTML y el stilo 
    //lo defino con la clase "card"
        `<div class="card">
        <h1>`
        ${element.name};
        `</h1>
        </div>
        `;
         mostrar = mostrar + deportista;
         
         contenedor.innerHTML = mostrar;
    };
 */
 