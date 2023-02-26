/*---- Side navigation ----*/
// open sidebar
function open_sidebar() {
    // deja abierto el sidebar
    var sidebar = document.getElementById("mySidebar");
    sidebar.style.display = "block";

    // pone el overlay de fondo
    document.getElementById("myOverlay").style.display = "block";
}

// close sidebar
function close_sidebar() {
    // deja cerrado el modal
    var sidebar = document.getElementById("mySidebar");
    sidebar.style.display = "none";

    // saca el overlay de fondo
    document.getElementById("myOverlay").style.display = "none";
}


/*---- Modal / Movies ----*/

// guarda la constante que tiene el json con cada pelicula
const movies = data.movies;

// transformar el json a array con Object.values() para poder usarlo con el Math.random (que lee arrays)
var moviesArray = Object.values(movies)
console.log(moviesArray)


// abre el modal y muestra una pelicula random cada vez que se abre un modal nuevo 
function open_modal() {
    // deja abierto el modal
    var modal = document.getElementById("modal");
    modal.style.display = "block";

    // pone el overlay de fondo
    document.getElementById("myOverlay").style.display = "block";

    // elige una random movie 
    var randomMovie = moviesArray[Math.random() * moviesArray.length | 0];
    console.log(randomMovie)

    // imprime la random movie
    $("#title").html(randomMovie.title);
    $("#genre").html("Genre: " + randomMovie.genre + ", " + randomMovie.genre2);
    $("#rating").html("Rating: " + randomMovie.rating);
    $("#year").html("Year: " + randomMovie.year);
    $("#apto").html("Certificate: " + randomMovie.apto);
    $("#epoca").html("Decade: " + randomMovie.epoca);
    $("#netflix").html("Is it in Netflix: " + randomMovie.netflix);
    $("#link").html("<a class='' target='blank' href='" + randomMovie.link + "'> IMDB: " + randomMovie.title + "</a>");

}

// close modal
function close_modal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";

    document.getElementById("myOverlay").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";

        document.getElementById("myOverlay").style.display = "none";
    }
}