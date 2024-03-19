let loc=document.getElementById("location")
let button=document.querySelector("#button")
let temparature=document.getElementById("temp")
let humidity=document.getElementById("hum")
let img=document.querySelector("#img")
let description=document.querySelector("#description")

let checkwetherdetails=async(city)=>{
    let key="5f49e66eb8236af8c3ccdcd764af37c8"
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
let weather1=await fetch(url)
let weather2=await weather1.json()

let degrees=Math.round(weather2.main.temp-273)
temparature.innerHTML=`${degrees}<sup>o</sup> C`
humidity.innerHTML=`${weather2.main.humidity}%`
description.innerHTML=`${weather2.weather[0].description}`
console.log(weather2.weather[0].description)

switch(weather2.weather[0].description){
    case 'haze':
        img.src="haze.gif"
        // background.src="haze.png"
        break;   
    case 'snow':
        img.src="snow.gif"
         break; 
    case 'clouds':
        img.src="cloud.gif"
        break;
    case 'clear sky':
        img.src="clear sky.gif"
        break;  
    case 'rainy':
        img.src="rainy.gif"
        break; 
    case 'smoke':
        img.src="smoke.jpg"  
        break;  
    default:
        img.src="images.png"
        break;           
    }
}
button.addEventListener("click",()=>{
    checkwetherdetails(loc.value)
})