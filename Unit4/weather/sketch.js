// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let description = '' ;

function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Oakville,ON,CA&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US

  // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx

  let myIDString = "appid=b41fbef04de4866e64f04a05f9c6a5eb";

  let myTotalString = myCityString + myIDString;

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  description = weather.weather[0].description;
}

function draw() {
  switch (state) {

    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background(200);
      fill("black");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("Temp is: " + temperature, 20, 60);
      text("Humidity is: " + humidity, 20, 80);
      text(description, 20, 100);

      // cloud
      fill("white");
      noStroke();
      ellipse(x, 300, 200, 100);

      // thermometer
      fill('red');
      y = map(temperature, -10, 100, 5, height-10);
      rect(width-30, height-10, 10, -y);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
