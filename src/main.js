//Importaré la data

import {unique, allNames, cleanData,filterName,alphabetOrder, filterGender,allCountries, filterCountry,allSport, filterSport, uniqueCountry, /* countMedals */} from './data.js';
//import athletes from './data/athletes/athletes.js';
import copyAthletes from './data/athletes/athletes.js';

// creo la variable que va a llamar desde el archivo donde
//está la info, la propiedad solo de 'athletes'
const dataAthletes = (copyAthletes.athletes);
const contarAtletas =document.getElementById("contarAtletas");
const contarMedallas =document.getElementById("contarMedallas");
const contenedor = document.getElementById ("contenedor");

//FUNCIÓN PARA OBTENER ATLETAS SIN DUPLICAR
    //1ro obtengo los nombres de toda la data
    const todosLosNombres = allNames(dataAthletes);
    //dataAthletes es el argumento y puede ir cambiando a dataPokemon por ejemplo allNames(dataPokemon)
     //2do voy a sacar los nombres sin que se repita
    const nombresUnicos= unique (todosLosNombres);
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
contarAtletas.innerHTML="Atletas: "+dataLimpia.length;
}

//FUNCIÓN PARA BUSCAR POR NOMBRE DE ATLETA CON CLICK
const txtBuscar= document.getElementById ('search'); 
txtBuscar.addEventListener('keyup', ()=> {
    const nameAthlete = document.getElementById("search").value;
    const showFilter = filterName(nameAthlete,dataLimpia);  
    if (showFilter=="") {
        contenedor.innerHTML="Atleta no encontrad@";   
    } else {
        fnCargaGeneral(showFilter);
    }
});

//FUNCIÓN PARA ORDENAR ALFABÉTICAMENTE (A-Z / Z-A)
const selectOrdenar = document.getElementById('ordenar');
selectOrdenar.addEventListener('change', () => {
    contenedor.innerHTML = '';
    const valueOrder = selectOrdenar.value;
    const showOrder = alphabetOrder(dataLimpia,valueOrder);
    fnCargaGeneral(showOrder)
}); 

//FUNCIÓN PARA SELECCIONAR GÉNERO CON CLICK
const radioBtnGenero = document.getElementsByName('gender');
for (let i = 0; i < radioBtnGenero.length; i++) {
      radioBtnGenero[i].addEventListener('change', () => {  
        const valueGender = radioBtnGenero[i].value;
        const showGender = filterGender(valueGender,dataLimpia);
        fnCargaGeneral(showGender);
        let oroMedalla = 0;
        let plataMedalla = 0;
        let bronceMedalla = 0;
        //el acumulador por LEY se declara fuera del loop
        for (let i = 0; i < showGender.length; i++) {
            let cantidadMedalla=showGender[i].medals; 

            for (let j = 0; j < cantidadMedalla.length; j++) {    
                if (cantidadMedalla[j]=="Gold") {
                    oroMedalla = oroMedalla+1;
                } else if (cantidadMedalla[j]=="Silver") { 
                    plataMedalla = plataMedalla+1;
                } else if (cantidadMedalla[j]=="Bronze") {
                    bronceMedalla = bronceMedalla+1;
                }
            }
        }

      /*   countMedals(showGender); */
        contarMedallas.innerHTML="Medallas: "+"Oro: "+oroMedalla+", "+"Plata: "+plataMedalla+", "+"Bronce: "+bronceMedalla+".";
    });
}


//FUNCIÓN PARA FILTRAR PAÍSES
const todosLosPaises =allCountries(dataAthletes);
const paisesUnicos =uniqueCountry(todosLosPaises);

const selectPaises = document.getElementById("paises");
for(let i=0; i < paisesUnicos.length; i++){ 
    let option = document.createElement("option"); //Creamos la opcion
    option.innerHTML = paisesUnicos[i]; //Metemos el texto en la opción + su bandera - la bandera viene del link
    option.setAttribute('value',paisesUnicos[i])
    selectPaises.appendChild(option); //Metemos la opción en el select
}
selectPaises.addEventListener('change', () => {
    const valueCountry = selectPaises.value; 
    const showCountry = filterCountry(valueCountry,dataLimpia);
    fnCargaGeneral(showCountry); 
        let oroMedalla = 0;
        let plataMedalla = 0;
        let bronceMedalla = 0;
        //el acumulador por LEY se declara fuera del loop
        for (let i = 0; i < showCountry.length; i++) {
            let cantidadMedalla=showCountry[i].medals; 
            for (let j = 0; j < cantidadMedalla.length; j++) {    
                if (cantidadMedalla[j]=="Gold") {
                    oroMedalla = oroMedalla+1;
                } else if (cantidadMedalla[j]=="Silver") { 
                    plataMedalla = plataMedalla+1;
                } else if (cantidadMedalla[j]=="Bronze") {
                    bronceMedalla = bronceMedalla+1;
                }
            }
        }
    contarMedallas.innerHTML="Medallas: "+"Oro: "+oroMedalla+", "+"Plata: "+plataMedalla+", "+"Bronce: "+bronceMedalla+".";
}); 

//FUNCIÓN PARA FILTRAR POR DEPORTES
    //Creo el evento para cuando use el seleccionador de deportes
const todosLosDeportes = allSport(dataAthletes);
const deportesUnicos= unique(todosLosDeportes);

deportesUnicos.sort()
const selectDeporte = document.getElementById("deportes"); 
for(let i=0; i < deportesUnicos.length; i++){ 
    let option = document.createElement("option");
    option.innerHTML = deportesUnicos[i]; 
    selectDeporte.appendChild(option);
    option.setAttribute('value', deportesUnicos[i])
}
    //Creo el evento para cuando use el seleccionador de paises
selectDeporte.addEventListener('change', () => {
    const valueSport = selectDeporte.value;
    const showSport = filterSport(valueSport,dataLimpia);
    fnCargaGeneral(showSport)
}); 

//FUNCIÓN PARA DEFINIR LOS TOP 10
/* let soloMedallas = [];
dataLimpia.forEach(e => {
    soloMedallas.push(e.medals);
});
console.log(soloMedallas);

function minMax(items) {
    var minMaxArray = items.reduce(function (r, n) {
            r[0] = (!r[0])? n : Math.min(r[0], n);
            r[1] = (!r[1])? n : Math.max(r[1], n);
            return r;
        }, []);

    return minMaxArray;
}

console.log(minMax(soloMedallas)); */


// oro 🥇 plata 🥈 bronce 🥉