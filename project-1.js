console.log('blah')

const Infobutton=document.querySelector('.Info-button')
Infobutton.addEventListener('click',()=>console.log('Hello'))

//below function to be completed with travel AP instead.

async function logMovies() {
  const response = await fetch("http://example.com/movies.json");
  const movies = await response.json();
  console.log(movies);}