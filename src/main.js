//Importaré la data
//import { example } from './data.js';
//import athletes from './data/athletes/athletes.js';
import copyAthletes from './data/athletes/athletes.js';


debugger;
console.log(example,copyAthletes);

// creo la variable que va a llamar desde el archivo donde
//está la info, la propiedad solo de 'athletes'
const dataAthletes = (copyAthletes.athletes);
const contenedor = document.getElementById ("contenedor");

/* const dataExm= [1,2,3,4,5,2,3,4,6,1,10]
const filtrarDataAthletes =dataExm.filter((item,index) => {
    return dataExm.indexOf(item) === index
})
console.log (filtrarDataAthletes); */

//esta var me va a reconocer todos los valores
const data = Object.values(dataAthletes);

<<<<<<< HEAD
//array para las imágenes de femenino o masculino
let avatarHombre = ["./images/card_boy_1.png", "./images/card_boy_2.png", "./images/card_boy_3.png"];
let avatarMujer = ["./images/card_girl_1.png","./images/card_girl_2.png","./images/card_girl_3.png","./images/card_girl_4.png"];
=======
let avatarHombre = ["./images/card_boy_1.png", "./images/card_boy_2.png"];
let avatarMujer = ["./images/card_girl_1.png","./images/card_girl_2.png"];
>>>>>>> 1aabb5d77f8ad47785b0ff2f1995c92af32b115d

//FUNCIÓN PARA LA VISUALIZACIÓN DE CARDS
const mostrarData = (parametro) => {
    //Parametro de lo que se va a jalar de lo que contiene athletes... es mi condición
    let mostrar ='';
    //Quiero mostrar cada objeto de la siguiente manera
    parametro.forEach((element) => {
        //Variable del contenido de cada card de cada deportista
        const deportista =
        `   <div class=wrap>
            <div class=card-wrap>
                <div class="card">
                <section class="contraCara"></section>
                <section class="cara">
                    <h1>
                    ${element.name}
                    </h1>
                    <img class="bandera" 
                    src="https://restcountries.eu/data/${element.noc.toLowerCase()}.svg" alt="">
                    <section>
                    <img class="avatar" src = ${element.gender === 'F'
<<<<<<< HEAD
                    //Operador condicional (ternario)//
                    ? ''+avatarMujer[Math.abs(Math.round((Math.random() * avatarMujer.length-4)+1))]+''
                    : ''+avatarHombre[Math.abs(Math.round((Math.random() * avatarHombre.length-3)+1))]+''} style="height: 17.5em; width: 13.5em;">
                    </section>  
=======
                    ? ''+avatarMujer[Math.abs(Math.round((Math.random() * avatarMujer.length-2)+1))]+''
                    : ''+avatarHombre[Math.abs(Math.round((Math.random() * avatarHombre.length-2)+1))]+''} style="height: 18.2em; width: 13.5em;">      
                    <img class="bandera" width= 54 height= 30.9
                    src="https://restcountries.eu/data/${element.noc.toLowerCase()}.svg" alt="">
>>>>>>> 1aabb5d77f8ad47785b0ff2f1995c92af32b115d
                </section>
                </div>
            </div>
            </div>
        `;
        mostrar += deportista;
    });
    contenedor.innerHTML = mostrar;
};

mostrarData(data); 

//
const btnBuscar= document.getElementById ('btnBuscar'); 
btnBuscar.addEventListener('click', function() {
    const showFilter = filterItems(document.getElementById("search"));
   
});

function filterItems(query) {
    return dataAthletes.filter(function(el) {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  };
