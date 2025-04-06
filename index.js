

function updateTime(){
let localTIme=moment().tz(moment.tz.guess());
let localTimeElement=document.querySelector("#local-time");
localTimeElement.innerHTML=localTIme.format("[local time] hh:mm:ss [<small>]a[<small>]");
    //chicago
let chicagoElement= document.querySelector("#chicago");
let chicagoTimeElement=chicagoElement.querySelector(".time");
let chicagoDateElement=chicagoElement.querySelector(".date");
let chicagoTime=moment().tz("America/Chicago");

chicagoDateElement.innerHTML=chicagoTime.format("MMM Do YYYY");
chicagoTimeElement.innerHTML=chicagoTime.format("hh:mm:ss [<small>]A[<small>]");
//london
let londonElement= document.querySelector("#london");
let londonTimeElement=londonElement.querySelector(".time");
let londonDateElement=londonElement.querySelector(".date");
let londonTime=moment().tz("Europe/London");

londonDateElement.innerHTML=londonTime.format("MMM Do YYYY");
londonTimeElement.innerHTML=londonTime.format("hh:mm:ss [<small>]A[<small>]");
//tokyo
let tokyoElement= document.querySelector("#tokyo");
let tokyoTimeElement=tokyoElement.querySelector(".time");
let tokyoDateElement=tokyoElement.querySelector(".date");
let tokyoTime=moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML=tokyoTime.format("MMM Do YYYY");
tokyoTimeElement.innerHTML=tokyoTime.format("hh:mm:ss [<small>]A[<small>]");
//sydney
let sydneyElement= document.querySelector("#sydney");
let sydneyTimeElement=sydneyElement.querySelector(".time");
let sydneyDateElement=sydneyElement.querySelector(".date");
let sydneyTime=moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML=sydneyTime.format("MMM Do YYYY");
sydneyTimeElement.innerHTML=sydneyTime.format("hh:mm:ss [<small>]A[<small>]");
}

function updateCity(event){
    let cityTimezone=event.target.value;
    if (cityTimezone==="current"){cityTimezone=moment.tz.guess();}
 
    let cityName=cityTimezone.replace("_"," ").split("/")[1];
    let cityTime=moment().tz(cityTimezone);
    let cityTimeElement=document.querySelector("#cities");
    cityTimeElement.innerHTML=`<div class="city">
    <div><h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMM Do YYYY")}</div></div>
    <div class="time">${cityTime.format("hh:mm:ss [<small>]A[<small>]")}</div></div>`;

}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement=document.querySelector("#timezone");
citiesSelectElement.addEventListener("change",updateCity);






