

let temp_c =document.querySelector(".temp h3")
let city=document.querySelector(".time_location span")
let timeField=document.querySelector(".time_location p")
let iconField=document.querySelector(".icon img")
let textField=document.querySelector(".condition p")
let searchField=document.querySelector(".search_area")
let form=document.querySelector("form")

form.addEventListener('submit',searchLocation)


let target="pakistan"
const getApi=async(targetLocation)=>{
  let url=`http://api.weatherapi.com/v1/current.json?key=e90ad6ac639649b4957165616260705&q=${targetLocation}&aqi=yes`

  let res=await fetch(url)
  const data=await res.json()
  console.log(data);
  let temp=data.current.temp_c
  let cityName=data.location.name
  let date_time=data.location.localtime
  console.log(date_time)
  let icon=data.current.condition.icon
  console.log("https:"+icon)
  let text=data.current.condition.text

  updateDetails(temp,cityName,date_time,icon,text)


}
function updateDetails(temp ,cityName,date_time ,icon,text){
  temp_c.innerText = temp + "°C";
  city.innerText=cityName
  timeField.innerText=date_time
  iconField.src = "https:" + icon;
  textField.innerText=text

}

function searchLocation(e){
  e.preventDefault()
  target=searchField.value
  getApi(target)
}

getApi(target);