//Importaré la data

import { allNames, cleanData, uniqueNames,filterName,alphabetOrder, filterGender} from './data.js';
//import athletes from './data/athletes/athletes.js';
import copyAthletes from './data/athletes/athletes.js';

// creo la variable que va a llamar desde el archivo donde
//está la info, la propiedad solo de 'athletes'
const dataAthletes = (copyAthletes.athletes);
const contenedor = document.getElementById ("contenedor");

//FUNCIÓN PARA OBTENER ATLETAS SIN DUPLICAR
    //1ro obtengo los nombres de toda la data
    const todosLosNombres = allNames(dataAthletes);
    //dataAthletes es el argumento y puede ir cambiando a dataPokemon por ejemplo allNames(dataPokemon)

     //2do voy a sacar los nombres sin que se repita
    const nombresUnicos= uniqueNames (todosLosNombres);


    //3ro voy a crear la data para los nombres de atletas que son únicos
    const dataLimpia= cleanData(nombresUnicos,dataAthletes);

fnCargaGeneral(dataLimpia);

//FUNCIÓN DE CARGA GENERAL DE TODOS LAS CARDS DE ATLETAS
function fnCargaGeneral(dataLimpia) {
        //esta var me va a reconocer todos los valores
        const data = Object.values(dataLimpia);
        const mostrarData = (parametro) => {
        //Parametro de lo que se va a jalar de lo que contiene athletes... es mi condición
        let mostrar ='';
        let avatarHombre = ["./images/card_M_1.png", "./images/card_M_2.png", "./images/card_M_3.png"];
        let avatarMujer = ["./images/card_F_1.png","./images/card_F_2.png","./images/card_F_3.png","./images/card_F_4.png"];
        //Quiero mostrar cada objeto de la siguiente manera
        //funciona similar al array reduce para quitar los duplicados - antes de devolver el array
        parametro.forEach((element) => {
            //Contenido de cada card de cada deportista
            const deportista =
            `   <div class=wrap>
                    <div class=card-wrap>
                        <div class="card">
                        
                            <section class="cara">
                                <div class="caraNombre">
                                    <h1>
                                    ${element.name.toUpperCase()}
                                    </h1>
                                </div>
                                
                                <section>
                                    <img class="avatar" src = ${element.gender === 'F'
                                    //Operador condicional (ternario)//
                                    ? ''+avatarMujer[Math.abs(Math.round((Math.random() * avatarMujer.length-4)+1))]+''
                                    : ''+avatarHombre[Math.abs(Math.round((Math.random() * avatarHombre.length-3)+1))]+''} width= 180px>
                                    <img class="bandera" 
                                    src="https://www.fiba.basketball/api/img/team/logoflag/0?sizeType=Medium&backgroundType=Light&patternType=default_medium&eventId=10628&iocCode=${element.noc}" alt="">
                                </section>  
                            </section><!--Fin de class "cara"-->

                            <section class="contraCara">
                            <section class=contraCaraContent>
                                <p>Disciplina: ${element.sport}</p>
                                <p>Evento: ${element.events} </p>
                                <p>Medalla: ${element.medals} </p>
                                <p>País: ${element.team}</p>    
                                <p>Género: ${element.gender}</p>
                                <p>Edad: ${element.age}</p>
                                <p>Estatura: ${element.height}cm</p>
                                <p>Peso: ${element.weight}kg </p>
                            </section>
                            </section>
                        </div> <!--Fin class "card"-->
                    </div>
                </div>
            `;
        mostrar += deportista;
    });
    contenedor.innerHTML = mostrar;
};
mostrarData(data); 
}

//FUNCIÓN PARA BUSCAR POR NOMBRE DE ATLETA CON CLICK
const btnBuscar= document.getElementById ('btnBuscar'); 
btnBuscar.addEventListener('click', ()=> {
    const nameAthlete = document.getElementById("search").value;
    const showFilter = filterName(nameAthlete,dataLimpia);  
    fnCargaGeneral(showFilter);
});

//FUNCIÓN PARA SELECCIONAR GÉNERO CON CLICK
const radioBtnGenero = document.getElementsByName('gender');
for (let i = 0; i < radioBtnGenero.length; i++) {
      radioBtnGenero[i].addEventListener('change', function () {  
        const valueGender = radioBtnGenero[i].value;
        const showGender = filterGender(valueGender,dataLimpia);
        fnCargaGeneral(showGender);
    });
}

// boton de ordenar
// Historia 6 - Ordenar (A-Z / Z-A)
//Declaro mi select
const selectOrdenar = document.getElementById('ordenar');
//Creo el evento para cuando use el seleccionador
selectOrdenar.addEventListener('change', () => {
    contenedor.innerHTML = '';
    const valueOrder = selectOrdenar.value;
    const showOrder = alphabetOrder(dataLimpia,valueOrder);
    fnCargaGeneral(showOrder)
}); 
//


const todosLosTeams =[];
for (let i = 0; i < dataLimpia.length; i++) {
todosLosTeams.push(dataLimpia[i].noc);
}
const teamsUnicos=[];
for (let i = 0; i < todosLosTeams.length; i++) {
    let pais= todosLosTeams[i];
    if (teamsUnicos.indexOf(pais) < 0) {
        teamsUnicos.push(pais);
    }
}

function cargar() {
    teamsUnicos
    const select = document.getElementById("paises"); //Seleccionamos el select
    for(let i=0; i < teamsUnicos.length; i++){ 
        let option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = teamsUnicos[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
}
cargar();



  // funcionalidad boton ordenar

//FUNCIÓN PARA ORDERNAR ALFABÉTICAMENTE LOS NOMBRES DE LOS ATLETAS

// oro 🥇 plata 🥈 bronce 🥉