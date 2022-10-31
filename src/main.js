//import { getFilm } from './data.js';
import {getFilm, searchFilms} from './data.js';
import data from './data/ghibli/ghibli.js';

//const prueba=document.createElement("h3")
//const root=document.getElementById("root")
//prueba.innerText="la pizza con pina es legal"
//root.appendChild(prueba)

//const peliculas = data.films;
//function imprimirPantalla (data) {
  //  document.getElementById("peliculas").innerHTML = data.forEach((item) => `
    //<div class="item">
      //  <div class="img-te" href="/filme">
        //    <a href=".selectfilm?id=${item.id}">
          //      <img src="${item.poster}" />
            //</a>
        //</div>
    //</div>
   //`)
   //.join("")
//}
//imprimirPantalla(peliculas);
//console.log (mostrar);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////Trae films

const showAllFilms = document.getElementById("showAllFilms");
const deleteNodo = (showFilms) => {
  while(showFilms.lastChild){
      showFilms.removeChild(showFilms.lastChild);
  }
}
//Trae productor fecha de realizacion y puntaje
const filmsGhibli = getFilm(data);
const showFilmInScreen = (arrayData) =>{
  deleteNodo(showAllFilms);
    arrayData.forEach((element) => {
       const divFilm = document.createElement("div"); //div para cada tarjeta
       divFilm.classList.add("card");
        divFilm.innerHTML=`<img src="${element.poster}" alt="">
        <p class="films-titles">${element.title}</p> 
        <p class="subTitleCard"> <span class="spanCard">Productor: </span>${element.producer}</p> 
        <p class="subTitleCard"><span class="spanCard">Fecha de realizacion: </span> ${element.release_date}</p>
        <p class="subTitleCard"><span class="spanCard">Puntaje: </span> ${element.rt_score}</p>`;
        divFilm.setAttribute("id" , element.id);
        showAllFilms.appendChild(divFilm);

    });
   
};
showFilmInScreen(filmsGhibli);


/////////////////////////////////////////////////////////////////////////////////////////////

 //Funcion input search
 const inputSearch = document.getElementById("searchFilm");
 let allDataFilms = getFilm(data);
inputSearch.addEventListener('keyup',() =>{
  allDataFilms = searchFilms(filmsGhibli, 'title', inputSearch.value);
  showFilmInScreen(allDataFilms);
})
console.log (inputSearch);