const apikey = `7e42156885b2f9b70e76e617900b3e07`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const input = document.querySelector(".input")
const search = document.querySelector(".bx-search")
const temp = document.querySelector(".temp")
const city = document.querySelector(".city")
const img = document.querySelector("img")
const windSpeed = document.querySelector(".wind-speed")
const humidity = document.querySelector(".humidity")
const hide = document.querySelector(".hide")
const form = document.querySelector("form")
 
async function apiFetch (){
        let inputValue = input.value;
    const response =await fetch(apiUrl + inputValue + `&appid=7e42156885b2f9b70e76e617900b3e07`)
        const data = await response.json();
        console.log(data)

        temp.innerHTML = data.main.temp+"°C";
        humidity.innerHTML = data.main.humidity+"%";
        windSpeed.innerHTML = data.wind.speed+"Km/h";
        city.innerHTML = data.name
        // city = input.value;
        if(data.weather[0].main == "Clouds"){
            img.src = "img/cloude.webp"
        }else if(data.weather[0].main == "clear"){
            img.src = "img/clear.png"
        }else if (data.weather[0].main == "Rain"){
            img.src = "img/rain.png"
        }else if (data.weather[0].main == "Drizzle"){
            img.src = "img/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            img.src = "img/mist.png"
        }

}
search.addEventListener("click", ()=>{
    apiFetch();
    hide.style.display = "flex";
    console.log("pallab mondal")
    input.value = ""

})
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    apiFetch();
    hide.style.display = "flex";
    console.log("pallab mondal")
    input.value = ""
})