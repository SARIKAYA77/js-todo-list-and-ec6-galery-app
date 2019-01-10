class UI{
    static addMovieToUI(newMovie){
        // get movie list table from UI
        const movieList = document.getElementById("movies");
    
        movieList.innerHTML += `
            <tr>
                <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
                <td>${newMovie.title}</td>
                <td>${newMovie.director}</td>
                <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete</a></td>
            </tr>
        `;
    }
    
    // for clear input values after adding
    static clearInputs(input1, input2, input3){
        input1.value = "";
        input2.value = "";
        input3.value = "";
    }
    
    static showAlert(message, type){
        const addForm = document.querySelector(".card-body"); // get first card-body element
        console.log(addForm);
        // create alert message
        const div = document.createElement("div");
        div.className = `alert alert-${type}`
        div.textContent = message;
    
        // add to UI
        addForm.appendChild(div);
    
        setTimeout(function(){
            div.remove();
        }, 1500);
    }
    
    static loadMoviesToUI(movies){
        const movieList = document.getElementById("movies");
        movies.forEach(function(movie){
            movieList.innerHTML += `
            <tr>
                <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
                <td>${movie.title}</td>
                <td>${movie.director}</td>
                <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete</a></td>
            </tr>
        `;
        });
    }
    
    // delete one movie from UI
    static deleteMovieFromUI(element){
        // a -> td -> tr (remove)
        element.parentElement.parentElement.remove();
    }
    
    // clear all movies from UI
    static clearAllMoviesFromUI(){
        const movieList = document.getElementById("movies");
        while(movieList.firstElementChild != null){
            movieList.removeChild(movies.firstElementChild);
        }
    }
}