

// home page

let input=document.getElementById('input')
let title=document.getElementById('title')
let mainImage =document.getElementById('image2')
let date2=document.getElementById('date')
let tem=document.getElementById('temp')
let vInfo=document.getElementById('v-info')
let wInfo=document.getElementById('w-info')
let hInfo=document.getElementById('h-info')
let btn4=document.getElementById('btn')
let cityname=document.getElementById('cityName')
let des=document.getElementById('des')
 let key="823e365baa6a65c14c3dd1d0fb93300f"

 let stored=localStorage.getItem('data')
 let data=null
 if(stored && stored !=='undefined'){
     data=JSON.parse(stored)
 }

if(data){
ui(data)
}

async function getweather(city){
    try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
        let res= await fetch(url)
        data= await res.json()
        console.log(data);
        if(data.cod==404){
            tem.textContent='city not found'
     hInfo.textContent=``
     wInfo.textContent=``
     vInfo.textContent=``
     des.textContent=``
     cityname.textContent=``

            return 
        }
         update(data)

         ui(data)
        //  data={temp,cityName,pressure,icon,description,speed,humidity}
       
        
    }
    catch(error){
         console.log("fetching error check interner:",error.message);


    }
}

function ui(data){
    let {main,name,weather,wind}=data
        let temp=main.temp
        let cityName=name
        let humidity=main.humidity
        let speed=wind.speed
        let pressure=main.pressure
        let icon=weather[0].icon
        let discription=weather[0].description
       
        console.log(temp,cityName,pressure,icon,discription,humidity,speed);
    
     tem.textContent=`${temp} C`
     hInfo.textContent=`${humidity} %`
     wInfo.textContent=`${speed} km/h`
     vInfo.textContent=`${pressure} hPa`
     des.textContent=`${discription}`
     let icons={
        '01d':'./assets/01d.png',
        '01n':'./assets/01n.png',
        '02d':'./assets/02d.png',
        '02n':'./assets/02n.png',
        '03d':'./assets/03d.png',
        '03n':'./assets/03n.png',
        '04d':'./assets/04d.png',
        '04n':'./assets/04n.png',
        '09d':'./assets/09d.png',
        '09n':'./assets/09n.png',
        '10d':'./assets/10d.png',
        '10n':'./assets/10n.png',
        '11d':'./assets/11d.png',
        '11n':'./assets/11n.png',
        '13d':'./assets/13d.png',
        '13n':'./assets/13n.png',
        '50d':'./assets/50d.png',
        '50n':'./assets/50n.png'
     }
     mainImage.setAttribute('src',`${icons[icon]}`)
     cityname.textContent=`${cityName}`

}

 function update(d){  
    if(d)   {
     localStorage.setItem('data',JSON.stringify(d))

}}



btn4.addEventListener('click',()=>{
let area=input.value.trim()

    if(area){
        getweather(area)

        
       
    }
    else{
        return alert('enter city')
    }
    input.value=''
})

window.onload=()=>{
    document.querySelectorAll('.box').forEach((b)=>{
           b.classList.add('show')
    })
}

