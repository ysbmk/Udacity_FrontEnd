// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'))


// Setup Server
const port = 7777;

const server = app.listen(
    port, 
    ()=>{console.log(`running on localhost: ${port}`)});

// Post data
const weatherData = [];
// get data
app.get('/all',getData)
function getData(req, res){
    res.send(weatherData);
    console.log(weatherData);
}
app.post("/addWeather", addWeather)

function addWeather(req, res){
    const data = req.body;
    console.log("addWeather", data);
    newEntry = {
        temp: data.temp,
        zip: data.zip,
        city: data.city,
        weather: data.weather,
        icon: data.icon,
        date: data.date, 
        feeling: data.feeling
    };
    weatherData.push(newEntry)
    console.log("Pushed data:", weatherData);
    res.send(weatherData)
    console.log("Pushed data:", weatherData);
}
