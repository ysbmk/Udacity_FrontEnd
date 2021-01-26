let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// Personal API Key for OpenWeatherMap API
const apiKey = "09c3d807524b8b8a4abf69acdc3213ac"
const apiBaseUrl ="http://api.openweathermap.org/data/2.5/weather?units=metric&zip="
// Event listener to add function to existing HTML DOM element
document.getElementById("zip").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
    }
});
document.getElementById("generate").addEventListener("click", generateResult);
/* Function called by event listener */
function generateResult(e) {
    const feeling = document.getElementById("feelings").value;
    const zipInserted = document.getElementById("zip").value;
    getWeatherData(apiBaseUrl, apiKey, zipInserted)
    .then(function(data){
        console.log("Posting");
        postData("/addWeather", 
        {
            temp: data.main.temp,
            zip: zipInserted,
            city: data.name,
            weather: data.weather[0].description,
            icon: data.weather[0].icon,
            date: newDate, 
            feeling: feeling
        });
    })
    .then(()=>updateUI()
    )
}
/* Function to GET Web API Data*/
const getWeatherData = async(baseUrl, Key, zip) => {
    let url = `${baseUrl}${zip}&appid=${Key}`
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error){
        console.log("error", error);
    };
}
/* Function to POST data */
const postData = async(url="", data={})=>{
    console.log("Posting data", data);
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
        console.log("data:" ,newData)
        return newData;
    } catch(error){
        console.log("error", error);
    }
}

/* Function to GET Project Data */
const updateUI = async()=>{
    const req = await fetch("/all");
    try{
        const data = await req.json();
        console.log("updateUI",data);
        const mostRecentData = getMostRecent(data);
        console.log("Most recent",mostRecentData);
        document.getElementById("date").innerHTML = `DATE: ${mostRecentData.date}`;
        document.getElementById("zipCode").innerHTML = `ZIP: ${mostRecentData.zip}`;
        document.getElementById("city").innerHtml = `CITY: ${mostRecentData.city}`;
        document.getElementById("temp").innerHTML = `TEMP: ${mostRecentData.temp}℃`;
        document.getElementById("content").innerHTML = mostRecentData.feeling;
    }catch(error){
        console.log("error", error);
    }
}

function getMostRecent(data){
    const numEntry = data.length;
    console.log("numEntry", numEntry);
    console.log(data);
    return data[numEntry-1]
}
  