
document.getElementById("dugme").addEventListener("click", function () {



    document.getElementById("weekdays").innerHTML = ""


    //Api request

    const city = document.getElementById("searchbar").value;
    const requestCity = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e8fd375562bf0578b68cdbfca4821c3`;
    const requestWeekDays = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6e8fd375562bf0578b68cdbfca4821c3`;
    const requestMinMax = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=dc3d0a4225dd4ec8be0102109192404&q=${city}&format=json&num_of_days=5`


    //Weather data for a city

    $.getJSON(requestCity, callbackCity);

    function callbackCity(data) {

        const temp = kToC(data.main.temp);
        const location = data.name;
        const description = data.weather[0].description
        const icons = document.getElementById("weathericon")
        const timelocal = dayOfTheWeek(data.dt)
        const wind = data.wind.speed;

        icons.src = `svg/weather/${data.weather[0].icon}.svg`

        document.getElementById("localtime").innerHTML = timelocal;
        document.getElementById("locationcity").innerHTML = location;
        document.getElementById("temperaturedescription").innerHTML = description;
        document.getElementById("temperaturedegree").innerHTML = temp + "°";
        document.getElementById("windspeed").innerText = "Wind" + ":" + " " + wind + "m/s"


    }



    //Forecast weather

    $.getJSON(requestWeekDays, callbackWeek);

    function callbackWeek(data) {

        var outputWeek = document.getElementById("weekdays");
        var inputWeek = data.list

        for (let i = 8; i < data.list.length; i = i + 8) {


            outputWeek.innerHTML += `<div class="box">
            <p class="name-day">${dayOfTheWeek(inputWeek[i].dt)}</p>
            <img src="svg/weather/${inputWeek[i].weather[0].icon}.svg" alt=""></img>
            <p class="descriptionweek">${inputWeek[i].weather[0].description}</p>
            <p class="temperatures-days"></p>
            </div >`

        }
        $.getJSON(requestMinMax, callbackMinMax);

    }

    //Minimalna i maksimalna temperatura

    function callbackMinMax(data) {
        var minmax = data.data.weather
        var minMaxContainer = document.getElementsByClassName("temperatures-days")

        for (i = 0; i < data.data.weather.length - 1; i++) {
            minMaxContainer[i].innerText = `${minmax[i + 1].mintempC}°/${minmax[i + 1].maxtempC}°`
        }
    }


    //Time format

    function dayOfTheWeek(timestamp) {
        var date = new Date(timestamp * 1000);
        var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return week[date.getDay()];
    }


    //Konvertovanje Kelvina u Celzijus 

    function kToC(temp) {
        return Math.round(temp - 273)
    }



});



//Izvrsavanje pretrage pritiskom na taster Enter

function keyboardEnter(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("dugme").click();
    }
}
document.getElementById("searchbar").addEventListener("keyup", keyboardEnter)


