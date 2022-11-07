import { searchFilms } from '../src/data.js';
//import { example, anotherExample } from '../src/data.js';

//describe('example', () => {
  //it('is a function', () => {
    //expect(typeof example).toBe('function');
  //});

  //it('returns `example`', () => {
    //expect(example()).toBe('example');
  //});
//});

//describe('anotherExample', () => {
  //it('is a function', () => {
    //expect(typeof anotherExample).toBe('function');
  //});

  //it('returns `anotherExample`', () => {
    //expect(anotherExample()).toBe('OMG');
  //});
//});

describe('searchFilms', () => {
  it('filtra las peliculas por el titulo', () => {
    let data= [
      {title: "Castle in the Sky" },
      {title: "Lusheeta Toel Ul Laputa"},
      {title: "Pod Clock"},
    ];
    let tituloEsperado="castle"
    let resultadoEsperado = [{title:"Castle in the Sky"}]
    expect(searchFilms(data,"title", tituloEsperado)).toEqual (resultadoEsperado);
  });
});
