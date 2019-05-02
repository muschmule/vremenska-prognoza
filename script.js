



document.getElementById("dugme").addEventListener("click", function () {



    document.getElementById("weekdays").innerHTML = ""


    const city = document.getElementById("searchbar").value;
    const requestCity = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e8fd375562bf0578b68cdbfca4821c3`;
    const requestWeekDays = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6e8fd375562bf0578b68cdbfca4821c3`;
    const requestMinMax = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=d43ef2fd90cf4392834d2bf5135f0be6`


    //Weather data for a city
    $.getJSON(requestCity, callbackCity);

    function callbackCity(data) {
        console.log(data)

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




    //Weather data for days in a week
    $.getJSON(requestWeekDays, callbackWeek);

    function callbackWeek(data) {
        console.log(data)
        var outputWeek = document.getElementById("weekdays");
        var inputWeek = data.list

        for (let i = 8; i < data.list.length; i = i + 8) {
            //console.log(temperature[i])

            //outputWeek.innerHTML += inputWeek[i].main.temp + "°C" + " ";
            //console.log(data[i].main.weather[0].description)


            outputWeek.innerHTML += `<div class="box">
            <p class="name-day">${dayOfTheWeek(inputWeek[i].dt)}</p>

            
            <img src="svg/weather/${inputWeek[i].weather[0].icon}.svg" alt=""></img>
            <p class="temperatures-days">${kToC(inputWeek[i].main.temp_min)}°/${kToC(inputWeek[i].main.temp_max)}°</p>
            <p class="descriptionweek">${inputWeek[i].weather[0].description}</p>
            
            </div >`

        }


    }

    $.getJSON(requestMinMax, callbackMinMax);

    function callbackMinMax(data) {
        console.log(data)

        const country = data.results[0].components.country;

        document.getElementById("countryname").innerText = country;

    }


    function dayOfTheWeek(timestamp) {
        var date = new Date(timestamp * 1000);
        var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return week[date.getDay()];
    }


    //Converting Kelvins into Celsius

    function kToC(temp) {
        return Math.round(temp - 273)
    }



});



