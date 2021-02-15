//Importaré la data
import { example } from './data.js';
//import athletes from './data/athletes/athletes.js';
import copyAthletes from './data/athletes/athletes.js';

// creo la variable que va a llamar desde el archivo donde
//está la info, la propiedad solo de 'athletes'
const dataAthletes = (copyAthletes.athletes);
const contenedor = document.getElementById ("contenedor");

fnCargaGeneral(dataAthletes);

//FUNCIÓN DE CARGA GENERAL DE TODOS LAS CARDS DE ATLETAS
function fnCargaGeneral(dataAthletes) {
    //esta var me va a reconocer todos los valores
    const data = Object.values(dataAthletes);
    const mostrarData = (parametro) => {
        //Parametro de lo que se va a jalar de lo que contiene athletes... es mi condición
        let mostrar ='';
        let avatarHombre = ["./images/card_boy_1.png", "./images/card_boy_2.png", "./images/card_boy_3.png"];
        let avatarMujer = ["./images/card_girl_1.png","./images/card_girl_2.png","./images/card_girl_3.png","./images/card_girl_4.png"];
        //Quiero mostrar cada objeto de la siguiente manera
        //funciona similar al array reduce para quitar los duplicados - antes de devolver el array
        parametro.forEach((element) => {
            //Contenido de cada card de cada deportista
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
                        //Operador condicional (ternario)//
                        ? ''+avatarMujer[Math.abs(Math.round((Math.random() * avatarMujer.length-4)+1))]+''
                        : ''+avatarHombre[Math.abs(Math.round((Math.random() * avatarHombre.length-3)+1))]+''} style="height: 17.5em; width: 13.5em;">
                        </section>  
                    </section>
                    </div>
                </div>
                </div>
            `;
            mostrar = mostrar + deportista;
        });
        contenedor.innerHTML = mostrar;
    };
    mostrarData(data); 
}

//FUNCIÓN PARA BUSCAR POR NOMBRE DE ATLETA CON CLICK
const btnBuscar= document.getElementById ('btnBuscar'); 
btnBuscar.addEventListener('click', function() {
    const nameAthlete = document.getElementById("search").value;
    const showFilter = filterItems(nameAthlete);
    function filterItems(query){
        console.log(query)
        return dataAthletes.filter(function(el) {
            return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
      };
    fnCargaGeneral(showFilter);
});
  

/* const dataExm= [1,2,3,4,5,2,3,4,6,1,10]
const filtrarDataAthletes =dataExm.filter((item,index) => {
    return dataExm.indexOf(item) === index
})
console.log (filtrarDataAthletes); */

// usar un map para llenar un vacio que contenga solo los nombres
// y ese map se encarga de quitar los duplicados

//
//es IRI, so reemplaza
//switch case para las nacionalidades
//buscame la bandera de tal y el api te lo devuelve

//duplicados
//los array tiene un método que se llama reduce, ejem: map, sort