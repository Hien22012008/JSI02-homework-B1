let infected = document.getElementById('infected');
let death = document.getElementById('death');
let country = document.getElementById('country');
let button = document.getElementById("btn");

const url = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Vietnam';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5515175e93mshdf277ee740991dap1eee52jsn20dd8885cdf1',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};
button.addEventListener('click', search)
async function search(){
    let result = {}
    try {
        const response = await fetch(url, options);
        result = await response.json();
        console.log(result);
    } catch (error) {
        
}

if(result.statusCode === 200){
    infected.innerHTML = result.data.confirmed;
    death.innerHTML = result.data.deaths;
    country.innerHTML = result.data.location;
    console.log("--",result.data.deaths);
}
}