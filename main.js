import { getFilm, searchFilms, orderFilms, ordenaFilms } from './data.js';
import data from './data/ghibli/ghibli.js';
const filmsGhibli = getFilm(data);

/////Funcion que muestra y oculta container de peliculas
const showAllFilms = document.getElementById("showAllFilms");
const deleteNodo = (showFilms) => {
  while (showFilms.lastChild) {
    showFilms.removeChild(showFilms.lastChild);
  }
}
//Funcion input search con evento keyup para buscar pelicula desde una primera presion de letra por titulo
const inputSearch = document.getElementById("searchFilm");
let allDataFilms = getFilm(data);
inputSearch.addEventListener('keyup', () => {
  allDataFilms = searchFilms(filmsGhibli, 'title', inputSearch.value);
  showFilmInScreen(allDataFilms);
});

//Funcion para ordenar peliculas por fecha de realizacion mediante evento change y sort en data.js
const order = document.getElementById("orderFilms")
order.addEventListener("change", (event) => {
  const selectOrder = event.target.value;
  if (selectOrder !== "") {
    const filterOrder = orderFilms(allDataFilms, selectOrder);
    showFilmInScreen(filterOrder);
  }
})

//Crear opcion para Ordenar pelis de la AZ y de la ZA, se crea con sort en data.js y evento change
const ordena = document.getElementById("sortAZ")
ordena.addEventListener("change", (event) => {
  const selectOrdena = event.target.value;
  if (selectOrdena !== "") {
    const filterOrdena = ordenaFilms(allDataFilms, selectOrdena);
    showFilmInScreen(filterOrdena);
  }
})

// Boton de inicio para refrescar la pagina y devolver al inicio del contenido con un boton
//con la funcion reload y un evento click
let btnInicio = document.querySelector("#inicio");
btnInicio.addEventListener("click", function () {
  location.reload();
})

//Crear array para traer la data paso a paso, forEach() 
//que ejecuta la función callback una vez por cada elemento del array
const showFilmInScreen = (arrayData) => {
  deleteNodo(showAllFilms);
  arrayData.forEach((element) => {
    const divFilm = document.createElement("div"); //div para cada tarjeta
    divFilm.classList.add("card");
    divFilm.innerHTML = `<img src="${element.poster}" alt="poster">
        <p class="films-titles">${element.title}</p> 
        <p class="subTitleCard"><span class="spanCard">Productor: </span>${element.producer}</p> 
        <p class="subTitleCard"><span class="spanCard">Director: </span>${element.director}</p>
        <p class="subTitleCard"><span class="spanCard">Fecha de realizacion: </span> ${element.release_date}</p>
        <p class="subTitleCard"><span class="spanCard">Puntaje: </span> ${element.rt_score}</p>`;
    divFilm.setAttribute("id", element.id);
    showAllFilms.appendChild(divFilm);

    //Funcion para abrir una nueva pantalla con info de cada peli, se extrae el id de la data
    //para saber de que pelicula hablamos, se utiliza evento click, function 

    const nuevaPantalla = document.getElementById(element.id)
    nuevaPantalla.addEventListener("click", infoPelis);

    //Funcion para extraer la data requerida para la pagina 2 
    function infoPelis() {
      showAllFilms.textContent = '';//La propiedad textContentrepresenta el contenido de texto de un nodo y sus descendientes.
      document.querySelector(".informationHeader").style.display = "none";
      document.querySelector(".contenedoropciones").style.display = "none"

      //Crear una constante para crear contenido independiente a las funciones anteriores, se puede utilizar un article o section de html
      const datosPeli = document.createElement("article");
      datosPeli.classList.add("articleNewS");
      //Se utiliza etiqueta aside que crea contenedor de contenido relacionado al main que en este caso es la descripcion
      //y el contenedor de personajes pero no necesario
      const asideSection = document.createElement('aside');
      asideSection.classList.add("infoPeliculas");//Usar classList es una forma práctica de acceder a la lista de clases de un elemento como una cadena de texto delimitada por espacios a través de element
      asideSection.innerHTML = `<h2 class="titleNewScreen">${element.title}</h2>
<img src=${element.poster} class="ImgPortada">
<div class="boxAside"> 
<p class="asideP"><span class="spanDescription">Director:</span> ${element.director}</p>
<p class="asideP"><span class="spanDescription">Productor:</span> ${element.producer}</p> 
<p class="asideP"><span class="spanDescription">Fecha de realizacion: </span>${element.release_date}</p>
<p class="asideP"><span class="spanDescription">Score: </span>${element.rt_score}</p></div>`;
      `<div class="Description"><h3 class="subTitleBox">Descripcion:</h3> <p class="fontF">${element.description}</p></div>`;
      //Crear una seccion para indicar que es una seccion aparte y ponerle el titulo del contenedor siguiente con
      //un H"""
      const mainSection = document.createElement("section");
      mainSection.classList.add("mainSection");
      mainSection.innerHTML = `<div class="Description"><h3 class="subTitleBox">Descripcion:</h3> <p class="fontF">${element.description}</p></div>`;

      //Crear contenedor para todos los personajes con un elemento html section y un classlist diciendole que
      //queremos los personajes en una lista
      const containerPersonajes = document.createElement("section");
      containerPersonajes.classList.add("ContainerPersonajes")
      //Crear un titulo como encabezado de la seccion personajes
      containerPersonajes.innerHTML = `<h3 class="subTitlePersonajes">Personajes:</h3>`;

      //Crear constante para seccion de cada tarjeta de cada personaje 
      const getPersonajes = document.createElement('section');
      getPersonajes.classList.add("boxAllCharacters");

      //funcion (bucle) que devuelva un array para traer a todos los personajes y su info, puede ser un bucle For
      const character = element.people;
      //Recordar que se inicia (indexa) desde cero y nuestro array es character y queremos extraer subarrays de people
      for (let i = 0; i < character.length - 1; i++) {
        containerPersonajes.innerHTML += `
  <div class="tarjeta-wrap">
    <div class="tarjeta">
      <div class="adelante">
        <h1 class="designNameCard">${character[i].name}</h1>
        <img src=" ${character[i].img}" alt="" class="imgDesignCard">
      </div>
      <div class="atras"> 
        <div class="decriptionCharacters">
          <p><span class="spanDescription">Genero:</span> ${character[i].gender}</p>
          <p><span class="spanDescription">Edad: </span>${character[i].age}</p>
          <p><span class="spanDescription">Color de ojos:</span> ${character[i].eye_color}</p>
          <p><span class="spanDescription">Color de cabello:</span> ${character[i].hair_color}</p>
          <p><span class="spanDescription">Especie:</span>  ${character[i].specie}</p>
        </div>
      </div>
    </div>
  </div>`;
      }
      //Crear contenedor para agregar vehiculos con un section
      const containerVehicles = document.createElement('section');
      containerVehicles.classList.add("sectionVehicles");
      containerVehicles.innerHTML = `<h3 class="subTitleVehicles">Vehicles: </h3>`;

      //Crear funcion para extraer los vehiculos con su info
      const vehicles = element.vehicles;
      if (vehicles.length === 0) {
        // Si no se encuentra ningun dato mostrar imagen con mensaje de error
        containerVehicles.innerHTML = `<h2 class="subTitleError">Vehicles:</h2> <div class="addFlexError"> No se encuentran vehiculos.<img class="errorVehicles"src="images/NotFound2.jpeg"></div>`;
      } else {
        for (let i = 0; i < vehicles.length; i++) {
          containerVehicles.innerHTML += `
     <div class="tarjeta-wrap">
       <div class="tarjeta">
         <div class="adelante">
           <h1 class="designNameCard">${vehicles[i].name}</h1>
           <img src=" ${vehicles[i].img}" alt="" class="imgDesignCard">
         </div>
         <div class="atras"> 
           <div class="decriptionCharacters">
             <p><span class="spanDescription">Descripcion:</span> ${vehicles[i].description}</p>
             <p><span class="spanDescription">Clase de vehiculo: </span>${vehicles[i].vehicle_class}</p>
             <p><span class="spanDescription">Tamaño:</span> ${vehicles[i].length}</p>
           </div>
         </div>
       </div>
     </div>`;
        }
      }

      //Crear contenedor para agregar Locaciones con un section

      const containerLocations = document.createElement('section');
      containerLocations.classList.add("sectionLocation")

      //Crear funcion para extraer las locaciones con su info
      containerLocations.innerHTML = `<h3 class="subTitleLocation">Locaciones:</h3>`;
      const locations = element.locations;
      if (locations.length === 0) {
        //Si no se encuentra ningun dato mostrar imagen con mensaje de error
        containerLocations.innerHTML = `<h3 class="subTitleError">Locaciones:</h3> <div class="addFlexError"> No se encuentran Locaciones.<img class="errorLocations"src="images/NotFound2.jpeg"></div>`;
      } else {
        for (let i = 0; i < locations.length - 1; i++) {
          containerLocations.innerHTML += `
      <div class="tarjeta-wrap">
        <div class="tarjeta">
          <div class="adelante">
            <h1 class="designNameCard">${locations[i].name}</h1>
            <img src=" ${locations[i].img}" alt="" class="imgDesignCard">
          </div>
          <div class="atras"> 
            <div class="decriptionCharacters">
              <p><span class="spanDescription">Climate:</span> ${locations[i].climate}</p>
              <p><span class="spanDescription">Terrain:</span> ${locations[i].terrain}</p>
              <p><span class="spanDescription">Surface water:</span>  ${locations[i].surface_water}</p>
              <p><span class="spanDescription">Residents:</span>  ${locations[i].residents}</p>
            </div>
          </div>
        </div>
      </div>`;
        }
      }
      showAllFilms.append(datosPeli);
      datosPeli.append(asideSection, mainSection);
      containerPersonajes.append(getPersonajes);
      mainSection.append(containerPersonajes, containerVehicles, containerLocations);
    }
  });
};
showFilmInScreen(filmsGhibli);
