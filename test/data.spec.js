import { searchFilms, orderFilms, ordenaFilms } from '../src/data.js';
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
  it('Deberia ser una funcion', () => {
    expect(typeof searchFilms).toBe ("function");
  })
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
describe('orderFilms', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof orderFilms).toBe ("function");
  })
  let data= [
    {release_date: "1991"},
    {release_date: "1986"},
    {release_date: "1989"},
    {release_date: "1988"},
  ];
  it('ordenar por la fecha de realizacion desde la más antigua a la más nueva', () => {
    let resultadoEsperado = [
      {release_date: "1986"},
      {release_date: "1988"},
      {release_date: "1989"},
      {release_date: "1991"},
    ]
    expect(orderFilms(data,"0-9")).toStrictEqual(resultadoEsperado);
  });
  it('ordenar por la fecha de realizacion desde la más nueva a la más antigua', () => {
    let resultadoEsperado = [
      {release_date: "1991"},
      {release_date: "1989"},
      {release_date: "1988"},
      {release_date: "1986"},
    ]
    expect(orderFilms(data,"9-0")).toStrictEqual(resultadoEsperado);
  });
});

describe('ordenaFilms', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof orderFilms).toBe ("function");
  })
  let data= [
    {title: "Pod Clock"},
    {title: "Castle in the Sky" },
    {title: "Only Yesterday"},
    {title: "Lusheeta Toel Ul Laputa"},
  ];
  it('ordenar por el titulo desde A-Z', () => {
    let resultadoOrdenEsperadoF = [
      {title: "Castle in the Sky" },
      {title: "Lusheeta Toel Ul Laputa"},
      {title: "Only Yesterday"},
      {title: "Pod Clock"},
    ]
    expect(ordenaFilms(data,"A-Z")).toStrictEqual(resultadoOrdenEsperadoF);
  });
  it('ordenar por el titulo desde Z-A', () => {
    let resultadoOrdenEsperadoF = [
      {title: "Pod Clock"},
      {title: "Only Yesterday"},
      {title: "Lusheeta Toel Ul Laputa"},
      {title: "Castle in the Sky" },
    ]
    expect(ordenaFilms(data,"Z-A")).toStrictEqual(resultadoOrdenEsperadoF);
  });
});