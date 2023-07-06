let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let index = 0; index < 2; index++) {
    let a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?');

        if (a != null && b != null && a != '' & b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            index--;
        }
    }

 if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов');
 } else if (personalMovieDB.count > 30) {
    alert('Вы киноман!')
 } else {
    alert('Вы классический зритель')
 }         


console.log(personalMovieDB);



