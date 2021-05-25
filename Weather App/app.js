const temp = document.querySelector('.temperature-degree');
const unit = document.getElementById('unit');
const icon = document.getElementById('icon');
const searchBtn = document.querySelector('.fa');
const searchCity = document.querySelector('.search-city');

searchBtn.addEventListener('click', function(){
    const city = searchCity.value;
    console.log(city);
})


window.addEventListener('load', function(){
    let long;
    let lat;


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
 
            const api = 'https://api.weatherbit.io/v2.0/current?lat=22.5645&lon=72.9289&key=660a2648f78049e594f9e13a483cb7b8'
            
            catchWeather();
            
            async function catchWeather(){
                console.log("Fetching Data")
                const response = await fetch(api);
                const data = await response.json();
                console.log("Data Fetched")
                temperature = data.data[0].app_temp;
                temp.innerHTML = temperature;
                document.querySelector('.location-timezone').innerHTML = data.data[0].timezone;
                document.querySelector('.temperature-des').innerHTML = data.data[0].weather.description;

                temp.addEventListener('click',function(){
                    if(unit.innerHTML == 'C'){
                        temp.innerHTML = ((temperature * (9/5)) + 32 );
                        unit.innerHTML = 'K';
                    }else{
                        temp.innerHTML = temperature;
                        unit.innerHTML = 'C';
                    }
                })
            }         
        });
    }
});