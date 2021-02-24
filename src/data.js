//1ro obtengo los nombres de toda la data
export const allNames = (data) => { // data = []
  const todosLosNombres = [];
  for (let i = 0; i < data.length; i++) {
    todosLosNombres.push(data[i].name);
  }
  return todosLosNombres;
};

//2do voy a sacar los nombres sin que se repita
export const uniqueNames = (dataNames) => {
  const nombresUnicos = [];
  for (let i = 0; i < dataNames.length; i++) {
    let nombre = dataNames[i];
    if (nombresUnicos.indexOf(nombre) < 0) {
      nombresUnicos.push(nombre);
    }
  }
  return nombresUnicos;
};

//3ro voy a crear la data para los nombres de atletas que son únicos
export const cleanData = (dataNames, data) => {
  const dataLimpia = [];
  for (let i = 0; i < dataNames.length; i++) {
    let nombrePU = dataNames[i];
    let todosEventos = [];
    let todasMedallas = [];

    for (let j = 0; j < data.length; j++) {
      if (nombrePU == data[j].name) {

        todosEventos.push(data[j].event);
        todasMedallas.push(data[j].medal);
        var datos = {
          name: data[j].name,
          gender: data[j].gender,
          height: data[j].height,
          weight: data[j].weight,
          sport: data[j].sport,
          team: data[j].team,
          noc: data[j].noc,
          age: data[j].age,
          events: todosEventos,
          medals: todasMedallas,
        };
      }
    }
    dataLimpia.push(datos);
  }
  return dataLimpia;
}

export const filterName = (input, data) => {
  return data.filter((el) => {
    return el.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
  })
};

export const alphabetOrder = (first, condition) => {
  //*La variable me servirá para ordenar las primeras letras del nombre del atleta  
  const result = first;
  if (condition === 'a-z') {
    result.sort((a, b) => {
    /* Si la comparacion resulta verdadero tomara como  valor "1" para que vaya a la
    primera posición */
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return -1;
    });
  }
  if (condition === 'z-a') {
    result.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
      }
      return -1;
    });
  }
  return result;
}; 

export const filterGender = (input, data) => {
  return data.filter((el) => {
    return el.gender.indexOf(input) > -1;
  })
};


  /* if (query==0 || query=="" || isNaN(query) || query==Number) {
    throw TypeError("Escribe letras, por favor")
  } */
