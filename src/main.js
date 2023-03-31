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
    const divFilm = document.createElement("div");
    divFilm.classList.add("card");
    divFilm.innerHTML = `<div class= "card-img"><img src="${element.poster}" alt="poster"></div>
        <div class="card-inf">
        <h1>${element.title}</h1> 
        <h2><span> Productor: </span>${element.producer}</h2> 
        <h2><span> Director: </span>${element.director}</h2>
        <h2><span> Fecha de realización: </span> ${element.release_date}</h2>
        </div>`;
    divFilm.setAttribute("id", element.id);
    showAllFilms.appendChild(divFilm);

    const nuevaPantalla = document.getElementById(element.id)
    nuevaPantalla.addEventListener("click", infoPelis);

    //Funcion para extraer la data requerida para la pagina 2 
    
    function infoPelis() {
      const showOneFilm = document.getElementById("showOneFilm");
      //showAllFilms.textContent = '';//La propiedad textContentrepresenta el contenido de texto de un nodo y sus descendientes.
      document.querySelector(".showAllFilms").style.display = "none";
      document.querySelector(".informationHeader").style.display = "none";
      document.querySelector(".filmsContainer").style.display = "none";

      //const showOneFilm = document.createElement("section");
      //showOneFilm.classList.add("showOneFilm");

      const asideSection = document.createElement('div');
      asideSection.classList.add("inf-movie");//Usar classList es una forma práctica de acceder a la lista de clases de un elemento como una cadena de texto delimitada por espacios a través de element
      asideSection.innerHTML = `<div class= "card-img-peli"><img src="${element.poster}" alt="poster"></div>
      <div class="inf-description">
       <h1>${element.title}</h1> 
       <h2>Productor:</h2> <p> ${element.producer}</p><hr> 
       <h2>Director:</h2> <p> ${element.director}</p><hr>
       <h2>Fecha de realización:</h2> <p> ${element.release_date}</p><hr>
       <h2>Score:</h2> <p> ${element.rt_score}</p><hr>
      </div>
      <div class="inf-summary">
       <h2>Descripción:</h2> <p> ${element.description}</p><hr>
      </div>`;

      const container = document.createElement("div");
      container.classList.add("container");
      //Crear contenedor para todos los personajes con un elemento html section y un classlist diciendole que
      //queremos los personajes en una lista
      const containerCharacter = document.createElement("div");
      containerCharacter.classList.add("container-characters")
      containerCharacter.innerHTML = `<h2>Personajes:</h2>`;

      const showOneCharacter = document.createElement("div");
      showOneCharacter.classList.add("showOneCharacter")

      const character = element.people;
      //Recordar que se inicia (indexa) desde cero y nuestro array es character y queremos extraer subarrays de people
      for (let i = 0; i < character.length - 1; i++) {
        showOneCharacter.innerHTML += `<div class="tarjeta">
      <div class="adelante">
      <h3>${character[i].name}</h3>
      <div class="adelanteImg"><img src=" ${character[i].img}" alt="" class="imgDesignCard"></div>
      </div>
      <div class="atras"> 
        <div class="decriptionCharacters">
          <p><span> Genero:</span> ${character[i].gender}</p>
          <p><span> Edad: </span>${character[i].age}</p>
          <p><span> Color de ojos:</span> ${character[i].eye_color}</p>
          <p><span> Color de cabello:</span> ${character[i].hair_color}</p>
          <p><span> Especie:</span>  ${character[i].specie}</p>
        </div>
      </div>
    </div>`;
      }
      //Crear contenedor para agregar vehiculos con un section
      const containerVehicles = document.createElement('div');
      containerVehicles.classList.add("container-vehicles");
      containerVehicles.innerHTML = `<h2 >Vehiculos:</h2>`;

      const showOneVehicles = document.createElement("div");
      showOneVehicles.classList.add("showOneVehicles")

      //Crear funcion para extraer los vehiculos con su info
      const vehicles = element.vehicles;
      if (vehicles.length === 0) {
        // Si no se encuentra ningun dato mostrar imagen con mensaje de error
        showOneVehicles.innerHTML = `
        <div class="addFlexError">
        <p> No se encuentran vehiculos. </p>
        <img src="images/NotFound2.jpeg"></div>`;
      } else {
        for (let i = 0; i < vehicles.length; i++) {
          showOneVehicles.innerHTML += `<div class="tarjeta-large">
         <div class="adelante-large">
         <h3>${vehicles[i].name}</h3>
         <div class="adelanteImg"><img src="${vehicles[i].img}" alt="" class="imgDesignCard"></div>
         </div>
         <div class="atras-large"> 
           <div class="decriptionCharacters">
             <p><span> Descripcion:</span> ${vehicles[i].description}</p>
             <p><span> Clase de vehiculo: </span>${vehicles[i].vehicle_class}</p>
             <p><span> Tamaño:</span> ${vehicles[i].length}</p>
           </div>
         </div>
       </div>`;
        }
      }

      //Crear contenedor para agregar Locaciones con un section
      const containerLocations = document.createElement('div');
      containerLocations.classList.add("container-location")
      containerLocations.innerHTML = `<h2>Locaciones:</h2>`;

      const showOneLocation = document.createElement("div");
      showOneLocation.classList.add("showOneLocation")

      const locations = element.locations;
      if (locations.length === 0) {
        //Si no se encuentra ningun dato mostrar imagen con mensaje de error
        showOneLocation.innerHTML = `
        <div class="addFlexError">
        <p> No se encuentran Locaciones. </p>
        <img src="images/NotFound2.jpeg"></div>`;
      } else {
        for (let i = 0; i < locations.length - 1; i++) {
          showOneLocation.innerHTML += `<div class="tarjeta-large">
          <div class="adelante-large">
           <h3>${locations[i].name}</h3>
           <div class="adelanteImg"><img src="${locations[i].img}" alt="" class="imgDesignCard"></div>
          </div>
          <div class="atras-large"> 
            <div class="decriptionCharacters">
              <p><span> Climate:</span> ${locations[i].climate}</p>
              <p><span> Terrain:</span> ${locations[i].terrain}</p>
              <p><span> Surface water:</span>  ${locations[i].surface_water}</p>
              <p><span> Residents:</span>  ${locations[i].residents}</p>
            </div>
          </div>
        </div>`;
        }
      }
      showOneFilm.append(asideSection,container);
      container.append( containerCharacter, containerVehicles, containerLocations);
      containerCharacter.append(showOneCharacter);
      containerVehicles.append(showOneVehicles);
      containerLocations.append(showOneLocation);
    }
  });
};
showFilmInScreen(filmsGhibli);
