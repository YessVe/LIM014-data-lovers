import { allNames, unique, cleanData, alphabetOrder,filterName,filterGender,allCountries, filterCountry,allSport, filterSport} from '../src/data.js';

const atletas = [{
  "name": "Denis Mikhaylovich Ablyazin",
  "gender": "M",
  "height": "161",
  "weight": "62",
  "sport": "Gymnastics",
  "team": "Russia",
  "noc": "RUS",
  "age": 24,
  "event": "Gymnastics Men's Team All-Around",
  "medal": "Silver"
},
{
  "name": "Denis Mikhaylovich Ablyazin",
  "gender": "M",
  "height": "161",
  "weight": "62",
  "sport": "Gymnastics",
  "team": "Russia",
  "noc": "RUS",
  "age": 24,
  "event": "Gymnastics Men's Horse Vault",
  "medal": "Silver"
},
{
  "name": "Matthew \"Matt\" Abood",
  "gender": "M",
  "height": "197",
  "weight": "92",
  "sport": "Swimming",
  "team": "Australia",
  "noc": "AUS",
  "age": 30,
  "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
  "medal": "Bronze"
}]

//HISTORIA DE USUARIO 1
//Traer solo los nombres de la data completa
describe('listNames', () => {
    it('debe mostrarme solo los nombres', () => {
      const a = [{name:'William Peixoto Arjona', team:'Italy', sport:'football'},
                {name:'William Peixoto Arjona', team:'Italy', sport:'football mixte'},
                {name:'Chloe Esposito', team:'Mexico', sport:'Taekwondo'}]

      const b = ['William Peixoto Arjona','William Peixoto Arjona','Chloe Esposito'];
      expect(allNames(a)).toEqual(b);
    });
  });

//HISTORIA DE USUARIO 1
//Obtener solo valores como nombre, país y deporte de forma única
describe('unique', () => {
  it('debe eliminar valores de nombres, países y deportes duplicados', () => {
    const a = ['William Peixoto Arjona', 'William Peixoto Arjona', 'Chloe Esposito'];
    const b = ['William Peixoto Arjona', 'Chloe Esposito'];
    expect(unique(a)).toEqual(b);
  });
});

//HISTORIA DE USUARIO 1
//Mostrar toda la información del atleta sin que existan duplicados
describe('Mostrar data del atleta según el nombre', () => {
  it('Debe devolver la data del atleta', () => {
    const a= ["Denis Mikhaylovich Ablyazin","Matthew \"Matt\" Abood"]
    const b = [{
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "events": ["Gymnastics Men's Team All-Around","Gymnastics Men's Horse Vault"],
      "medals": ["Silver","Silver"]
    },
    {
      "name": "Matthew \"Matt\" Abood",
      "gender": "M",
      "height": "197",
      "weight": "92",
      "sport": "Swimming",
      "team": "Australia",
      "noc": "AUS",
      "age": 30,
      "events": ["Swimming Men's 4 x 100 metres Freestyle Relay"],
      "medals": ["Bronze"]
    }];
    expect(cleanData(a, atletas)).toEqual(b);
  });
});

//HISTORIA DE USUARIO 2
//Buscador por nombre de atleta
describe('prueba para la funcion search', () => {
  it('Debe devolver el nombre del atleta que coincida con la letra que se ingresa', () => {
    const a= [
      {
        name: 'William Peixoto Arjona',
      },
      {
        name: 'Chloe Esposito',
      },
    ];
    const b = [
      {
        name: 'William Peixoto Arjona',
      },
    ];
    expect(filterName('wIl', a)).toEqual(b);
  });
});

//HISTORIA DE USUARIO 3
//Ordenar alfabéticamente las tarjetas de los atletas
describe('alphabetOrder', () => {
  const a= [
    { name: 'Denis Mikhaylovich Ablyazin'},
    { name: 'Denis Mikhaylovich Ablyazin'},
    { name: 'William Peixoto Arjona'},
    { name: 'Chloe Esposito'},
  ];
  const az = [
    { name: 'Chloe Esposito'},
    { name: 'Denis Mikhaylovich Ablyazin'},
    { name: 'Denis Mikhaylovich Ablyazin'},
    { name: 'William Peixoto Arjona'}
  ];
  const za = [
    { name: 'William Peixoto Arjona'},
    { name: 'Denis Mikhaylovich Ablyazin'},
    { name: 'Denis Mikhaylovich Ablyazin'},
    { name: 'Chloe Esposito'}
  ];
  it('is a function', () => {
    expect(typeof alphabetOrder).toBe('function');
  });

  it('Debe ordenarme a los atleta de a-z', () => {
    expect(alphabetOrder(a, 'a-z')).toEqual(az);
  });

  it('Debe ordenarme a los atleta de z-a', () => {
    expect(alphabetOrder(a, 'z-a')).toEqual(za);
  });
});

//HISTORIA DE USUARIO 4 
//Filtrado de Género 
describe('filterGender', () => { 
  const atletas= [
     { name: 'Denis Mikhaylovich Ablyazin', gender: 'M'}, 
     { name: 'Chloe Esposito', gender: 'F'}, 
     { name: 'William Peixoto Arjona', gender: 'M'}
    ];
  const f = [
     { name: 'Chloe Esposito', gender: 'F'}
    ]; 
  const m = [ 
    { name: 'Denis Mikhaylovich Ablyazin', gender: 'M'}, 
    { name: 'William Peixoto Arjona', gender: 'M'}
    ]; 
    
  it('is a function', () => { expect(typeof filterGender).toBe('function'); });
  it('Debe traerme solo a la chica', () => { expect(filterGender('F', atletas)).toEqual(f); });
  it('Debe traerme solo a los chicos', () => { expect(filterGender('M', atletas)).toEqual(m); });
   }); 


//HISTORIA DE USUARIO 5
//Lista de Paises
describe('listCountry', () => {
  it('debe mostrarme todos los paises', () => {
    const b = ["RUS","RUS","AUS"];
    expect(allCountries(atletas)).toEqual(b);
  });
});
//Filtrado de Pais
describe('filterCountry', () => { 
  const b = [{
    "name": "Matthew \"Matt\" Abood",
    "gender": "M",
    "height": "197",
    "weight": "92",
    "sport": "Swimming",
    "team": "Australia",
    "noc": "AUS",
    "age": 30,
    "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
    "medal": "Bronze"
    }]; 
    it('is a function', () => { expect(typeof filterCountry).toBe('function'); });
    it('Debe traerme solo al que es australiano', () => 
    { expect(filterCountry("AUS",atletas)).toEqual(b); });
    }); 

//HISTORIA DE USUARIO 6 
//Lista de Deportes
describe('listSport', () => {
  it('debe mostrarme todos los Deportes', () => {
    const b = ["Gymnastics","Gymnastics","Swimming"];
    expect(allSport(atletas)).toEqual(b);
  });
});
//Filtrado de Deporte
describe('filterSport', () => { 
  const b = [{
    "name": "Matthew \"Matt\" Abood",
    "gender": "M",
    "height": "197",
    "weight": "92",
    "sport": "Swimming",
    "team": "Australia",
    "noc": "AUS",
    "age": 30,
    "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
    "medal": "Bronze"
  }]; 
  it('is a function', () => { expect(typeof filterCountry).toBe('function'); });
  it('Debe traerme solo al que participó en gimnasia', () => 
  { expect(filterSport("Swimming",atletas)).toEqual(b); });
  }); 

  
