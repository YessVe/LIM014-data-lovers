import { example } from './data.js';
// import data from './data/lol/lol.js';
import copyAthletes from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';


console.log(example,copyAthletes);

const dataAthletes = (copyAthletes.athletes);
const contenedor = document.getElementById ("contenedor");



const data = Object.values(dataAthletes);
const showData = (parametro) => { 
    let show ='';
    
    parametro.forEach((element) => {
        //Plantillas literales (plantillas de cadenas)=>${}//
        const deportistas =
        `<div class="card">
        <img src = ${element.gender === 'F'
        //Operador condicional (ternario)//
        ? './images/chica_uno.png'
        : './images/chico_uno.png'}
            <h1>
            ${element.name}
            </h1>    
            <p> ${element.noc}</p>
        </div>
        `;

        show += deportistas;
    });
    contenedor.innerHTML = show;
};
showData(data);
