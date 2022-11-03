// estas funciones son de ejemplo

//export const example = () => {
  //return 'example';
//};


//export const anotherExample = () => {
  //return 'OMG';
//};
///////////////////////////////////////////////////////////////////////////////////////////

// Trae Films
export const getFilm = (data) => {
  const dataGhibli = data.films.map((arr) => arr);
  return dataGhibli;
}
 console.log (getFilm);
 
 //Searcher all films
 export const searchFilms = (data, condition, value) => {
  return data.filter(item => item[condition].toLowerCase().includes(value.toLowerCase()));
}
console.log(searchFilms);

/////////////////////////////////////////////////////////////////////////////////////////////