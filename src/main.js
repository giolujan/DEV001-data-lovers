import { getFilm, searchFilms, orderFilms, ordenaFilms } from './data.js';
import data from './data/ghibli/ghibli.js';


//////Trae films
const showAllFilms = document.getElementById("showAllFilms");
const deleteNodo = (showFilms) => {
  while (showFilms.lastChild) {
    showFilms.removeChild(showFilms.lastChild);
  }
}
//Trae productor fecha de realizacion y puntaje
const filmsGhibli = getFilm(data); // la data se guarde en filmsghibli
const showFilmInScreen = (arrayData) => {
  deleteNodo(showAllFilms); //arraydata es el paramtero y se otorga al final
  arrayData.forEach((element) => {
    const divFilm = document.createElement("div"); //div para cada tarjeta
    divFilm.classList.add("card"); // para manipular en el css
    divFilm.innerHTML = `<img src="${element.poster}" alt=""> 
        <p class="films-titles">${element.title}</p> 
        <p class="subTitleCard"><span class="spanCard">Productor: </span>${element.producer}</p> 
        <p class="subTitleCard"><span class="spanCard">Fecha de realizacion: </span> ${element.release_date}</p>
        <p class="subTitleCard"><span class="spanCard">Puntaje: </span> ${element.rt_score}</p>
        <button type="button" class="button modal" data-id= ${element.id} >Hazme click</button>`; //forma abrevida para introducir un bloque de texto de formato html
    divFilm.setAttribute("id", element.id); //le das un id a los elementos de id
    showAllFilms.appendChild(divFilm); // lo expresas en la hoja 
  });
};
showFilmInScreen(filmsGhibli);

var buttonsTest = document.querySelectorAll(".modal") //lo eliges por un class llamado CSS
buttonsTest.forEach((buttonTest) => {
  buttonTest.addEventListener("click",clicked)
}) //por cada boton hay un event de click



function clicked(event) {
  //deleteNodo(showAllFilms);
  event.preventDefault();
  const target = event.target
  console.log (target.dataset.id)
  const prueba = filmsGhibli.filter((film)=> { 
    return film.id == target.dataset.id
  })
  console.log (prueba)


  const OneFilms = document.getElementById("showOneFilms")
  const showOneFilms = (infofilm) => {
    infofilm.forEach((element) => {
      const tarjetaFilm = document.createElement("section");
      tarjetaFilm.innerHTML = `<img src="${element.poster}" alt="">
          <p class="films-titles">${element.title}</p> 
          <p class="subTitleCard"><span class="spanCard">Productor: </span>${element.producer}</p> 
          <p class="subTitleCard"><span class="spanCard">Fecha de realizacion: </span> ${element.release_date}</p>
          <p class="subTitleCard"><span class="spanCard">Puntaje: </span> ${element.rt_score}</p>`;
          tarjetaFilm.setAttribute("id", element.id);
          OneFilms.appendChild( tarjetaFilm);
        });
      };
      showOneFilms(prueba);
    };
    //clicked();
  /** 
  const showOneFilms = (arrayData) => {
    arrayData.forEach((element) => {
      const tarjetaFilm = document.createElement("div"); //div para cada tarjeta
      tarjetaFilm.classList.add("card");
      tarjetaFilm.innerHTML = `<img src="${element.poster}" alt="">
          <p class="films-titles">${element.title}</p> 
          <p class="subTitleCard"><span class="spanCard">Productor: </span>${element.producer}</p> 
          <p class="subTitleCard"><span class="spanCard">Fecha de realizacion: </span> ${element.release_date}</p>
          <p class="subTitleCard"><span class="spanCard">Puntaje: </span> ${element.rt_score}</p>`;
          tarjetaFilm.setAttribute("id", element.id);
          OneFilms.appendChild( tarjetaFilm);
    }); **/
  
  //showOneFilms(filmsGhibli);
  //OneFilms.classList.add("card");
  //const divFilmIntern = document.querySelector(".card")
  //  OneFilms.innerHTML = `<p> holi </p>`
    //console.log(divFilmIntern)
  //}
  
  
  
  //filmsGhibli.films.forEach((element)=> {
    
   // divFilmIntern.setAttribute("id", element.id) //enviar los valores
   // divFilmIntern.textContent = element
   // console.log(element)
 // });
  

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
  if (selectOrder !== "") {
    const filterOrder = orderFilms(allDataFilms, selectOrder);
    showFilmInScreen(filterOrder);
  }
}
)
console.log(order);

//Crear opcion para Ordenar pelis de la AZ y de la ZA, se crea con sort
const ordena = document.getElementById("sortAZ")
ordena.addEventListener("change", (event) => {
  const selectOrdena = event.target.value;
  console.log(selectOrdena)
  if (selectOrdena !== "") {
    const filterOrdena = ordenaFilms(allDataFilms, selectOrdena);
    showFilmInScreen(filterOrdena);
  }
}
)
console.log(ordena);


