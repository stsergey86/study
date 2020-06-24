'use sctrict';
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
if (numberOfFilms < 10 && numberOfFilms > 0) {
    alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert("Вы классический зритель");
} else if (numberOfFilms >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
};
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    let a1 = prompt("Один из последних просмотренных фильмов", "");
    if (a1 == null || a1.length > 50 || a1 == "") {
        i--;
        continue;
    } 
    let a2 = +prompt("На сколько оцените его?", "");
    if (a2 == 0 || a2.length > 50 || a2 == "") {
        i--;
        continue;
    } 
        console.log('done');
        personalMovieDB.movies[a1] = a2;
}
console.log(personalMovieDB);