

// working weather app. below

// const weatherContainer = document.querySelector(".weather-container");
// const input = document.querySelector(".input");
// const button = document.querySelector("#btn btn-outline-primary"); // weather button //
// button.addEventListener("click", () => {
//   const weather = input.value;
//   console.log(input.value);
// });
// const searchinput = document.getElementById("searchinput");
// //let d-grid gap-2 d-md-block = document.getElementById("btn btn-outline-primary");
// function weatherApi() {
//   // console.log(searchinput.value);
//   const url =
//     "https://weatherapi-com.p.rapidapi.com/forecast.json?query=${kyoto%2C%20japan&days=3}";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "c1e715f4b1msh3e4bcb559710aedp1255d5jsna30d6e87ba51",
//       "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//     },
//     /*var whateverYouWant = document.getElementById('btn btn-outline-primary');
//     whateverYouWant = .innerhtml = 'btn btn-outline-primary';*/
//   };
//   fetch(url, options)
//     .then((resp) => {
//       if (!resp.ok) throw new Error(resp.statusText);
//       return resp.json();
//     })
//     .then((data) => {
//       const div = document.createElement("div");
//       const h1 = document.createElement("h1");
//       const h2 = document.createElement("h2");
//       const ul = document.createElement("ul");
//       div.classList.add("weather");
// // jonathan said something about list items //
//       h1.innerText = data.location.country;
//       h2.innerText = data.location.name;
//       ul.innerText = data.forecast.forecastday[0].day.mintemp_c;
//       ul.innerText = data.forecast.forecastday[0].day.maxtemp_c;
//       ul.innertext = data.forecast.forecastday[0].day.avghumidity;
//       ul.innertext = data.forecast.forecastday[0].day.avgtemp_c;
//       ul.innertext = data.forecast.forecastday[0].day.uv;
//       ul.innertext = data.forecast.forecastday[0].day.daily_chance_of_rain;
//       ul.innertext = data.forecast.forecastday[0].day.daily_will_it_rain;
//       ul.innertext = data.forecast.forecastday[0].day.totalprecip_mm;
//       ul.innertext = data.forecast.forecastday[0].day.maxwind_kph;
//       ul.innertext = data.forecast.forecastday[0].day.condition.text;
//       ul.innertext = data.forecast.forecastday[0].day.condition.icon;
//       div.append(h1, h2, ul);
//       weatherContainer.appendChild(div);
//       console.log(data);
//     });





    
//   //.catch(console.err);
//   /*try {
//   fetchWeather: (ev) => {
//         //use the values from latitude and longitude to fetch the weather
//         let lat = document.getElementById('latitude').value;
//         let lon = document.getElementById('longitude').value;
//         let key =
//         let lang = 'en';
//         let units = 'metric';
//         let url =
//         //fetch the weather
//         fetch(url)
//           .then((resp) => {
//             if (!resp.ok) throw new Error(resp.statusText);
//             return resp.json();
//           })
//           .then((data) => {
//             app.showWeather(data);
//           })
//           .catch(console.err);
//       },
// };*/
// } (edited) 









// M










// const searchinput = document.getElementById("searchinput");
// function weatherApi() {
//   const url =
//     "https://weatherapi-com.p.rapidapi.com/forecast.json?query=${kyoto%2C%20japan&days=3}";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "c1e715f4b1msh3e4bcb559710aedp1255d5jsna30d6e87ba51",
//       "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//     },
//   };
//   fetch(url,options)
//     .then((resp) => {
//       if (!resp.ok) throw new Error(resp.statusText);
//       return resp.json();
//     })
//     .then((data) => {
//     console.log(data);
//     })
//     .catch(console.err);

    
// }
// WeatherContainer.appendChild(div);
// console.log(data);
// div.classList.add('weather');
// h1.innerText=data.location.country;
// h2.innerText=data.location.name;
// h3.innerText=forecast.forecastday(0).day;

// div.append(h1,h2,h3);


// // From Jonathan Melin below examples

// // //capture element/container that displays results
// // var departResult = document.getElementById('departResult');

// // //set the value as the innerHTML of element/container
// // departResult.innerHTML = departureAirport;

// const moviesContainer = document.querySelector('.movies-container');

// const input = document.querySelector('.input');
// const button = document.querySelector('.button');

// button.addEventListener('click', () => {
//   const title = input.value;
//   const baseUrl = `http://www.omdbapi.com/?apikey=cdfcfd09`;
//   const movieUrl = `${baseUrl}&t=${title}`;

//   fetch(movieUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const h2 = document.createElement('h2');

//       h2.innerText = data.Title;

//       moviesContainer.appendChild(h2);
//     });
// });
// const moviesContainer = document.querySelector('.movies-container');

// const input = document.querySelector('.input');
// const button = document.querySelector('.button');

// button.addEventListener('click', () => {
//   const title = input.value;
//   const baseUrl = `http://www.omdbapi.com/?apikey=cdfcfd09`;
//   const movieUrl = `${baseUrl}&t=${title}`;

//   fetch(movieUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const div = document.createElement('div');
//       const h2 = document.createElement('h2');
//       const h3 = document.createElement('h3');
//       const img = document.createElement('img');

//       div.classList.add('movie');

//       h2.innerText = data.Title;
//       h3.innerText = data.Released;
//       img.src = data.Poster;

//       div.append(h2, h3, img);

//       moviesContainer.appendChild(div);
//     });
// });

// const moviesContainer = document.querySelector('.movies-container');

// const input = document.querySelector('.input');
// const button = document.querySelector('.button');

// button.addEventListener('click', () => {
//   const title = input.value;
//   const baseUrl = `http://www.omdbapi.com/?apikey=cdfcfd09`;
//   const movieUrl = `${baseUrl}&t=${title}`;

//   fetch(movieUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const country = data.Country;
//       const h2 = document.createElement('h2');
//       h2.innerText = `Country: ${country}`;
//       moviesContainer.appendChild(h2);


//     //  code below to make weather and airport app to work together

//       getJoke(country);
//     });
// });

// const getJoke = (country) => {
//   const jokeUrl = `https://api.chucknorris.io/jokes/search?query=${country}`;

//   fetch(jokeUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const jokeText = data.result[0].value;
//       const h3 = document.createElement('h3');
//       h3.innerText = `Joke about the country: ${jokeText}`;
//       moviesContainer.appendChild(h3);
//     });
// };