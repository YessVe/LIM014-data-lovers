# Juego Olímpicos de Rio de Janeiro

# Data Lovers

## Índice

- [Juego Olímpicos de Rio de Janeiro](#juego-olímpicos-de-rio-de-janeiro)
- [Data Lovers](#data-lovers)
  - [Índice](#índice)
  - [1. Resumen del proyecto](#1-resumen-del-proyecto)
  - [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
    - [HTML y CSS](#html-y-css)
    - [DOM y Web APIs](#dom-y-web-apis)
    - [JavaScript](#javascript)
    - [Testing](#testing)
    - [Estructura del código y guía de estilo](#estructura-del-código-y-guía-de-estilo)
    - [Git y GitHub](#git-y-github)
    - [UX](#ux)
  - [4. Consideraciones generales](#4-consideraciones-generales)
  - [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
    - [Historias de usuario](#historias-de-usuario)
    - [Diseño de la Interfaz de Usuario](#diseño-de-la-interfaz-de-usuario)
      - [Prototipo de baja fidelidad](#prototipo-de-baja-fidelidad)
      - [Prototipo de alta fidelidad](#prototipo-de-alta-fidelidad)
    - [Implementación de la Interfaz de Usuario (HTML/CSS/JS)](#implementación-de-la-interfaz-de-usuario-htmlcssjs)
    - [Pruebas unitarias](#pruebas-unitarias)
  - [6. Checklist](#6-checklist)

***

## 1. Resumen del proyecto

Se ha construido una ** _página web_ para visualizar un _conjunto (set) de datos_** 
que se adecúe a lo que nuestro usuario necesite. Las necesidades serán descritas
en las historias de usuarias líneas abajo. Sin embargo, el entregable final es
una página web que permita **visualizar la data, filtrarla, ordenarla y hacer algún
cálculo agregado**. Con cálculo agregado, se refiere a distintos cálculos que se 
puede hacer con la data para mostrar información aún más relevante para los usuarios 
(promedio, el valor máximo o mínimo, etc).

Los datos sobre las preferencias de usuarios y la información con la que se trabajará
están en los siguientes links:

* [Juegos Olímpicos de Río de Janeiro](src/data/athletes/athletes.json).
  Este set nos proporciona la lista de los atletas que ganaron medallas en las
  olímpiadas de Río de Janeiro.
  - [Investigación con interesados en juegos olímpicos de Río de Janeiro](/src/data/athletes/README.md)

## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] [Uso de selectores de CSS.](https://css-tricks.com/almanac/selectors/)
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [ ] [Uso de selectores del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Localizando_elementos_DOM_usando_selectores).
* [ ] [Manejo de eventos del DOM.](https://www.w3schools.com/js/js_events.asp)
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] [Uso de bucles (for | for..in | for..of | while)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n)
* [ ] [Uso de funciones (parámetros | argumentos | valor de retorno)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones)
* [ ] [Manipular arrays (filter | map | sort | reduce)](https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
* [ ] [Manipular objects (key | value)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)
* [ ] [Uso ES modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos) ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] [Diferenciar entre expression y statements.](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [ ] [Diferenciar entre tipos de datos atómicos y estructurados.](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] [Organizar y dividir el código en módulos (Modularización)](https://medium.com/@sebastianpaduano/modularizaci%C3%B3n-en-javascript-538bd6c75fa)
* [ ] Uso de identificadores descriptivos ([Nomenclatura](http://snowdream.github.io/javascript-style-guide/javascript-style-guide/es/naming-conventions.html) | [Semántica](https://geekytheory.com/semantica-coder))
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] [Uso de comandos de git (add | commit | pull | status | push)](https://github.com/jlord/git-it-electron)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |[tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging))

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: Toma como referencia 4 semanas.

## 5. Criterios de aceptación mínimos del proyecto

Los criterios para considerar que este proyecto está completado están de acuerdo
a las historias de usuario que a continuación se detallan.

### Historias de usuario

La o el usuario es un(a) fanático(a) de los Juegos Olímpicos y sus inquietudes y
necesidades serán detalladas líneas abajo.

* [ ] Usuario 1:
  **Yo como fan quiero** ver a todos los deportistas **para** tener una vista general de 
  los que participaron

    --> Criterio de aceptación:
        Al ingresar a nuestra plataforma se verá todos los deportistas en cards.
        En esta card, al pasar el mouse, se volteará la tarjeta del deportista y se
        podrá visualizar sus datos como peso, estatura, edad, disciplina en la que 
        participaron y medalla. Para saber su nacionalidad, se mostrará la 
        bandera del país que representa en la cara principal.

    --> Definición de lo terminado:
        -La vizualización de cards se ve sin duplicados con la información correspondiente del atleta.
        -La vizualización de la data de los atletas recibió su testeo correspondiente.
        -Se usó el Slint para las buenas prácticas.
        -Fue subido al Github.

* [ ] Usuario 2:
  **Yo como fan quiero** buscar a un atleta **para** saber sus datos y si ganó en los juegos.

    --> Criterio de aceptación:
        En la página principal, habrá un "buscador por nombre de atleta". Estará ubicado en la 
        esquina superior y solo aceptará nombres. Cuando el usuario haya escrito y dado enter o 
        click en la lupa, aparecerá el card del atleta o un mensaje que diga "Atleta no encontrad@".

    --> Definición de lo terminado:
        -El buscador funciona tal como se esperaba.
        -La función usada para buscador de atletas recibió su testeo correspondiente.
        -Se usó el Slint para las buenas prácticas.
        -Fue subido al Github.

* [ ] Usuario 3:
  **Yo como fan quiero** ordenar los nombres de los atletas alfabéticamente **para** tener una 
  visualización más ordenada

    --> Criterio de aceptación:
        Al inicio, habrá una opción desplegable para ordenar los nombres de los atletas de la 
        A - Z o viceversa. Cuando se haya escogido, los cards con la información de los atletas 
        se reorganizará. 

    --> Definición de lo terminado:
        -El odenador alfabeticamente tal como se esperaba.
        -La función usada para el ordenador alfabeticamente de atletas recibió su testeo correspondiente.
        -Se usó el Slint para las buenas prácticas.
        -Fue subido al Github.

* [ ] Usuario 4:
  **Yo como fan quiero** filtrar a los deportistas **para** conocerlos según su género.

    --> Criterio de aceptación:
        A través de una opción de botón en radio, se podrá elegir el género "femenino"
        o "masculino". Presionando cualquiera de los dos, se mostrará las tarjetas con
        los atletas según lo marcado.

    --> Definición de lo terminado:
        -El filtro de género funciona tal como se esperaba.
        -La función usada para el filtro de géneros de atletas recibió su testeo correspondiente.
        -Se usó el Slint para las buenas prácticas.
        -Fue subido al Github.

* [ ] Usuario 5:
  **Yo como fan quiero** filtrar a los deportistas **para** conocerlos según el país que representó.

    --> Criterio de aceptación:
        En la página principal, habrá un seleccionador de países. Este mostrará todas 
        los países que participaron en los juegos y que llevaron alguna medalla. 
        Así, el usuario podrá elegir uno de ellos y mostrará los atletas según su nacionalidad.

    --> Definición de lo terminado:
        -El filtro del seleccionador de países funciona tal como se esperaba.
        -La función usada para el filtro recibió su testeo correspondiente.
        -Se usó el Slint para las buenas prácticas.
        -Fue subido al Github.

* [ ] Usuario 6:
  **Yo como fan quiero** filtrar a los deportistas **para** conocerlos según las disciplinas.

    --> Criterio de aceptación:
        En la página principal, habrá un seleccionador de disciplinas (por íconos). 
        Este mostrará todas las que se dieron en los juegos. Así, el usuario podrá 
        elegir uno de ellos y mostrará los atletas que participaron en él.

    --> Definición de lo terminado:
        -El filtro del seleccionador de deportes funciona tal como se esperaba.
        -La función usada para el filtro de deportes recibió su testeo correspondiente.
        -Se usó el Slint para las buenas prácticas.
        -Fue subido al Github.

* [ ] Usuario 7:
  **Yo como fan quiero** saber cuáles atletas son los cinco más jóvenes y cinco más viejos; así como la edad promedio.
  **para** tener un conocimiento de datos curiosos.

  --> Criterio de aceptación:
        En la página principal, habrá una sección "Datos Curiosos". Esta tendrá opciones de seleccionar a los atletas 
        más jóvenes y más longevos. También, habrá un botón para conocer la edad promedio. El mensaje saldrá en la página 
        principal dentro de un cuadro.

  --> Definición de lo terminado:
        -EL top 5 de atletas más jóvenes y más longevos funciona tal como se esperaba.
        -La función usada para el top 5 recibió su testeo correspondiente.
        -Se usó el Slint para las buenas prácticas.
        -Fue subido al Github.

* [ ] Usuario 8:
  **Yo como fan quiero** conocer el número de medallas en oro, plata y bronce según el género y país **para** tener un
  conocimiento general cuando elijo el filtro país o género.

  --> Criterio de aceptación:
      Cada vez que se elija el filtro de género o algún país, debajo del header aparecerá el número de medallas según su
      tipo (oro, plata y bronce). Así mismo, se conocerá cuántos atletas hay luego de haber realizado ese filtro.

  --> Definición de lo terminado:
      -La función del botón de promedio de edad funciona tal como se esperaba.
      -Se usó el Slint para las buenas prácticas.
      -Fue subido al Github.

* [ ] Usuario 9:
  **Yo como fan quiero** realizar una nueva búsqueda **para** continuar explorando con otros filtros

  --> Criterio de aceptación:
      Se tiene un botón de "Limpiar Filtros" para borrar todos los filtros previamente seleccionados
      por el o la usuaria.

  --> Definición de lo terminado:
      -El botón que borra los filtros previamente escogidos funciona como se esperaba.
      -Se usó el Slint para las buenas prácticas.
      -Fue subido al Github una vez terminado.


### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

* [ ] *1er Prototipo de baja fidelidad

![2021-02-03 (3)](https://user-images.githubusercontent.com/77126999/107105312-946fc980-67f3-11eb-810e-6960e47caef9.png)


* [ ] 2do Prototipo de baja fidelidad

![Prototipo de baja fidelidad](https://user-images.githubusercontent.com/77126999/106932071-453b7300-66e5-11eb-8c74-684eff2cd697.jpeg)

#### Prototipo de alta fidelidad

* [ ] 1er Prototipo de alta fidelidad

  El 1er prototipo de alta fue como sigue:

  ![2021-02-05 (3)](https://user-images.githubusercontent.com/77126999/107122742-8196dc80-6867-11eb-99e0-f3dc08b28c53.png)

  El feedback de 3 usuarios para este prototipo fue que los navegadores y opciones 
  de filtro deben estar mejor ordenados: todos a la derecha y mismo tamaño. Así, 
  también, permitirá ver mejor la imagen principal del aplicativo.

* [ ] 2do Prototipo de alta fidelidad

  Se tomó en consideración la opinión de potenciales usuarios para reorganizar los 
  navegadores y opciones de filtro. El segundo prototipo que se tiene es el siguiente:

  ![Prototipo de alta fidelidad](https://user-images.githubusercontent.com/77126999/107132696-39031180-68af-11eb-9585-c5969a2d9ad6.jpeg)

  El feedback de otros 2 usuarios es que entienden de qué se trata la página. También, 
  opinan que tiene un aspecto de álbum y las tarjetas con la información de los atletas 
  deberían ser más pequeñas. Otro punto de vista es que las opciones de filtro deben 
  ser más reducidas y estar hacia el lado izquierdo. 

* [ ] Prototipo final de alta fidelidad

  Luego de tener una última retroalimentación de los potenciales usuarios, se llegó al siguiente prototipo final.

  ![Prototipo de alta fidelidad final](https://user-images.githubusercontent.com/77126999/107290635-e6ebf880-6a34-11eb-9bc7-4eed0f0c883b.png)


### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Como mínimo, la implementación tiene:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
