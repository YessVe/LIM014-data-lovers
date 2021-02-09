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
        const deportistas = `
        <div class="card">

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
