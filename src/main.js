//Importaré la data

import {unique, allNames, cleanData,filterName,alphabetOrder, filterGender,allCountries, filterCountry,allSport, filterSport, uniqueCountry, countMedals, /* ageOrder */} from './data.js';
//import athletes from './data/athletes/athletes.js';
import copyAthletes from './data/athletes/athletes.js';

// creo la variable que va a llamar desde el archivo donde
//está la info, la propiedad solo de 'athletes'
const dataAthletes = (copyAthletes.athletes);
const contarAtletas =document.getElementById('contarAtletas');
const contarMedallas =document.getElementById('contarMedallas');
const contenedor = document.getElementById ('contenedor');

//FUNCIÓN PARA EL BOTÓN LIMPIAR
const btnReset = document.getElementById('limpiar');
btnReset.addEventListener('click',()=>{
    fnCargaGeneral(dataLimpia);
    contarMedallas.innerHTML="";
    document.getElementById('search').value="";
    document.getElementById('ordenar').value="";//las tarjetas se quedan ordenadas
    document.getElementsByName('gender').value="";//el input se queda marcado
    selectPaises.value="";
    selectDeporte.value="";
    //aquí faltaría agregar la limpieza del filtro DATOS CURISOS
})

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
     
        let showMedals = countMedals(showGender);
        let x= showMedals.split("-");//busca el guión y lo parte convirtiéndolo en un array - "es poderoso"
        contarMedallas.innerHTML= "Medallas: "+"Oro 🥇: "+x[0]+", "+"Plata 🥈: "+x[1]+", "+"Bronce 🥉: "+x[2]+".";
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
    
    let showMedals = countMedals(showCountry);
    let x= showMedals.split("-");
    contarMedallas.innerHTML= "Medallas: "+"Oro 🥇: "+x[0]+", "+"Plata 🥈: "+x[1]+", "+"Bronce 🥉: "+x[2]+".";
    
}); 

//FUNCIÓN PARA FILTRAR POR DEPORTES
    //Creo el evento para cuando use el seleccionador de deportes
const todosLosDeportes = allSport(dataAthletes);
const deportesUnicos= unique(todosLosDeportes);

deportesUnicos.sort();
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

//FUNCIÓN PARA TENER LOS 5 ATLETAS MÁS JÓVENES Y LOS 5 MÁS LONGEVOS
const ordenarEdad = dataLimpia.sort((a,b) => (a.age < b.age ? -1 : 1));
console.log(ordenarEdad);
const atletas5Jovenes = ordenarEdad.slice(0,5); // el slice me saca elementos de mi array.
//el 0 es mi inicio y el 5 es la última posición, pero no lo incluye en el array
const atletas5Viejos = ordenarEdad.slice(ordenarEdad.length-5,ordenarEdad.length);
console.log(atletas5Jovenes);
console.log(atletas5Viejos); 

/* const top5 = ageOrder(dataLimpia);
console.log(top5); *///experimento con el archivo data.js

//FUNCIÓN PARA SABER EL ATLETA MÁS JOVEN Y MÁS LONGEVO
 function minMax(items) {
    var minMaxArray = items.reduce(function (acumulador, currentValue) {
            acumulador[0] = (!acumulador[0])? currentValue.age : Math.min(acumulador[0], currentValue.age);
            acumulador[1] = (!acumulador[1])? currentValue.age : Math.max(acumulador[1], currentValue.age); 
            return acumulador;
        }, []);

    return minMaxArray;
} 
//1er parámetro recibe como argumento una función... el 2do depende de lo que le estemos pasando: array vacío.
//acumulador toma el valor del array vacío
//
console.log(minMax(dataLimpia)); 

//FUNCIÓN PARA CONOCER LA EDAD PROMEDIO
 var sumatoriaEdades = dataLimpia.reduce((acumulador, siguienteValor) => acumulador+siguienteValor.age, 0); 
 //Si no hay nada, regresamos un objeto con edad = 0. No hay necesidad de devolver el nombre, pues no es necesario */
 var promedioEdad = Math.round(sumatoriaEdades / dataLimpia.length);
 console.log(sumatoriaEdades);
console.log(promedioEdad); 