//Importaré la data
//import { example } from './data.js';
//import athletes from './data/athletes/athletes.js';
import copyAthletes from './data/athletes/athletes.js';


/*debugger;
connst buscador = document.getElementById ("search");
const btnBuscar= document.getElementById ('btnBuscar'); 
console.log(example,copyAthletes);/*

// creo la variable que va a llamar desde el archivo donde
//está la info, la propiedad solo de 'athletes'


 const dataExm= [1,2,3,4,5,2,3,4,6,1,10]
/*const filtrarDataAthletes =dataExm.filter((item,index) => {
    return dataExm.indexOf(item) === index
})
console.log (filtrarDataAthletes); */

const dataAthletes = (copyAthletes.athletes);
const contenedor = document.getElementById ("contenedor");
//esta var me va a reconocer todos los valores
const data = Object.values(dataAthletes);

//array para las imágenes de femenino o masculino
let avatarHombre = ["./images/card_M_1.png", "./images/card_M_2.png", "./images/card_M_3.png"];
let avatarMujer = ["./images/card_F_1.png","./images/card_F_2.png","../images/card_F_3.png","./images/card_F_4.png"];

//FUNCIÓN PARA LA VISUALIZACIÓN DE CARDS
const mostrarData = (parametro) => {
    let mostrar ='';
    parametro.forEach((element) => {
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
                    src="https://restcountries.eu/data/${element.noc.toLowerCase()}.svg" alt="">
                    </section>
                </section>

                <section class="contraCara">
                    <section class="contraCaraContent">
                        <p>
                        Nombre: ${element.name}
                        </p>
                        <p>
                        Género: ${element.gender}
                        </p>
                        <p>
                        País: ${element.team}
                        </p>
                    <section>
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

/*
btnBuscar.addEventListener('click', function() {
    const showFilter = filterItems(document.getElementById("search"));
   
});

const search = document.getElementById('search');
function filterItems(query) {
    return dataAthletes.filter(function(el) {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })

const limpiarContenedor = () => {
  contenedor.innerHTML = '';
  return false;
};
btnBuscar.addEventListener('keyup', (event) => {
  const term = event.target.value.toLowerCase();
  const filterChampions = namFilt(data, term);
  cleanContainer();
  showData(filterChampions);
});

  }; */
  