const cityEl = document.getElementById("city")
const dateEl =document.getElementById("date")
const tempEl=document.getElementById("temp")
const windEl = document.getElementById("wind")
const humidityEl = document.getElementById("humidity")
const forecastContainer = document.getElementById("container")
const apiKey= "bfa77fa36fc4303a153bdbe837177e79"
const url = "https://api.openweathermap.org"
const searchInput = document.getElementById("searchbar")
const latEl =document.getElementById("lat")
const lonEl= document.getElementById("lon")

document.getElementById('submit').addEventListener("click",searchweather)
function searchweather(){
    const city=document.getElementById('searchbar').value
const url = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=bfa77fa36fc4303a153bdbe837177e79&units=imperial"
fetch(url).then(function(res){
    return res.json()
}).then(function(data){
    console.log(data)
cityEl.innerText=data.city.name
dateEl.innerText=data.list[0].dt_txt
tempEl.innerText=data.list[0].main.temp
windEl.innerText=data.list[0].wind.speed
humidityEl.innerText=data.list[0].main.humidity
latEl.innerText=data.city.coord.lat
lonEl.innerText=data.city.coord.lon


for(let i=0;i<5;i++){
    const forecast =data.list[i*8]
console.log(forecast)
const fivedays=document.createElement("p")
fivedays.id=`${i+1}`
 fivedays.innerHTML=`
 <h1>${forecast.dt_txt}</h1>
 <div>${forecast.main.temp}</div>
<div>${forecast.wind.speed}</div>
 <div>${forecast.main.humidity}</div>
`
forecastContainer.appendChild(fivedays)
}
})

// function fivedayForcast(daily){
//     // for(let i=0;i<daily.length;i++){
//     //     if(daily[i] )
//     // }
//     // searchweather()
// }
}

function fetchTheWeather(search) {
const apiUrl = `${url}/geo/1.0/direct?=${search}&limit=5&appid=${apiKey}`
fetch(apiUrl).then(function(res){
    return res.json()
}).then(function(data){
    console.log(data)
latEl.innerText=data.city.coord.lat
lonEl.innerText=data.city.coord.lon
})
}
function handleSearch(e){
console.log("event", event)
e.preventDefault()
const search= searchInput.value
console.log("search",search)
}
document.getElementById("searchform").addEventListener("submit",handleSearch)
