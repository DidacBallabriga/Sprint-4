// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(directores => directores.director
  );
  //console.log("EXERCICE 1 ->", result);
  return result;
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let filmsDirector = array
  .filter( directors => directors.director === director);
  //console.log("EXERCICE 2 ->", filmsDirector);
  return filmsDirector
}
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  //crear un array con todas las peliculas del director;
  let filmsDirector = 
  array.filter(directors => directors.director === director)
  // console.log("EXERCICE 3 filmsDirector ->",filmsDirector)
  // sumar todas las puntuaciones del array anterior  
  let sumFilms = 
  filmsDirector.reduce((acc, el)=>acc + el.score,0)
  //console.log("EXERCICE 3 sumFilms ->",sumFilms)
  // sacar el tamaño del array
  let arraySize = filmsDirector.length;
  // console.log("EXERCICE 3 arraySize ->",arraySize)
  // Sacar media y devolver el número en formato int con dos decimales
  let averageFilms = sumFilms/arraySize
  //console.log("EXERCICE 3 averageFilms ->",parseFloat(averageFilms.toFixed(2)))
  return parseFloat(averageFilms.toFixed(2))
}
// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  //creamos un nuevo array con solo los títulos de las películas
  let alphabeticFilms = array.map(film => film.title);
  //console.log("EXERCICE 4 ->", alphabeticFilms);
  //Ordenamos el array anterior alfabeticamente
  let alphabeticFilmsOrder =
  alphabeticFilms.sort((a,b)=>{
    if (a == b){
      return 0;
    } 
    if(a<b){
      return -1;
    }
    return 1;
  });
  //console.log("EXERCICE 4 alphabeticFilms ->",alphabeticFilms)
  //Limitamos el array a 20 elementos
  let alphabeticFilmsOrderMax20 = alphabeticFilmsOrder.slice(0,20);
  //console.log("EXERCICE 4 alphabeticFilmsOrderMax20 ->",alphabeticFilmsOrderMax20);
  return alphabeticFilmsOrderMax20;
}
// Exercise 5: Order by year, ascending
function orderByYear(array) {
  //con sort, comparamos los valores a y b para ir ordenando
  let orderFilmByYear = array.sort( (a, b) => {
    if(a.year > b.year){
      return 1;
    }
    if(a.year < b.year){
      return -1;
    }
    if(a.title > b.title){
      return 1;
    }
    if(a.title < b.title){
      return -1;
    }
    return 0;
  })
  //Limitamos el array a 20 elementos
  let orderFilmByYearMax20 = orderFilmByYear.slice(0,20);
  //onsole.log("EXERCICE 5 orderFilmByYear ->",orderFilmByYearMax20);
  return orderFilmByYearMax20;
}
function moviesAverage(data){
  //sacamos total de peliculas

  //filtramos solo los score = number
  let cleanData = data.filter((dato)=>typeof dato.score === 'number');
  //sumamos todos los datos
  let size= cleanData.length;
  let sum = cleanData.reduce((a,b)=>a+b.score,0)
  //sacamos media y devolvemos resultado
  let result = sum/size;
  //console.log("EXERCICE 6 result ->",parseFloat(result.toFixed(2)));
  return parseFloat(result.toFixed(2))
}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  //Recorrer el array para sacar todas las peliculas de una categoría
  let filmsCategory = array.filter((datos)=>datos.genre.toString()===category.toString())
  //console.log("EXERCICE 6 filmsCategory ->",filmsCategory);
  return moviesAverage(filmsCategory)
}
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
    //copia de array para asignar nuevo espacio en memoria y no modificar el original
    let copyArray = JSON.parse(JSON.stringify(array))
    let timeConversion = copyArray.map(function callback(data){
      let horas = data.duration.slice(0,1)*60
      if(isNaN(horas)===true){horas = 0}
      //console.log("Horas -> ",horas)
      let minutes = parseFloat(data.duration.slice(3,5))
      if(isNaN(minutes)===true){minutes = 0}
      //console.log("Minutes -> ",minutes)
      let sum = horas+minutes;
      //console.log("sum -> ",sum)
      data.duration = sum;
      return data;
  })
  //console.log("EXERCICE 7 Array Original ->", array.slice(0,2));
  //console.log("EXERCICE 7 timeConverion ->",timeConversion.slice(0,2));
  return timeConversion;
}
// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  //filtrar las peliculas por el año solicitado
  let peliPorAño = array.filter(function callback(a){
  if(a.year === year){
    return a
    }
  })
  //Ordenar peliculas por score
  let mejorPeli = peliPorAño.sort((a,b)=>{
    if(a.score>b.score){
      return -1
    }
    if(a.score<b.score){
      return 1
    }
  });
  //recortamos array
  newArray = mejorPeli.slice(0,1)
  //console.log("EXERCICE 8 newArray ->",newArray);
  return newArray
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
