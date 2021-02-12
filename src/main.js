//Importaré la data
import { example } from './data.js';
import athletes from './data/athletes/athletes.js';

import copyAthletes from './data/athletes/athletes.js';

/* debugger; */
console.log(example,copyAthletes);


// creo la variable que va a llamar desde el archivo donde
//está la info, la propiedad solo de 'athletes'
const dataAthletes = (copyAthletes.athletes);

//esta var me va a reconocer todos los valores
const data = Object.values(dataAthletes);

//array para las imágenes de femenino o masculino
let avatarHombre = ["./images/card_boy_1.png", "./images/card_boy_2.png"];
let avatarMujer = ["./images/card_girl_1.png","./images/card_girl_2.png"];

//Creando una función para mostrar la data
//Parametro de lo que se va a jalar de lo que contiene athletes... es mi condición
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
        //nombre, gender y noc, según corresponda a la condicional
        `<div class="card">
        <h1>
        ${element.name}
        </h1>
        <section class="">
        <img class="avatar" src = ${element.gender === 'F'
        //Operador condicional (ternario) con uso de aleatorio para que la tarjeta de
        //hombre o mujer cambie entre las dos opciones
        
        ? ''+avatarMujer[Math.abs(Math.round((Math.random() * avatarMujer.length-2)+1))]+''
        : ''+avatarHombre[Math.abs(Math.round((Math.random() * avatarHombre.length-2)+1))]+''}>
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

