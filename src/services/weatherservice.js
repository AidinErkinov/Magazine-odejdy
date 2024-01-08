export class Weatherservice {
    constructor () {
        this.apikey = "e635bc02d4cc10bfda3e557445c4c790";
        this.apilink = `https://api.openweathermap.org/data/3.0/weather?q=London&q=London&appid=${this.apikey}`;
    }

    get () {
        this.apilink = `https://api.openweathermap.org/data/3.0/weather?q=London&q=London&appid=${this.apikey}`;
        console.log (this.apilink);
        fetch (this.apilink)
        .then (response => {
            console.log (response);
            return "Daniil";
        })
        .then (data => {
            console.log (data)
        }) 
        .catch (error => {
            console.error (error)
        })
    }
}


// `string text ${expression} string text`
