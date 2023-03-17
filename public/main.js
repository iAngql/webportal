const body = document.getElementById("body");


// Specify the URL to fetch
var url = "https://wttr.in?format=4";


// Make a GET request using jQuery
$.get(url, (data) => {
    // console.log(data);
    document.getElementById("weather").innerText = data;
});