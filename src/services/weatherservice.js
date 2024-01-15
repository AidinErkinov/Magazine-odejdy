export class Weatherservice {
    constructor() {
        this.apikey = "e635bc02d4cc10bfda3e557445c4c790";
        this.city = "London";
        this.apiserver = "https://api.openweathermap.org";
        this.apiPath = "/data";
        this.apiVersion = "2.5"
        this.apiMethod = "weather"
        this.apiParameters = `q=${this.city}&appid=${this.apikey}`;
        this.initEvenListeners ();
    }

    get() {
        this.city = this.selectCity.value;
        this.apiParameters = `q=${this.city}&appid=${this.apikey}`
        fetch(`${this.apiserver}${this.apiPath}/${this.apiVersion}/${this.apiMethod}?${this.apiParameters}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP-Error: " + response.status);
                }
                return response.json(); // Парсим JSON вместо текста
            })
            .then(data => {
                this.showWeather(this.parseWeather(data));
            })
            .catch(error => {
                console.error(error);
            });
    }

    parseWeather(data) {
        let mainWeather = data["main"];
        let currentWeather = data["weather"][0];
        let weather = {
            "temp": mainWeather["temp"],
            "humidity": mainWeather["humidity"],
            "description": currentWeather["description"],
        };
        console.log (data);
        console.log(weather);
        return weather;
    }

    showWeather(weather) {
        document.querySelector('.weather__temp').textContent = "Temperature: " + Math.round(weather.temp - 273) + '°C';
        document.querySelector('.weather__humidity').textContent = 'Humidity: ' + weather.humidity + '%';
        
        let perevod = "";
        switch (weather.description) {
            case "clear sky":
                perevod = "чистое небо";
                break;
            case "partly cloudy":
                perevod = "облачность";
                break;
            default: 
                perevod = "неизвестно";
        }
        document.querySelector('.weather__desc').textContent = 'Description: ' + perevod;
    }
    
    initEvenListeners () {
        this.selectCity = document.querySelector (".city-select");
        this.selectCity.addEventListener("change", this.get.bind(this));
    }
}



/* export class Weatherservice {
    constructor () {
        this.apikey = "e635bc02d4cc10bfda3e557445c4c790";
        this.apilink = `https://api.openweathermap.org/data/2.5/weather?q=London&q=London&appid=${this.apikey}`;
    }

    get () {
        this.apilink = `https://api.openweathermap.org/data/2.5/weather?q=London&q=London&appid=${this.apikey}`;
        console.log (this.apilink);
        fetch (this.apilink, {
            "method": "GET"  
        })
        .then (response => {
            console.log (response);
            if (!response.ok) {
                throw new Error ("HTTP-Error: " + response.status);
            }
            return response.text ();
        })
        .then (data => {
            this.showWeather (this.parseWeather (data));
        }) 
        .catch (error => {
            console.error (error)
        })
    }
    parseWeather (data) {
        let weatherObj = JSON.parse(data);
        let mainWeather = weatherObj ["main"];
        if (weatherObj ["weather"].length>0) {
            var currentWeather = weatherObj ["weather"] [0]
        } 
        let weather = {
            "temp": mainWeather ["temp"],
            "humidity": mainWeather ["humidity"],
            "description": currentWeather ["description"]
        }
        console.log (data);
        console.log (weather);
        return weather;
    }

    showWeather (weather) {
        document.querySelector('.weather__city').textContent = data.name;
        document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
        document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    }
} /*



  /*  displayWeather(weather, element) {
        element.innerHTML = `
          <div>Temperature: ${weather.temp}</div>
          <div>Humidity: ${weather.humidity}</div>
          <div>Description: ${weather.description}</div> `;
      }

      showWeather(data) {
        let weatherData = parseWeather(data);
        let element = document.getElementById("weather");
        displayWeather(weatherData, element);
      }
    }
*/
// создать блок погоды справа в ящике, и скидывай их туда


// `string text ${expression} string text`
