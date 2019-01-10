class Storage{
    // add new movie to local storage
    static addMovieToStorage(newMovie){
        let movies = this.getMoviesFromStorage();
        movies.push(newMovie);
        localStorage.setItem("movies", JSON.stringify(movies));
    }

    // get movies from local storage
    static getMoviesFromStorage(){
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
    static deleteMovieFromStorage(title){
        let movies = this.getMoviesFromStorage();
        movies.forEach(function(movie, index){ // index: returns index of movie, in array
            if(movie.title == title){
                movies.splice(index, 1); // delete one element of array from index
            }
        });

        localStorage.setItem("movies", JSON.stringify(movies));
    }

    // clear all movies from storage
    static clearAllMoviesFromStorage(){
        localStorage.removeItem("movies"); 
    }
}