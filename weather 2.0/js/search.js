const tamilNaduDistricts = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupattur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar"
];

let searchBox=document.getElementById('search')
let cityBox=document.getElementById('citybox')

function foreachs(ac){
    cityBox.innerHTML=''
ac.forEach(a=>{
    let li=document.createElement('li')
    li.textContent=a
    li.onclick=()=>{
        localStorage.setItem('value',a)
        window.location.href='home.html'
    }
    li.classList.add('li')
    li.onclick=()=>{
        localStorage.setItem('citi',li.textContent)
        window.location.href='home.html'
    }
    cityBox.appendChild(li)
})
}

foreachs(tamilNaduDistricts)

searchBox.addEventListener('keyup',()=>{
    let query=searchBox.value.trim()
    
    let filterd= tamilNaduDistricts.filter(element=>
        element.toLowerCase().includes(query.toLowerCase())
    );
        foreachs(filterd)

})
function home(){
    window.location.href='home.html'
}