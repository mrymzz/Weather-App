// http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=8tVkl3Mcv9E6GRBBTaqU6SHCpZ6ibVU2&q=cairo
// key

// http://dataservice.accuweather.com/forecasts/v1/daily/5day/127164?apikey=8tVkl3Mcv9E6GRBBTaqU6SHCpZ6ibVU2
//  response data



var today =document.getElementById("today")
var todayDate =document.getElementById("today-date")
var cityLocation =document.getElementById("location")
var todayDegree =document.getElementById("today-degree")
var todayIcon =document.getElementById("today-icon")
var humidty =document.getElementById("humidty")
var wind =document.getElementById("wind")
var compass =document.getElementById("compass")
var description =document.getElementById("today-description")
var searchbar =document.getElementById("search-bar")


var nextDay=document.getElementsByClassName("nextday")
var nextDayDescription =document.getElementsByClassName("nextday-description")
var nextDayIcon =document.getElementsByClassName("nextday-icon")
var maxDegree =document.getElementsByClassName("max-degree")
var minDegree =document.getElementsByClassName("min-degree")
var api
 var response
 var city='cairo'
//  var responsedata
//  var thedata
var monthname = ['Jan','Feb','March','April','May','June','July','Aug','Spet','Oct','Nov','Dec']
var days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
 ];
 
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                            //   --------------------------    لم تظبط معنا -----------------------------
                            // this site has no enough attributes -i guess-
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// async function getk(city){

//    api = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=8tVkl3Mcv9E6GRBBTaqU6SHCpZ6ibVU2&q=${city}`)
//     response =await api.json()
//     return response[0].Key
//     // console.log(response[0].Key)
//   }


// var key= await getk("cairo")
// // console.log(response[0].Key)

//  async function data(key){
// responsedata=await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=8tVkl3Mcv9E6GRBBTaqU6SHCpZ6ibVU2`)
// thedata=await responsedata.json()
// console.log(thedata)
// todayweather()
//  }
//  data(key)
 
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
async function data(city){
    api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${city}&days=3`)
     response= await api.json()
    console.log(response)
    todayweather();
    nextt()
  }
 data("cairo");




 function todayweather(){
    let date =new Date();
    console.log(date)
    today.innerHTML= days[date.getDay()];
    todayDate.innerHTML=`${date.getDate()} ${monthname[date.getMonth()]}`
    cityLocation.innerHTML=response.location.name
    // todayIcon.innerHTML= todayIcon.setAttribute("src",`https:${responseData.current.condition.icon}`)
    todayIcon.setAttribute("src",`https:${response.current.condition.icon}`)
    todayDegree.innerHTML=response.current.temp_c
    wind.innerHTML = response.current.wind_kph
    compass.innerHTML =response.current.wind_dir
    description.innerHTML = response.current.condition.text
    humidty.innerHTML=response.current.humidity
 }



function nextt(){
    for( let i=0; i<nextDay.length;i++){
        nextDay[i].innerHTML=days[new Date(response.forecast.forecastday[i+1].date).getDay()]
       nextDayDescription[i].innerHTML=response.forecast.forecastday[i+1].day.condition.text
       nextDayIcon[i].setAttribute('src',`https:${response.forecast.forecastday[i+1].day.condition.icon}`)
       maxDegree[i].innerHTML=response.forecast.forecastday[i+1].day.maxtemp_c
       minDegree[i].innerHTML=response.forecast.forecastday[i+1].day.mintemp_c

    }
}





searchbar.addEventListener("keyup",function(){
    city=searchbar.value
    console.log(city)
    data(city)
})
