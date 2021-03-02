//1ro obtengo los nombres de toda la data
export const allNames = (data) => { // data = []
  const todosLosNombres = [];
  for (let i = 0; i < data.length; i++) {
    todosLosNombres.push(data[i].name);
  }
  return todosLosNombres;
};

//2do voy a sacar los nombres sea del atleta, país, deporte sin que se repita
export const unique = (data) => {
  const valoresUnicos = [];
  for (let i = 0; i < data.length; i++) {
    let valorAtletaDeporte = data[i];
    if (valoresUnicos.indexOf(valorAtletaDeporte) < 0) {
      valoresUnicos.push(valorAtletaDeporte);
    }
  }
  return valoresUnicos;
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

//FUNCIÓN PARA BUSCAR POR NOMBRE DE ATLETA
export const filterName = (input, data) => {
  return data.filter((el) => {
    return el.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
  })
};

//FUNCIÓN PARA ORDENAR ALFABÉTICAMENTE (A-Z / Z-A)
export const alphabetOrder = (first, condition) => {
  //*La variable me servirá para ordenar las primeras letras del nombre del atleta  
  const result = first;
  /* Si la comparacion resulta verdadero tomara como  valor "1" para que vaya a la
    primera posición */
    const compareName = (a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1; 
      if (a.name.toLowerCase() === b.name.toLowerCase()) return 0;
      return -1;
    }
    if (condition === 'a-z') {
      result.sort(compareName);
    }
    const compareNameReverse = (a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return 1; 
      if (a.name.toLowerCase() === b.name.toLowerCase()) return 0;
      return -1;
    }  
    if (condition === 'z-a') {
      result.sort(compareNameReverse);
    }
    return result;
}; 

//FUNCIÓN PARA SELECCIONAR GÉNERO
export const filterGender = (input, data) => {
  return data.filter((el) => {
    return el.gender.indexOf(input) > -1;
  })
};

//FUNCIÓN PARA TENER LA LISTA DE PAÍSES
export const allCountries = (data) =>{
  const todosLosPaises = [];
  for (let i = 0; i < data.length; i++) {
    todosLosPaises.push(data[i].team);
  }
  return todosLosPaises;
}

//FUNCIÓN PARA FILTRAR PAÍSES
export const uniqueCountry = (data) => {
  const valoresUnicosPais = [];
  for (let i = 0; i < data.length; i++) {
    let valorPais = data[i];
    if (valoresUnicosPais.indexOf(valorPais) < 0) {
      valoresUnicosPais.push(valorPais);
    }
  } 
  const valoresUnicosOrdenados= valoresUnicosPais.sort();
  const valorFinalPais = [];
  for (let i = 0; i < valoresUnicosOrdenados.length; i++) {
    let valorPrimero = valoresUnicosOrdenados[i-1];
    let valorSegundo = valoresUnicosOrdenados[i];
    if(valorSegundo.indexOf(valorPrimero)<0){ 
      valorFinalPais.push(valorSegundo);
    } 
  }
  return valorFinalPais;
 };


//FUNCIÓN PARA SELECCIONAR PAÍS
export const filterCountry = (input, data) => {
  return data.filter((el) => {
    return el.team.indexOf(input) > -1;
  })
};

//FUNCIÓN PARA TENER LA LISTA DE DEPORTE
export const allSport = (data) => { // data = []
  const todosLosDeportes = [];
  for (let i = 0; i < data.length; i++) {
    todosLosDeportes.push(data[i].sport);
  }
  return todosLosDeportes;
};

//FUNCIÓN PARA SELECCIONAR DEPORTE
export const filterSport = (select,data) =>{
  return data.filter((el) => {
    return el.sport.indexOf(select) > -1;})
}

//FUNCIÓN PARA CONTAR LA CANTIDAD DE MEDALLAS
/* export const countMedals = (data) => {
  let oroMedalla = 0;
  let plataMedalla = 0;
  let bronceMedalla = 0;
  //el acumulador por LEY se declara fuera del loop
  for (let i = 0; i < data.length; i++) {
      let cantidadMedalla=data[i].medals; 

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

} */
