function updateLisbonTime(){
let lisbonElement= document.querySelector("#lisbon");
let LisbonTimeElement=lisbonElement.querySelector(".time");
let LisbonDateElement=lisbonElement.querySelector(".date");
let LisbonTime=moment().tz("Europe/Lisbon");

LisbonDateElement.innerHTML=LisbonTime.format("MMM Do YYYY");
LisbonTimeElement.innerHTML=LisbonTime.format("h:mm:ss [<small>]A[<small>]");}
setInterval(updateLisbonTime, 1000);









