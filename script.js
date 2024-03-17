
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("#weather-icon");


async function checkWeather(e){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=92745a0de90e4ac7910175301241203&q=${e}`);
    var data = await response.json();


    console.log(data);
    document.querySelector(".city").innerHTML = data.location.name;
     document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c)+ "°c";
   document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
   document.querySelector(".wind").innerHTML = data.current.wind_kph +"kph";
}

 searchBtn.addEventListener("click", ()=> {
  checkWeather(searchBox.value);
});

