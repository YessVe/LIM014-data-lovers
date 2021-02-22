//Importaré la data
//import { athletesOrdenados} from './data.js';
import copyAthletes from './data/athletes/athletes.js';

// creo la variable que va a llamar desde el archivo donde
//está la info, la propiedad solo de 'athletes'
const dataAthletes = (copyAthletes.athletes);
const contenedor = document.getElementById ("contenedor");

//FUNCIÓN PARA OBTENER ATLETAS SIN DUPLICAR
    //1ro obtengo los nombres de toda la data
    const todosLosNombres =[];
    for (let i = 0; i < dataAthletes.length; i++) {
    todosLosNombres.push(dataAthletes[i].name);
    }
    /* console.log(todosLosNombres); */

     //2do voy a sacar los nombres sin que se repita
    const nombresUnicos=[];
    for (let i = 0; i < todosLosNombres.length; i++) {
        let nombre= todosLosNombres[i];
        if (nombresUnicos.indexOf(nombre) < 0) {
            nombresUnicos.push(nombre);
        }
    }
    /* console.log(nombresUnicos); */

    //3ro voy a crear la data para los nombres de atletas que son únicos
    const dataLimpia=[];
    for (let i = 0; i < nombresUnicos.length; i++) {
        let nombrePU = nombresUnicos[i];
        let eventos = [];
        let todosEventos = [];
        let todasMedallas = [];

        for (let j = 0; j < dataAthletes.length; j++) {
            if (nombrePU == dataAthletes[j].name) {
                
                eventos.push(dataAthletes[j].event, dataAthletes[j].medal);
                todosEventos.push(dataAthletes[j].event);
                todasMedallas.push(dataAthletes[j].medal);
                var datos = {
                    name: dataAthletes[j].name,
                    gender: dataAthletes[j].gender,
                    height: dataAthletes[j].height,
                    weight: dataAthletes[j].weight,
                    sport: dataAthletes[j].sport,
                    team: dataAthletes[j].team,
                    noc: dataAthletes[j].noc,
                    age: dataAthletes[j].age,
                    eventsA: eventos,
                    Events: todosEventos,
                    medals: todasMedallas};   
            }
        }dataLimpia.push(datos);   
    }
console.log(dataLimpia);
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
                                <p>Nombre:${element.name}</p>
                                <p>País:${element.team}</p>
                                <p>Estatura:${element.height}cm</p>
                                <p>Peso:${element.weight}kg </p>
                                <p>Dinamica:${element.sport}</p>
                                <p>Eventos:${element.eventsA}</p>
                                <p>Eventos:${element.Events}</p>
                                <p>Medallas:${element.medals}</p>

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
btnBuscar.addEventListener('click', function() {
    const nameAthlete = document.getElementById("search").value;
    const showFilter = filterItems(nameAthlete);
    function filterItems(query){
        return dataLimpia.filter(function(el) {
            return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
      }
    fnCargaGeneral(showFilter);
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


const atleta = {
    "name": "William Peixoto Arjona",
    "gender": "M",
    "height": "186",
    "weight": "78",
    "sport": "Volleyball",
    "team": "Brazil",
    "noc": "BRA",
    "age": 37,
    "events":[
        {"event": "Volleyball Men's Volleyball",
        "medal": "Gold"},
        {"event": "Volleyball Mixto Volleyball",
        "medal": "silver"}]

  };
console.log(atleta);
