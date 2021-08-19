function displayData(){
    var countryName = document.getElementById("inputField").value;
    
    //fetch request to coronavirus stats api
    fetch("https://corona.lmao.ninja/v2/countries/"+countryName)
        .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("name").innerHTML = data.country;

        document.getElementById("tests").innerHTML = data.tests;
        document.getElementById("cases").innerHTML = data.cases;
        document.getElementById("active-cases").innerHTML = data.active;
        document.getElementById("critical-cases").innerHTML = data.critical;
        document.getElementById("recovered").innerHTML = data.recovered;
        document.getElementById("deaths").innerHTML = data.deaths;
        document.getElementById("population").innerHTML = data.population;

        document.getElementById("confirmed-percents").innerHTML = ((data.cases/data.population)*100).toFixed(2)+"%";
        document.getElementById("active-percents").innerHTML = ((data.active/data.population)*100).toFixed(2)+"%";
        document.getElementById("critical-percents").innerHTML = ((data.critical/data.population)*100).toFixed(4)+"%";
        document.getElementById("recovered-percents").innerHTML = ((data.recovered/data.cases)*100).toFixed(2)+"%";
        document.getElementById("deaths-percents").innerHTML = ((data.deaths/data.cases)*100).toFixed(2)+"%";

        document.getElementById("tests-stats").innerHTML=Math.round(data.testsPerOneMillion);
        document.getElementById("confirmed-stats").innerHTML = Math.round(data.casesPerOneMillion);
        document.getElementById("active-stats").innerHTML = Math.round(data.activePerOneMillion);
        document.getElementById("critical-stats").innerHTML = Math.round(data.criticalPerOneMillion);
        document.getElementById("recovered-stats").innerHTML = Math.round(data.recoveredPerOneMillion);
        document.getElementById("deaths-stats").innerHTML = Math.round(data.deathsPerOneMillion);
    });
}
