//Importaré la data
//import { example } from './data.js';
//import athletes from './data/athletes/athletes.js';
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
        let todosEventos = "";
        let todasMedallas = "";

        for (let j = 0; j < dataAthletes.length; j++) {
            if (nombrePU == dataAthletes[j].name) {
                
                todosEventos = todosEventos + " | " + dataAthletes[j].event;
                todasMedallas = todasMedallas + " | " + dataAthletes[j].medal;
                var datos = "{" +
                    String.fromCharCode(34) + "name" + String.fromCharCode(34) + ":" + String.fromCharCode + dataAthletes[j].name + String.fromCharCode(34) + "," +
                    String.fromCharCode(34) + "gender" + String.fromCharCode(34) + ":" + String.fromCharCode + dataAthletes[j].gender + String.fromCharCode(34) + "," +
                    String.fromCharCode(34) + "height" + String.fromCharCode(34) + ":" + String.fromCharCode + dataAthletes[j].height + String.fromCharCode(34) + "," +
                    String.fromCharCode(34) + "weight" + String.fromCharCode(34) + ":" + String.fromCharCode + dataAthletes[j].weight + String.fromCharCode(34) + "," +
                    String.fromCharCode(34) + "sport" + String.fromCharCode(34) + ":" + String.fromCharCode + dataAthletes[j].sport + String.fromCharCode(34) + "," +
                    String.fromCharCode(34) + "team" + String.fromCharCode(34) + ":" + String.fromCharCode + dataAthletes[j].team + String.fromCharCode(34) + "," +
                    String.fromCharCode(34) + "noc" + String.fromCharCode(34) + ":" + String.fromCharCode + dataAthletes[j].noc + String.fromCharCode(34) + "," +
                    String.fromCharCode(34) + "age" + String.fromCharCode(34) + ":" + String.fromCharCode + dataAthletes[j].age + String.fromCharCode(34) + "," +
                    String.fromCharCode(34) + "event" + String.fromCharCode(34) + ":" + String.fromCharCode + todosEventos + String.fromCharCode(34) + "," +
                    String.fromCharCode(34) + "medal" + String.fromCharCode(34) + ":" + String.fromCharCode + todasMedallas + String.fromCharCode(34) + "," +
                    "}"
            }   
        }
        dataLimpia.push(datos);
    } 
   
 
fnCargaGeneral(dataAthletes);

//FUNCIÓN DE CARGA GENERAL DE TODOS LAS CARDS DE ATLETAS
function fnCargaGeneral(dataAthletes) {
        //esta var me va a reconocer todos los valores
        const data = Object.values(dataAthletes);
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

                            <section class="contraCara"></section>
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
        return dataAthletes.filter(function(el) {
            return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
      };    
      fnCargaGeneral(showFilter);
});

