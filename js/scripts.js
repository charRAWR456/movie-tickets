function Movie(title, price, rating, time) {
  this.title = title;
  this.price = price;
  this.rating = rating;
  this.time = time;
}
function getPrice(price, isMatinee) {
  var standardPrice = 10;
  if (price === "new-release") {
    standardPrice += 5;
  }
  if (isMatinee) {
    standardPrice -= 4;
  }
}
function timeParser(time) {
  console.log(time);
  var newTime = time.replace(timeParse, '');
  if ((newTime <= 1200) && (newTime >= 800)) {
    return true;
  }
  else {
    return false;
  }
}
function ageChecker(age, rating) {
  if (rating === "R" && age < 18) {
    return false;
  }
  else if (rating === "PG-13" && age < 13) {
    return false;
  }
  else true;
}
function main() {
  var title;
  if ($("#movie-dropdown").val() === undefined) {
    title = "";
  } else {
    title = $("#movie-dropdown").val();
  }
  var date = $("input#date-form").val();
  var time = $("input#time-form").val();
  var age = $("input#age-form").val();
  var resultsList = title+" "+date+" "+time+" "+age;
  var movieObject;
  movieArray.forEach(function(movie){
    if (title = movie.title) {
      movieObject = movie;
    }
  });

  if (ageChecker(age, movieObject.rating) === false) {
    alert("Hey man, grow up");
    return;
  }
  getPrice(movieObject.price, timeParser(movieObject.time))
  $("#results").text(resultsList);
  $(".output").show();
}
var dieHard = new Movie("Diehard","standard","R");
var lionKing = new Movie("Lionking","standard","PG");
var starwarsTLJ = new Movie("Starwars: The Last Jedi","new-release","PG-13");
var timeParse = /\:/;
var movieArray = [ dieHard, lionKing, starwarsTLJ ];

$(document).ready(function() {
  $("#price-button").click(function(event) {
    event.preventDefault();
    main();

  })
  movieArray.forEach(function(movie, index, movieList) {
    $("#movie-dropdown").append('<option>' + movie.title + '</option>');
  });
})
