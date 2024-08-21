const cityEl = document.getElementById("city")
const dateEl =document.getElementById("date")
const tempEl=document.getElementById("temp")
const windEl = document.getElementById("wind")
const humidityEl = document.getElementById("humidity")
const forcastContainer = document.getElementById("container")
const apiKey= "bfa77fa36fc4303a153bdbe837177e79"
const url = "https://api.openweathermap.org"
const searchInput = document.getElementById("searchbar")


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

// forcast.innerText=data.city.name
// forcast.innerText=data.list[0].dt_txt
// forcast.innerText=data.list[0].main.temp
// forcast.innerText=data.list[0].wind.speed
// forcast.innerText=data.list[0].main.humidity
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

}
function handleSearch(e){
console.log("event", event)
e.preventDefault()
const search= searchInput.value
console.log("search",search)
}
handleSearch()