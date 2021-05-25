const change_text = document.querySelector('.change');


window.addEventListener('load', function() {


  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      const database = [];
      const lat = position.coords.latitude; 
      const long = position.coords.longitude;
      document.querySelector('.latitude').innerHTML = lat;
      document.querySelector('.longitude').innerHTML = long;

      document.querySelector('.submit').addEventListener('click', function(){
        getData();
    
        async function postData(url = '', data = {}) {
            const response = await fetch(url, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
            return response.json(); 
          }
        
        async function getData(){
          const data = await postData('http://127.0.0.1:8000/practice', { latitude : lat, longitude : long });
          database.push(data);
          console.log(database);
        }
      })
    })
  }
});



