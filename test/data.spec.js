import { allNames, uniqueNames, filterItems, cleanData, alphabetOrder} from '../src/data.js';

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });
// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });


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
//Lista de nombres
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
// removeDuplicates
describe('uniqueNames', () => {
  it('debe eliminar nombres duplicados', () => {
    const a = ['William Peixoto Arjona', 'William Peixoto Arjona', 'Chloe Esposito'];
    const b = ['William Peixoto Arjona', 'Chloe Esposito'];
    expect(uniqueNames(a)).toEqual(b);
  });
});

//HISTORIA DE USUARIO 1
//Mostrar la data del atleta sin que existan duplicados
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

//Historia de Usuario 6
// Buscador 
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
    expect(filterItems('wIl', a)).toEqual(b);
  });
});

//Historia de Usuario 5
// ordenado
describe('alphabetOrder', () => {
  const a= [
    {
      name: 'Denis Mikhaylovich Ablyazin'
    },
    {
      name: 'William Peixoto Arjona'
    },
    {
      name: 'Chloe Esposito'
    },
  ];
  const az = [
    {
      name: 'Chloe Esposito'
    },
    {
      name: 'Denis Mikhaylovich Ablyazin'
    },
    {
      name: 'William Peixoto Arjona'
    }

  ];
  const za = [
    {
      name: 'William Peixoto Arjona'
    },
    {
      name: 'Denis Mikhaylovich Ablyazin'
    },
    {
      name: 'Chloe Esposito'
    }
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



