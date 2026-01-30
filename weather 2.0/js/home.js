let temp=document.getElementById('temp')
let mainImage=document.getElementById('main-image')
let time=document.getElementById('time')
let sideBar=document.getElementById('side-bar-container')
let wind=document.getElementById('wind')
let location2=document.getElementById('location')
let body=document.getElementById('body')
let visibilty=document.getElementById('visibility')
let searchContainer=document.getElementById('search-container')
let humidity=document.getElementById('humidity')
let searchInput=document.getElementById('search')
let searchBtn=document.getElementById('search-btn')
let city='madurai'
let key="823e365baa6a65c14c3dd1d0fb93300f"

searchBtn.addEventListener('click',()=>{
    city=searchInput.value.trim()
    searchInput.value=''
    getWeather()
})

async function getWeather(){
try{
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

let res= await fetch(url)

let weather= await res.json()
console.log(weather)

ui(weather)
}
catch(error){
 console.log('network error please check internet',error.message)
}


}

function  ui(weat){
    temp.textContent=weat.main.temp
    humidity.textContent=weat.main.humidity+' %'
    wind.textContent=weat.wind.speed+' m/s'
    visibilty.textContent=weat.visibility+' m'
    location2.textContent=weat.name
    let date=new Date()
let today=date.toLocaleDateString('en-GB',{
    weekday:'long',
    day:'numeric',
    month:'long',
    year:'numeric'
})
    time.textContent=today
    if(weat.weather[0].icon=='03d'||weat.weather[0].icon=='03n'||weat.weather[0].icon=='02n'||weat.weather[0].icon=='04d'||weat.weather[0].icon=='04n'){
      mainImage.textContent='cloud'
    }
    else if(weat.weather[0].icon=='09d'||weat.weather[0].icon=='09n'||weat.weather[0].icon=='10d'||weat.weather[0].icon=='10n'){
       mainImage.textContent='rainy'
    }
    else if(weat.weather[0].icon=='11d'||weat.weather[0].icon=='11n'){
        mainImage.textContent='thunderstorm'
    }
     else if(weat.weather[0].icon=='13d'||weat.weather[0].icon=='13n'){
        mainImage.textContent='ac_unit'
    }
     else if(weat.weather[0].icon=='01d'){
        mainImage.textContent='wb_sunny'
    }
    else if(weat.weather[0].icon=='01n'){
        mainImage.textContent='nights_stay'
    }
    else{
        mainImage.textContent='partly_cloudy_day'
    }
     
}


let humburger=document.getElementById('humburger')
humburger.addEventListener('click',(e)=>{
     sideBar.classList.add('side-bar-show')
     e.stopPropagation()
})
sideBar.addEventListener('click',(e)=>{
   e.stopPropagation()
})
body.addEventListener('click',()=>{
    sideBar.classList.remove('side-bar-show')
})
   
function searchShow(){
    searchContainer.classList.toggle('search-container-show')
}

