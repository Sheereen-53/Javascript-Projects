getData();
let long;
let lat;

async function getData(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            getJSON();

            async function getJSON(){
                const response = await fetch(`https://api.wheretheiss.at/v1/coordinates/${lat},${long}`)
                const data = await response.json();

                console.log(data);

                document.querySelector('.notShow').href = data.map_url;
            }
        })
    }
}
