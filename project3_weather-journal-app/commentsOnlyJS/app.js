let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// Personal API Key for OpenWeatherMap API
const apiKey = "09c3d807524b8b8a4abf69acdc3213ac"
const apiBaseUrl ="api.openweathermap.org/data/2.5/weather?zip="
// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", generateResult);
/* Function called by event listener */
function generateResult(e) {
    const feeling = document.getElementById("feelings").value;
    const zipInserted = document.getElementById("zip").value;
    getWeatherData(apiBaseUrl, apiKey, zipInserted)
    .then(function(data){
        postData("/addWeather", {temp: data.main.temp, date: newDate, content: feeling})
    })
    updateUI()

}
/* Function to GET Web API Data*/
const getWeatherData = async(baseUrl, Key, zip) => {
    let url = `${baseUrl}${zip}&appid=${Key}`
    const res = await fetch(url);
    try {
        const data = await res.json();
    } catch(error){
        console.log("error", error);
    };
}
/* Function to POST data */
const postData = async(url="", data={})=>{
    const res = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await res.json();
        return newData;
    } catch(error){
        console.log("error", error);
    }
}

/* Function to GET Project Data */
function postFet(){
    getWeatherData(apiBaseUrl, apiKey, zipInserted).then(function(data))
}
  