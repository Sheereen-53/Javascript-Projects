window.addEventListener('load', function(){

    const api = 'https://api.covid19api.com/summary';

    fetch(api)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);

            document.querySelector('.cases').textContent = data.Global.TotalConfirmed;
            document.querySelector('.deaths').textContent = data.Global.TotalDeaths;
            document.querySelector('.recoveries').textContent = data.Global.TotalRecovered;
        });
});