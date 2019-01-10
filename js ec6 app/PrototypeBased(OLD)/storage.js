function Storage(){

}

// add new movie to local storage
Storage.prototype.addMovieToStorage = function(newMovie){
    let movies = this.getMoviesFromStorage();
    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));
}

// get movies from local storage
Storage.prototype.getMoviesFromStorage = function(){
    let movies;
    if(localStorage.getItem("movies") === null){
        movies = [];
    }
    else{
        movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
}

// delete movie from storage
Storage.prototype.deleteMovieFromStorage = function(title){
    let movies = this.getMoviesFromStorage();
    movies.forEach(function(movie, index){ // index: returns index of movie, in array
        if(movie.title == title){
            movies.splice(index, 1); // delete one element of array from index
        }
    });

    localStorage.setItem("movies", JSON.stringify(movies));
}

// clear all movies from storage
Storage.prototype.clearAllMoviesFromStorage = function(){
    localStorage.removeItem("movies"); 
}