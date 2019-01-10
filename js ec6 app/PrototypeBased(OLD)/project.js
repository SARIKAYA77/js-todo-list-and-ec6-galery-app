const addForm = document.getElementById("movie-form");
const inputTitle = document.querySelector("#title");
const inputDirector = document.querySelector("#director");
const inputURL = document.querySelector("#url");
const moviesList = document.querySelectorAll(".card-body")[1];
const clearAll = document.querySelector("#clear-movies");

// starting UI object
const ui = new UI();

// create storage object
const storage = new Storage();

// load all events
eventListeners();

function eventListeners(){
    addForm.addEventListener("submit", addMovie);
    document.addEventListener("DOMContentLoaded", function(){
        let movies = storage.getMoviesFromStorage();
        ui.loadMoviesToUI(movies);
    });
    moviesList.addEventListener("click", deleteMovie);
    clearAll.addEventListener("click", clearAllMovies);
}

// for adding new movie
function addMovie(e){
    const title = inputTitle.value;
    const director = inputDirector.value;
    const url = inputURL.value;

    if(title === "" || director === "" || url === ""){
        ui.showAlert("Please fill in the required fields...", "danger");
    }
    else{
        const newMovie = new Movie(title, director, url);
        // for adding movie to UI
        ui.addMovieToUI(newMovie);

        // for adding to local storage
        storage.addMovieToStorage(newMovie);

        ui.showAlert("Movie added successfully!", "success");
    }

    // for clear input values after adding
    ui.clearInputs(inputTitle, inputDirector, inputURL);
    e.preventDefault();
}

// for deleting movie
function deleteMovie(e){
    if(e.target.id == "delete-movie"){
        let title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        ui.deleteMovieFromUI(e.target);
        storage.deleteMovieFromStorage(title);

        ui.showAlert("Movie successfully deleted from list!", "success");
    }
}

// clear all movies from list and local storage
function clearAllMovies(){
    if(confirm("Are you sure you want to clear all list?")){
        ui.clearAllMoviesFromUI();
        storage.clearAllMoviesFromStorage();
        ui.showAlert("All movies successfully removed!", "success");
    }   
}