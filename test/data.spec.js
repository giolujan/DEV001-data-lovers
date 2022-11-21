import { getFilm, searchFilms,orderFilms, ordenaFilms } from '../src/data.js';

//describe('example', () => {
  //it('is a function', () => {
    //expect(typeof example).toBe('function');
  //});

/* GET FILM IN NEW ARRAY */
describe('getFilm', () => {
  it('funcion mostrar data', () => {
    expect(typeof getFilm).toBe("function");
  });
  

    let dataGhibli= {films: [
          {id: "2baf70d1-42bb-4437-b551-e5fed5a87abe"},
          {title: "Castle in the Sky"},
          {director: "Hayao Miyazaki"},
          {producer: "Isao Takahata"},
          {poster: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg"},
          {release_date: "1986"},
          {rt_score: "95"},
        ]};
        
        let resultadoDataGhibli= [
          {id: "2baf70d1-42bb-4437-b551-e5fed5a87abe"},
          {title: "Castle in the Sky"},
          {director: "Hayao Miyazaki"},
          {producer: "Isao Takahata"},
          {poster: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg"},
          {release_date: "1986"},
          {rt_score: "95"},
        ]
 
 
  it("retorna dataGhibli getFilm", () => {
    expect(getFilm(dataGhibli)).toStrictEqual(resultadoDataGhibli);
  });
});



/* GET FILM IN NEW ARRAY */
describe('getFilm', () => {
  it('funcion mostrar data', () => {
    expect(typeof getFilm).toBe("function");
  });
  

    let dataGhibli= {films: [
          {id: "2baf70d1-42bb-4437-b551-e5fed5a87abe"},
          {title: "Castle in the Sky"},
          {director: "Hayao Miyazaki"},
          {producer: "Isao Takahata"},
          {poster: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg"},
          {release_date: "1986"},
          {rt_score: "95"},
        ]};
        
        let resultadoDataGhibli= [
          {id: "2baf70d1-42bb-4437-b551-e5fed5a87abe"},
          {title: "Castle in the Sky"},
          {director: "Hayao Miyazaki"},
          {producer: "Isao Takahata"},
          {poster: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg"},
          {release_date: "1986"},
          {rt_score: "95"},
        ]
 
 
  it("retorna dataGhibli getFilm", () => {
    expect(getFilm(dataGhibli)).toStrictEqual(resultadoDataGhibli);
  });
});


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

  it('deberia regresar el arreglo original', () => {
   
    expect(orderFilms(data)).toStrictEqual(data);
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

  it('deberia regresar el arreglo original', () => {
   
    expect(ordenaFilms(data)).toStrictEqual(data);
  });
});