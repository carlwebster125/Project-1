console.log('blah')

let departureAirportCode = document.getElementById("flightDepartureAirport")
let arrivalAirportCode = document.getElementById("flightArrivalAirport")
let departResult = document.getElementById("departResult")
let arriveResult = document.getElementById("arriveResult")

let departTemp = document.getElementById("departTemp")
let arriveTemp = document.getElementById("arriveTemp")

async function flightFinder () {
  //fetching depature data
  airportFetch (departureAirportCode,departResult,departTemp)
  //fetching arrival data
  airportFetch (arrivalAirportCode,arriveResult,arriveTemp)
  };

  
  

  


async function airportFetch (airportCodeDiv,resultDiv,tempDiv){

  console.log (airportCodeDiv.value)
  const url = `https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport?query=${airportCodeDiv.value.toLowerCase()}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9f9e3afb20msh8485acd6412db8bp1d7fbbjsn066f007a3714',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
    }
    
  };
  
  try {
  const response = await fetch(url, options);
   const result = await response.json();
   console.log(result)
   const city = result.data[0]
   console.log(city)
   const address=result.data[0].details.address
   resultDiv.innerText=address  
   console.log(address)
   const airport= city.coords.split(",")
  console.log (airport)
  const latitude = airport[0]
  const longitude = airport[1]
  weatherApi(latitude,longitude,tempDiv)
  // console.log(result.data);
  } catch (error) {
   console.error(error);
  }

}


const weatherContainer = document.querySelector(".weather-container");
const input = document.querySelector(".input");
const button = document.querySelector("#btn btn-outline-primary"); // weather button //
button.addEventListener("click", () => {
  const weather = input.value;
  console.log(input.value);
}
);



const searchinput = document.getElementById("searchinput");

function weatherApi(lat,long,tempdiv) {
  
  
  //   "https://weatherapi-com.p.rapidapi.com/forecast.json?query=${kyoto%2C%20japan&days=3}";
  const url= `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${long}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c1e715f4b1msh3e4bcb559710aedp1255d5jsna30d6e87ba51",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
    
  };
  fetch(url, options)
    .then((resp) => {
      if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })
    .then((data) => {
      console.log(data)
      tempdiv.innerText=`${data.current.temp_f}F` 
  
      const div = document.createElement("div");
      const h1 = document.createElement("h1");
      const h2 = document.createElement("h2");
      const ul = document.createElement("ul");
      div.classList.add("weather");
    });
} (edited) 