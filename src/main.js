import { getFilm, searchFilms, orderFilms } from './data.js';
import data from './data/ghibli/ghibli.js';


//////Trae films
const showAllFilms = document.getElementById("showAllFilms");
const deleteNodo = (showFilms) => {
  while (showFilms.lastChild) {
    showFilms.removeChild(showFilms.lastChild);
  }
}
//Trae productor fecha de realizacion y puntaje
const filmsGhibli = getFilm(data);
const showFilmInScreen = (arrayData) => {
  deleteNodo(showAllFilms);
  arrayData.forEach((element) => {
    const divFilm = document.createElement("div"); //div para cada tarjeta
    divFilm.classList.add("card");
    divFilm.innerHTML = `<img src="${element.poster}" alt="">
        <p class="films-titles">${element.title}</p> 
        <p class="subTitleCard"><span class="spanCard">Productor: </span>${element.producer}</p> 
        <p class="subTitleCard"><span class="spanCard">Fecha de realizacion: </span> ${element.release_date}</p>
        <p class="subTitleCard"><span class="spanCard">Puntaje: </span> ${element.rt_score}</p>`;
    divFilm.setAttribute("id", element.id);
    showAllFilms.appendChild(divFilm);

  });

};
showFilmInScreen(filmsGhibli);


//Funcion input search
const inputSearch = document.getElementById("searchFilm");
let allDataFilms = getFilm(data);
inputSearch.addEventListener('keyup', () => {
  allDataFilms = searchFilms(filmsGhibli, 'title', inputSearch.value);
  showFilmInScreen(allDataFilms);
})
console.log(inputSearch);

/////////Funcion para ordenar peliculas por fecha de realizacion/////////////
const order = document.getElementById("orderFilms")
order.addEventListener("change", (event) => {
  const selectOrder = event.target.value;
  console.log(selectOrder)
  if (selectOrder !== "") {
    const filterOrder = orderFilms(allDataFilms, selectOrder);
    showFilmInScreen(filterOrder);
  }
}
)
console.log(order);



//Crear opcion para Ordenar pelis de la AZ y de la ZA, se crea con sort


