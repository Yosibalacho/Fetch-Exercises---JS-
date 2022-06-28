const BASIC_API = "https://moviesmern.herokuapp.com/movies/";
async function getData() {
  try {
    return await fetch("https://moviesmern.herokuapp.com/movies/all").then(
      (response) => response.json()
    );
  } catch (err) {
  } finally {
  }
}
function printMoviesName() {
  getData()
    .then((result) => {
      result.data.forEach((item) => {
        movie_name.innerHTML += `<li>${item.movieName}<br><img src="${item.image}"></li>`;
      });
    })
    .catch(() => {})
    .finally(() => {});
}

// async function postNewMovie() {
//   const newMovie = {
//     movie: {
//       image:
//         "https://upload.wikimedia.org/wikipedia/he/6/68/DBZ_THE_MOVIE_NO._9_%28wiki%29.jpg",
//       linkToMovie: "https://thereaderwiki.com/en/Dragon_Ball_Super",
//       movieName: "dragon ball super",
//       rating: "7",
//       synopsis: "ddssdsd",
//     },
//   };
//   try {
//     return await fetch("https://moviesmern.herokuapp.com/movies/saveMovie", {
//       method: "POST",
//       body: JSON.stringify(newMovie),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (err) {
//   } finally {
//   }
// }
async function userInput() {
  const newMovieInput = {
    movie: {
      image: movie_img.value,
      linkToMovie: link.value,
      movieName: movie_name.value,
      rating: rating.value,
      synopsis: synopsis.value,
    },
  };
  try {
    return await fetch("https://moviesmern.herokuapp.com/movies/saveMovie", {
      method: "POST",
      body: JSON.stringify(newMovieInput),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
  } finally {
  }
}
async function getMovieByName() {
  try {
    return await fetch(
      `${BASIC_API}movie/searchByName/${searchMovies.value}`)
      .then(res => res.json());
    }
    catch (error) {}
    finally {}
}
function showMovieByName() {
  movie_name.innerHTML = "";
  clickShow.disabled = true;
  loading.innerHTML =
    "<img style='width:20vw' src='https://c.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif'/>";
  getMovieByName()
    .then((result) =>
      result.data.forEach(movieItem =>
          print_search.innerHTML += `<span>${movieItem.movieName}</span>`)
    )
    .catch((err) => console.log(err))
    .finally((data) =>{loading.innerHTML = ""});
}
