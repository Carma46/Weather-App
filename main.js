const button = document.querySelector('button');
button.addEventListener('click', addCity);


function addCity(){
    let cityValue = document.getElementById("cityInput").value
    console.log(cityValue);
    let city = document.querySelector('.city');
    city.innerHTML = cityValue;

    let apiKey = "f60af2d108084b5a85b11513230501";
    console.log("This is the city name:", cityValue);

    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityValue}&days=4&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let tempf = document.querySelector('.tempf');
        tempf.innerHTML = data.current.temp_f;
        let wind = document.querySelector('.wind');
        wind.innerHTML = data.current.wind_mph;
      });
  }
